// =================================
// 지혜로운 손길 - JavaScript
// =================================

'use strict';

// =================================
// 네비게이션 메뉴
// =================================

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// 메뉴 열기
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show');
    });
}

// 메뉴 닫기
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
}

// 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });
});

// =================================
// 활성 섹션 표시
// =================================

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// =================================
// 스크롤 시 헤더 그림자
// =================================

const header = document.getElementById('header');

function scrollHeader() {
    if (window.scrollY >= 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
}

window.addEventListener('scroll', scrollHeader);

// =================================
// 스크롤 투 탑 버튼
// =================================

const scrollTopBtn = document.getElementById('scrollTop');

function scrollTop() {
    if (window.scrollY >= 400) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

window.addEventListener('scroll', scrollTop);

// 버튼 클릭 시 맨 위로 이동
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =================================
// 부드러운 스크롤
// =================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =================================
// 폼 제출 처리
// =================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // 제출 버튼 찾기
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.textContent : '';
        
        // 버튼 비활성화 및 로딩 표시
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = '전송 중...';
        }
        
        // 폼 데이터 수집
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        try {
            // 문의 데이터 콘솔 출력 (실제 환경에서는 API 연동)
            console.log('문의 데이터:', formData);
            
            // 성공 시뮬레이션
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // 성공 메시지 표시
            alert('문의가 성공적으로 접수되었습니다! 24시간 이내에 연락드리겠습니다.');
            
            // 폼 초기화
            contactForm.reset();
        } catch (error) {
            console.error('문의 제출 오류:', error);
            alert('문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
        } finally {
            // 버튼 복원
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }
    });
}



// =================================
// 메시지 표시 함수
// =================================

function showMessage(message, type) {
    // 기존 메시지 제거
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 새 메시지 생성
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.style.cssText = `
        padding: 15px 20px;
        border-radius: 8px;
        margin-top: 20px;
        text-align: center;
        font-weight: 600;
        animation: slideDown 0.3s ease;
    `;
    
    if (type === 'success') {
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.color = '#155724';
        messageDiv.style.border = '2px solid #c3e6cb';
    } else {
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.color = '#721c24';
        messageDiv.style.border = '2px solid #f5c6cb';
    }
    
    messageDiv.textContent = message;
    
    // 폼에 메시지 추가
    contactForm.appendChild(messageDiv);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        messageDiv.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 3000);
}

// =================================
// 애니메이션 스타일 추가
// =================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// =================================
// 스크롤 애니메이션
// =================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 애니메이션 대상 요소 선택
const animateElements = document.querySelectorAll(`
    .feature-card,
    .service-card,
    .portfolio-card,
    .pricing-card,
    .about-content,
    .about-image
`);

// 초기 스타일 설정 및 관찰 시작
animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    el.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(el);
});

// =================================
// 포트폴리오 카드 호버 효과
// =================================

const portfolioCards = document.querySelectorAll('.portfolio-card');

portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.portfolio-image').style.transform = 'scale(1.1)';
        this.querySelector('.portfolio-placeholder').style.transform = 'rotate(10deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.querySelector('.portfolio-image').style.transform = 'scale(1)';
        this.querySelector('.portfolio-placeholder').style.transform = 'rotate(0deg)';
    });
});

// 포트폴리오 이미지 트랜지션 추가
document.querySelectorAll('.portfolio-image').forEach(img => {
    img.style.transition = 'transform 0.3s ease';
});

document.querySelectorAll('.portfolio-placeholder').forEach(icon => {
    icon.style.transition = 'transform 0.3s ease';
});

// =================================
// 가격 카드 호버 강조
// =================================

const pricingCards = document.querySelectorAll('.pricing-card:not(.featured)');

pricingCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        // 다른 카드들 흐리게
        pricingCards.forEach(c => {
            if (c !== this) {
                c.style.opacity = '0.7';
            }
        });
    });
    
    card.addEventListener('mouseleave', function() {
        // 원래대로
        pricingCards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// =================================
// 통계 숫자 카운트 애니메이션
// =================================

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps 기준
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.dataset.suffix || '');
        }
    }, 16);
}

// 통계 요소가 화면에 보이면 애니메이션 시작
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const target = parseInt(entry.target.dataset.target);
            animateCounter(entry.target, target, 2000);
        }
    });
}, { threshold: 0.5 });

// 통계 숫자에 데이터 속성 추가 및 관찰
document.querySelectorAll('.stat-number').forEach((stat, index) => {
    const texts = ['100+', '98%', '24h'];
    const values = [100, 98, 24];
    const suffixes = ['+', '%', 'h'];
    
    stat.dataset.target = values[index];
    stat.dataset.suffix = suffixes[index];
    stat.textContent = '0' + suffixes[index];
    
    statsObserver.observe(stat);
});

// =================================
// 포트폴리오 탭 전환
// =================================

const portfolioTabs = document.querySelectorAll('.portfolio-tab');
const portfolioContents = document.querySelectorAll('.portfolio-content');

portfolioTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        // 모든 탭 비활성화
        portfolioTabs.forEach(t => t.classList.remove('active'));
        portfolioContents.forEach(c => c.classList.remove('active'));
        
        // 클릭한 탭 활성화
        tab.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// =================================
// 페이지 로드 완료 시
// =================================

window.addEventListener('load', () => {
    // 로딩 애니메이션이나 초기화 작업
    document.body.style.opacity = '1';
    
    console.log('지혜로운 손길 웹사이트가 로드되었습니다.');
    console.log('문의사항: freecompr@naver.com');
});

// 초기 페이지 페이드인
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';



// =================================
// 모바일 메뉴 외부 클릭 시 닫기
// =================================

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('show');
        }
    }
});

// =================================
// 전화번호 포맷팅
// =================================

const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 3) {
            e.target.value = value;
        } else if (value.length <= 7) {
            e.target.value = value.slice(0, 3) + '-' + value.slice(3);
        } else if (value.length <= 11) {
            e.target.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7);
        } else {
            e.target.value = value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11);
        }
    });
}

// =================================
// 성능 최적화: 스크롤 이벤트 쓰로틀링
// =================================

function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// 스크롤 이벤트 최적화
window.addEventListener('scroll', throttle(() => {
    scrollActive();
    scrollHeader();
    scrollTop();
}, 100));





// =================================
// 개발자 콘솔 메시지
// =================================

console.log('%c지혜로운 손길', 'font-size: 24px; font-weight: bold; color: #2C5F7C;');
console.log('%c경험과 지혜가 담긴 홈페이지 제작 전문', 'font-size: 14px; color: #666;');
console.log('%c(주)에드가씨에스티 | 대표: 김기철', 'font-size: 12px; color: #999;');
console.log('');
console.log('💼 홈페이지 제작 문의: freecompr@naver.com');
console.log('📞 전화 상담: 010-8921-9973');
console.log('🌐 웹사이트: https://wisehands.kr');
