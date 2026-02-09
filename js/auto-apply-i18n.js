// 자동으로 data-i18n 속성 적용 스크립트
// 이 스크립트는 페이지 로드 시 자동으로 실행되어 누락된 번역을 적용합니다

(function() {
    'use strict';
    
    // DOM 로드 완료 후 실행
    document.addEventListener('DOMContentLoaded', function() {
        
        // About 섹션 자동 번역
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            // 회사명, 대표자 등 레이블
            const labels = {
                '회사명': 'about.company_name',
                '대표자': 'about.ceo',
                '사업자번호': 'about.business_number',
                '주소': 'about.address',
                '우리의 가치': 'about.values_title'
            };
            
            aboutSection.querySelectorAll('strong').forEach(strong => {
                const text = strong.textContent.trim();
                if (labels[text] && !strong.hasAttribute('data-i18n')) {
                    strong.setAttribute('data-i18n', labels[text]);
                }
            });
        }
        
        // Pricing 섹션 자동 번역
        const pricingSection = document.querySelector('#pricing');
        if (pricingSection) {
            // 버튼들
            pricingSection.querySelectorAll('.btn').forEach(btn => {
                const text = btn.textContent.trim();
                if (text === '선택하기' && !btn.hasAttribute('data-i18n')) {
                    const card = btn.closest('.pricing-card');
                    if (card) {
                        const title = card.querySelector('.pricing-title')?.textContent.trim();
                        if (title === '기본 패키지') {
                            btn.setAttribute('data-i18n', 'pricing.basic.button');
                        } else if (title === '표준 패키지') {
                            btn.setAttribute('data-i18n', 'pricing.standard.button');
                        } else if (title === '프리미엄 패키지') {
                            btn.setAttribute('data-i18n', 'pricing.premium.button');
                        }
                    }
                }
            });
            
            // 가격 note
            pricingSection.querySelectorAll('.pricing-note').forEach((note, index) => {
                if (!note.hasAttribute('data-i18n')) {
                    if (index === 0) note.setAttribute('data-i18n', 'pricing.basic.note');
                    else if (index === 1) note.setAttribute('data-i18n', 'pricing.standard.note');
                    else if (index === 2) note.setAttribute('data-i18n', 'pricing.premium.note');
                }
            });
        }
        
        // 번역 다시 적용
        if (typeof translatePage === 'function') {
            translatePage();
        }
    });
})();
