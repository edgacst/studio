// 강제 전체 번역 스크립트
// 모든 텍스트를 자동으로 번역 처리합니다

(function() {
    'use strict';
    
    // 번역 맵핑 (한국어 텍스트 -> 번역 키)
    const textToI18nMap = {
        // Video Section
        '영상으로 만나보세요': 'video.subtitle',
        '회사 소개 영상': 'video.title',
        '지혜로운 손길의 이야기를 영상으로 만나보세요': 'video.description',
        '소개 영상 준비 중입니다': 'video.placeholder',
        '곧 멋진 영상으로 찾아뵙겠습니다': 'video.coming_soon',
        '영상에서 확인하실 수 있는 내용': 'video.content_title',
        '김기철 대표의 인사말': 'video.content1',
        '회사 비전과 철학': 'video.content2',
        '제작 프로세스 소개': 'video.content3',
        '고객 성공 사례': 'video.content4',
        'AI 기술 활용 방법': 'video.content5',
        
        // Contact Section
        '무료 상담': 'contact.subtitle',
        '프로젝트 문의하기': 'contact.title',
        '궁금하신 점이 있으시면 언제든지 연락주세요. 24시간 이내 답변드립니다.': 'contact.description',
        '연락처 정보': 'contact.info_title',
        '전화': 'contact.phone_label',
        '평일 09:00 - 18:00': 'contact.phone_hours',
        '이메일': 'contact.email_label',
        '24시간 접수 가능': 'contact.email_hours',
        '주소': 'contact.address_label',
        '방문 상담 환영 (사전 예약)': 'contact.address_note',
        '소셜 미디어': 'contact.social_title',
        '이름 *': 'contact.name_label',
        '연락처 *': 'contact.phone_input_label',
        '이메일': 'contact.email_input_label',
        '희망 서비스': 'contact.service_label',
        '선택해주세요': 'contact.service_placeholder',
        '기본 패키지': 'contact.service_basic',
        '표준 패키지': 'contact.service_standard',
        '프리미엄 패키지': 'contact.service_premium',
        '상담만': 'contact.service_consult',
        '프로젝트 설명 *': 'contact.message_label',
        '어떤 웹사이트를 만들고 싶으신가요? 자세히 알려주세요.': 'contact.message_placeholder',
        '개인정보 수집 및 이용에 동의합니다': 'contact.privacy_agree',
        '상담 신청하기': 'contact.submit_button',
        
        // Footer
        '서비스 바로가기': 'footer.services_title',
        '기업 홈페이지': 'footer.service1',
        '쇼핑몰': 'footer.service2',
        '포트폴리오': 'footer.service3',
        '반응형 웹': 'footer.service4',
        '고객 지원': 'footer.support_title',
        '자주 묻는 질문': 'footer.faq',
        '이용약관': 'footer.terms',
        '개인정보처리방침': 'footer.privacy',
        '문의하기': 'footer.contact',
        '뉴스레터': 'footer.newsletter_title',
        '최신 소식을 받아보세요': 'footer.newsletter_desc',
        '이메일 주소': 'footer.newsletter_placeholder',
        '구독하기': 'footer.newsletter_button',
        
        // Pricing features
        '5페이지 구성': 'pricing.basic.feature1',
        '반응형 디자인': 'pricing.basic.feature2',
        '기본 SEO 설정': 'pricing.basic.feature3',
        '문의 양식': 'pricing.basic.feature4',
        '지도 통합': 'pricing.basic.feature5',
        '1개월 무료 수정': 'pricing.basic.feature6',
        '관리자 페이지': 'pricing.basic.feature7',
        '게시판 기능': 'pricing.basic.feature8',
        
        '10페이지 구성': 'pricing.standard.feature1',
        '프리미엄 SEO': 'pricing.standard.feature3',
        '3개월 무료 수정': 'pricing.standard.feature6',
        
        '무제한 페이지': 'pricing.premium.feature1',
        '고급 SEO 최적화': 'pricing.premium.feature3',
        '맞춤 기능 개발': 'pricing.premium.feature4',
        '고급 애니메이션': 'pricing.premium.feature5',
        '6개월 무료 수정': 'pricing.premium.feature6',
        '게시판 + 회원 시스템': 'pricing.premium.feature8',
        
        '소상공인, 개인사업자 추천': 'pricing.basic.note',
        '중소기업, 스타트업 추천': 'pricing.standard.note',
        '쇼핑몰, 대형 프로젝트 추천': 'pricing.premium.note',
        
        '추가 서비스': 'pricing.extra_title',
        '월 유지보수': 'pricing.extra_maintenance',
        '월 15만원': 'pricing.extra_maintenance_price',
        '호스팅 & 도메인': 'pricing.extra_hosting',
        '연 10만원': 'pricing.extra_hosting_price',
        '콘텐츠 작성': 'pricing.extra_content',
        '페이지당 5만원': 'pricing.extra_content_price',
        '사진 촬영': 'pricing.extra_photo',
        '별도 견적': 'pricing.extra_photo_price',
        
        // About
        '(주)에드가씨에스티': 'about.company_name_full',
        '김기철': 'about.ceo_name_only',
        '634-81-02760': 'about.business_number_value',
        '경기도 부천시 원미구 송내대로74번길 34, B103호': 'about.address_value',
        '진정성': 'about.value1_title',
        '고객과의 솔직하고 따뜻한 소통': 'about.value1_desc',
        '신뢰': 'about.value2_title',
        '약속을 지키고 책임지는 자세': 'about.value2_desc',
        '혁신': 'about.value3_title',
        '나이에 구애받지 않는 배움의 자세': 'about.value3_desc',
        '품질': 'about.value4_title',
        '타협하지 않는 최고의 결과물': 'about.value4_desc'
    };
    
    // DOM 로드 완료 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🚀 강제 전체 번역 시작...');
        
        // 모든 텍스트 노드 찾아서 번역 적용
        applyTranslationsByText();
        
        // 특정 선택자로 직접 적용
        applyTranslationsBySelector();
        
        // 번역 재적용
        if (typeof translatePage === 'function') {
            setTimeout(() => {
                translatePage();
                console.log('✅ 전체 번역 완료!');
            }, 100);
        } else {
            console.warn('Translation system not loaded');
        }
    });
    
    function applyTranslationsByText() {
        // 모든 요소를 순회하며 텍스트 매칭
        document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, label, button, option, strong, small, li').forEach(el => {
            if (el.hasAttribute('data-i18n')) return; // 이미 있으면 스킵
            
            const text = el.textContent.trim();
            if (textToI18nMap[text]) {
                el.setAttribute('data-i18n', textToI18nMap[text]);
            }
        });
    }
    
    function applyTranslationsBySelector() {
        // Contact Form
        const nameLabel = document.querySelector('label[for="name"]');
        if (nameLabel && !nameLabel.hasAttribute('data-i18n')) {
            nameLabel.setAttribute('data-i18n', 'contact.name_label');
        }
        
        const phoneLabel = document.querySelector('label[for="phone"]');
        if (phoneLabel && !phoneLabel.hasAttribute('data-i18n')) {
            phoneLabel.setAttribute('data-i18n', 'contact.phone_input_label');
        }
        
        const emailLabel = document.querySelector('label[for="email"]');
        if (emailLabel && !emailLabel.hasAttribute('data-i18n')) {
            emailLabel.setAttribute('data-i18n', 'contact.email_input_label');
        }
        
        const serviceLabel = document.querySelector('label[for="service"]');
        if (serviceLabel && !serviceLabel.hasAttribute('data-i18n')) {
            serviceLabel.setAttribute('data-i18n', 'contact.service_label');
        }
        
        const messageLabel = document.querySelector('label[for="message"]');
        if (messageLabel && !messageLabel.hasAttribute('data-i18n')) {
            messageLabel.setAttribute('data-i18n', 'contact.message_label');
        }
        
        // Textarea placeholder
        const messageTextarea = document.querySelector('#message');
        if (messageTextarea) {
            messageTextarea.setAttribute('data-i18n-placeholder', 'contact.message_placeholder');
        }
        
        // Submit button
        const submitBtn = document.querySelector('button[type="submit"] span');
        if (submitBtn && !submitBtn.hasAttribute('data-i18n')) {
            submitBtn.setAttribute('data-i18n', 'contact.submit_button');
        }
        
        // Pricing buttons
        document.querySelectorAll('.pricing-card .btn').forEach((btn, index) => {
            const span = btn.querySelector('span') || btn;
            if (!span.hasAttribute('data-i18n')) {
                if (index === 0) span.setAttribute('data-i18n', 'pricing.basic.button');
                else if (index === 1) span.setAttribute('data-i18n', 'pricing.standard.button');
                else if (index === 2) span.setAttribute('data-i18n', 'pricing.premium.button');
            }
        });
        
        // Pricing notes
        document.querySelectorAll('.pricing-note').forEach((note, index) => {
            if (!note.hasAttribute('data-i18n')) {
                if (index === 0) note.setAttribute('data-i18n', 'pricing.basic.note');
                else if (index === 1) note.setAttribute('data-i18n', 'pricing.standard.note');
                else if (index === 2) note.setAttribute('data-i18n', 'pricing.premium.note');
            }
        });
    }
})();
