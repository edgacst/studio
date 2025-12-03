// =================================
// 자동 번역 매핑 - 전체 페이지 대응
// =================================

'use strict';

// 전체 페이지 자동 번역 실행
function autoTranslatePage() {
    if (!window.translations || !window.currentLanguage) {
        console.warn('Translation system not loaded');
        return;
    }
    
    const lang = window.currentLanguage;
    const t = window.translations[lang];
    
    if (!t) return;
    
    // 섹션 제목 매핑
    const sectionMappings = {
        '왜 지혜로운 손길인가요?': '왜 지혜로운 손길인가요?',
        '우리의 차별화된 강점': '우리의 차별화된 강점',
        '맞춤형 솔루션': t.services?.subtitle || '맞춤형 솔루션',
        '제공 서비스': t.services?.title || '제공 서비스',
        '우리의 작품들': t.portfolio?.subtitle || '우리의 작품들',
        '제작 사례': t.portfolio?.title || '제작 사례',
        '투명한 가격': t.pricing?.subtitle || '투명한 가격',
        '가격 안내': t.pricing?.title || '가격 안내',
        '우리의 이야기': t.about?.subtitle || '우리의 이야기',
        '회사 소개': t.about?.title || '회사 소개',
        '프로젝트 시작하기': t.contact?.subtitle || '프로젝트 시작하기',
        '무료 상담 신청': t.contact?.title || '무료 상담 신청'
    };
    
    // 특징 제목 매핑
    const featureTitles = {
        '65년의 경험': t.features?.title1 || '65년의 경험',
        'AI 기술 활용': t.features?.title2 || 'AI 기술 활용',
        '따뜻한 소통': t.features?.title3 || '따뜻한 소통',
        '합리적 가격': t.features?.title4 || '합리적 가격',
        '완벽한 반응형': '완벽한 반응형',
        '평생 지원': t.features?.title6 || '평생 지원'
    };
    
    // 서비스 제목 매핑
    const serviceTitles = {
        '소상공인 홈페이지': '소상공인 홈페이지',
        '기업 홈페이지': t.services?.corporate?.title || '기업 홈페이지',
        '쇼핑몰': t.services?.shop?.title || '쇼핑몰',
        '개인 포트폴리오': t.services?.portfolio?.title || '개인 포트폴리오'
    };
    
    // 가격 패키지 매핑
    const pricingTitles = {
        '기본 패키지': t.pricing?.basic?.title || '기본 패키지',
        '표준 패키지': t.pricing?.standard?.title || '표준 패키지',
        '프리미엄 패키지': t.pricing?.premium?.title || '프리미엄 패키지'
    };
    
    // 버튼 텍스트 매핑
    const buttonTexts = {
        '시작하기': t.pricing?.basic?.button || '시작하기',
        '추천 받기': t.pricing?.standard?.button || '추천 받기',
        '상담하기': t.pricing?.premium?.button || '상담하기',
        '문의하기': t.contact?.submit_button || '문의하기'
    };
    
    // 탭 텍스트 매핑
    const tabTexts = {
        '이미지': t.portfolio?.tab_images || '이미지',
        '동영상': t.portfolio?.tab_videos || '동영상'
    };
    
    // 모든 매핑 합치기
    const allMappings = {
        ...sectionMappings,
        ...featureTitles,
        ...serviceTitles,
        ...pricingTitles,
        ...buttonTexts,
        ...tabTexts
    };
    
    // 페이지의 모든 텍스트 노드 순회 및 번역
    function translateTextNodes(element) {
        // data-i18n 속성이 있는 요소는 i18n.js가 처리하므로 스킵
        if (element.hasAttribute && element.hasAttribute('data-i18n')) {
            return;
        }
        
        if (element.nodeType === Node.TEXT_NODE) {
            const originalText = element.textContent.trim();
            if (originalText && allMappings[originalText]) {
                element.textContent = allMappings[originalText];
            }
        } else if (element.nodeType === Node.ELEMENT_NODE) {
            // 특정 요소만 처리 (성능 최적화)
            const targetSelectors = [
                '.section-subtitle',
                '.section-title',
                '.feature-title',
                '.service-header h3',
                '.pricing-title',
                '.btn',
                '.portfolio-tab'
            ];
            
            const isTargetElement = targetSelectors.some(selector => {
                try {
                    return element.matches && element.matches(selector);
                } catch (e) {
                    return false;
                }
            });
            
            if (isTargetElement) {
                const originalText = element.textContent.trim();
                if (originalText && allMappings[originalText]) {
                    element.textContent = allMappings[originalText];
                }
            } else {
                // 자식 노드 재귀 처리
                for (let child of element.childNodes) {
                    translateTextNodes(child);
                }
            }
        }
    }
    
    // 메인 콘텐츠 영역만 번역 (성능 최적화)
    const mainContent = document.querySelector('main') || document.body;
    translateTextNodes(mainContent);
}

// 언어 변경 시 자동 번역 실행
if (window.setLanguage) {
    const originalSetLanguage = window.setLanguage;
    window.setLanguage = function(lang) {
        originalSetLanguage(lang);
        // i18n 번역 후 자동 번역 실행
        setTimeout(() => {
            autoTranslatePage();
        }, 100);
    };
}

// 페이지 로드 시 자동 번역
window.addEventListener('load', () => {
    setTimeout(() => {
        autoTranslatePage();
    }, 200);
});
