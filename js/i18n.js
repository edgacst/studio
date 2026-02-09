// =================================
// 지혜로운 손길 - 다국어 지원 (i18n)
// =================================

'use strict';

// 다국어 번역 데이터
const translations = {
    ko: {
        // 네비게이션
        nav: {
            home: '홈',
            services: '서비스',
            portfolio: '포트폴리오',
            pricing: '가격안내',
            about: '회사소개',
            video: '소개영상',
            contact: '문의하기',
            login: '로그인',
            signup: '회원가입'
        },
        // 히어로 섹션
        hero: {
            subtitle: '경험과 지혜가 담긴',
            title1: '당신의 성공을 위한',
            title2: '지혜로운 손길',
            description: '65년의 인생경험과 최첨단 AI 기술이 만나 당신의 비즈니스를 위한 완벽한 웹사이트를 만듭니다',
            cta1: '무료 상담 신청',
            cta2: '포트폴리오 보기',
            stat1: '프로젝트 완료',
            stat2: '고객 만족도',
            stat3: '평균 응답 시간'
        },
        // 특징 섹션
        features: {
            subtitle: '왜 지혜로운 손길인가요?',
            title: '우리의 차별화된 강점',
            title1: '65년의 경험',
            desc1: '오랜 인생 경험으로 고객의 진짜 니즈를 이해하고, 사업의 본질을 담아내는 웹사이트를 제작합니다.',
            title2: 'AI 기술 활용',
            desc2: '최첨단 젠스파크 AI 기술로 빠르고 정확하게, 3-5배 빠른 제작 속도를 자랑합니다.',
            title3: '따뜻한 소통',
            desc3: 'IT 용어가 어려운 고객도 편안하게, 눈높이에 맞춘 친절한 상담과 서비스를 제공합니다.',
            title4: '합리적 가격',
            desc4: 'AI 자동화로 인건비를 절감하여, 고품질 웹사이트를 경쟁사 대비 20-30% 저렴하게 제공합니다.',
            title5: '완벽한 반응형',
            desc5: 'PC, 태블릿, 모바일 모든 기기에서 완벽하게 작동하는 반응형 웹사이트를 제작합니다.',
            title6: '평생 지원',
            desc6: '제작 후에도 지속적인 유지보수와 상담, 고객 성공이 우리의 성공입니다.'
        },
        // 서비스 섹션
        services: {
            subtitle: '맞춤형 솔루션',
            title: '제공 서비스',
            description: '소상공인부터 대기업까지, 모든 규모의 비즈니스를 위한 최적의 웹 솔루션',
            small: {
                title: '소상공인 홈페이지',
                desc: '카페, 식당, 미용실 등 소상공인을 위한 맞춤형 웹사이트. 메뉴 소개, 위치 안내, 예약 기능 등을 포함합니다.',
                feature1: '기본 5페이지 구성',
                feature2: '반응형 디자인',
                feature3: '지도/연락처 통합',
                feature4: 'SNS 연동'
            },
            corporate: {
                title: '기업 홈페이지',
                desc: '중소기업, 스타트업을 위한 전문적인 기업 웹사이트. 회사 소개, 서비스 안내, 포트폴리오 등을 구축합니다.',
                feature1: '10페이지 이상 구성',
                feature2: '관리자 페이지',
                feature3: '게시판/뉴스 기능',
                feature4: 'SEO 최적화'
            },
            shop: {
                title: '쇼핑몰',
                desc: '온라인 판매를 위한 전자상거래 웹사이트. 상품 등록, 장바구니, 결제 시스템까지 통합 구축합니다.',
                feature1: '상품 관리 시스템',
                feature2: '장바구니 기능',
                feature3: '결제 연동',
                feature4: '주문 관리'
            },
            portfolio: {
                title: '개인 포트폴리오',
                desc: '프리랜서, 전문가를 위한 개인 브랜딩 웹사이트. 경력, 작품, 연락처를 세련되게 소개합니다.',
                feature1: '세련된 디자인',
                feature2: '작품 갤러리',
                feature3: '이력서 통합',
                feature4: '문의 양식'
            },
            etcprogram: {
                title: '기타 프로그램',
                desc: '중소기업자동화프로그램, 회계프로그램, 교회헌금관리프로그렘. 음원공유프로그램 등을 구축합니다.',
                feature1: '음원공유사이트',
                feature2: '교회재정관리로그램',
                feature3: '컴퓨타프로그램',
                feature4: '그외 프로그램'
            }
        },
        // 포트폴리오 섹션
        portfolio: {
            subtitle: '우리의 작품들',
            title: '제작 사례',
            tab_images: '이미지',
            tab_videos: '동영상',
            item1: {
                category: '소상공인',
                title: '따뜻한 카페',
                desc: '모던하고 감성적인 카페 웹사이트'
            },
            item2: {
                category: '레스토랑',
                title: '미식당',
                desc: '고급스러운 레스토랑 홈페이지'
            },
            item3: {
                category: '부동산',
                title: '프리미엄 부동산',
                desc: '럭셔리 부동산 중개 사이트'
            },
            item4: {
                category: '뷰티',
                title: '엘레강스 스파',
                desc: '럭셔리 스파 & 뷰티 웹사이트'
            },
            item5: {
                category: 'IT',
                title: '테크 이노베이션',
                desc: '혁신적인 IT 스타트업'
            },
            item6: {
                category: '기업',
                title: '글로벌 엔터프라이즈',
                desc: '대기업 공식 홈페이지'
            },
            video1: {
                title: '웹 디자인 쇼케이스',
                desc: '모던하고 세련된 웹사이트 디자인 포트폴리오'
            },
            video2: {
                title: '웹사이트 쇼케이스 템플릿',
                desc: '전문적인 웹사이트 프레젠테이션 디자인'
            },
            video3: {
                title: '2025 웹 디자인 트렌드',
                desc: '최신 웹 디자인 기술과 트렌드 소개'
            },
            video4: {
                title: '웹사이트 쇼케이스 2023',
                desc: '다양한 웹 프로젝트 포트폴리오 모음'
            },
            video5: {
                title: '웹사이트 데모 프레젠테이션',
                desc: '전문적인 웹사이트 소개 영상 템플릿'
            },
            video6: {
                title: '3D 웹 개발자 포트폴리오',
                desc: 'React와 Three.js를 활용한 혁신적인 포트폴리오'
            }
        },
        // 가격 섹션
        pricing: {
            subtitle: '투명한 가격',
            title: '가격 안내',
            description: '합리적이고 명확한 가격으로, 숨은 비용은 없습니다',
            badge_popular: '인기',
            badge_recommended: '추천',
            badge_premium: '프리미엄',
            basic: {
                title: '기본 패키지',
                price: '80만원',
                period: '부터',
                feature1: '5페이지 구성',
                feature2: '반응형 디자인',
                feature3: '기본 SEO 설정',
                feature4: '문의 양식',
                feature5: '지도 통합',
                feature6: '1개월 무료 수정',
                button: '선택하기',
                note: '소상공인, 개인사업자 추천'
            },
            standard: {
                title: '표준 패키지',
                price: '250만원',
                period: '부터',
                feature1: '10페이지 구성',
                feature2: '반응형 디자인',
                feature3: '프리미엄 SEO',
                feature4: '문의 양식',
                feature5: '지도 통합',
                feature6: '3개월 무료 수정',
                feature7: '관리자 페이지',
                feature8: '게시판 기능',
                button: '선택하기',
                note: '중소기업, 스타트업 추천'
            },
            premium: {
                title: '프리미엄 패키지',
                price: '500만원',
                period: '부터',
                feature1: '무제한 페이지',
                feature2: '반응형 디자인',
                feature3: '고급 SEO 최적화',
                feature4: '맞춤 기능 개발',
                feature5: '고급 애니메이션',
                feature6: '6개월 무료 수정',
                feature7: '관리자 페이지',
                feature8: '게시판 + 회원 시스템',
                button: '선택하기',
                note: '쇼핑몰, 대형 프로젝트 추천'
            },
            extra_title: '추가 서비스',
            extra_maintenance: '월 유지보수',
            extra_maintenance_price: '월 15만원',
            extra_hosting: '호스팅 & 도메인',
            extra_hosting_price: '연 10만원',
            extra_content: '콘텐츠 작성',
            extra_content_price: '페이지당 5만원',
            extra_photo: '사진 촬영',
            extra_photo_price: '별도 견적'
        },
        // 회사소개
        about: {
            subtitle: '우리를 소개합니다',
            title: '나이는 숫자일 뿐, 경험은 자산입니다',
            ceo_badge: '65세 현역',
            ceo_name: '대표 김기철',
            content1: '저는 65세에 새로운 도전을 시작했습니다. 평생 쌓아온 비즈니스 경험과 사람을 대하는 지혜에 최첨단 AI 기술을 더해 홈페이지 제작업을 시작했습니다.',
            content2: '젊은 업체들은 기술은 있지만 고객의 마음을 이해하는 데 시간이 걸립니다. 하지만 저희는 다릅니다. 긴 인생을 살아온 경험으로 고객이 진짜 원하는 것이 무엇인지 귀 기울여 듣고 이해합니다.',
            company_info: '회사 정보',
            company_name: '회사명',
            ceo: '대표자',
            business_number: '사업자번호',
            address: '주소',
            address_label: '주소',
            address_line1: '경기도 부천시 원미구',
            address_line2: '송내대로74번길 34, B103호',
            email: '이메일',
            phone: '전화',
            business_hours: '평일 09:00-18:00',
            values_title: '우리의 가치',
            value1_title: '진정성',
            value1_desc: '고객과의 솔직하고 따뜻한 소통',
            value2_title: '신뢰',
            value2_desc: '약속을 지키고 책임지는 자세',
            value3_title: '혁신',
            value3_desc: '나이에 구애받지 않는 배움의 자세',
            value4_title: '품질',
            value4_desc: '타협하지 않는 최고의 결과물'
        },
        // 비디오 섹션
        video: {
            subtitle: '영상으로 만나보세요',
            title: '회사 소개 영상',
            description: '지혜로운 손길의 이야기를 영상으로 만나보세요',
            placeholder: '소개 영상 준비 중입니다',
            coming_soon: '곧 멋진 영상으로 찾아뵙겠습니다',
            content_title: '영상에서 확인하실 수 있는 내용',
            content1: '김기철 대표의 인사말',
            content2: '회사 비전과 철학',
            content3: '제작 프로세스 소개',
            content4: '고객 성공 사례',
            content5: 'AI 기술 활용 방법',
            contact_text: '영상 제작 문의:'
        },
        // 문의 섹션
        contact: {
            subtitle: '무료 상담',
            title: '프로젝트 문의하기',
            description: '궁금하신 점이 있으시면 언제든지 연락주세요. 24시간 이내 답변드립니다.',
            info_title: '연락처 정보',
            phone_label: '전화',
            phone_hours: '평일 09:00 - 18:00',
            email_label: '이메일',
            email_hours: '24시간 접수 가능',
            address_label: '주소',
            address_line1: '경기도 부천시 원미구',
            address_line2: '송내대로74번길 34, B103호',
            address_note: '방문 상담 환영 (사전 예약)',
            social_title: '소셜 미디어',
            name_label: '이름 *',
            phone_input_label: '연락처 *',
            email_input_label: '이메일',
            service_label: '희망 서비스',
            service_placeholder: '선택해주세요',
            service_basic: '기본 패키지',
            service_standard: '표준 패키지',
            service_premium: '프리미엄 패키지',
            service_consult: '상담만',
            message_label: '프로젝트 설명 *',
            message_placeholder: '어떤 웹사이트를 만들고 싶으신가요? 자세히 알려주세요.',
            privacy_agree: '개인정보 수집 및 이용에 동의합니다',
            submit_button: '상담 신청하기',
            success_message: '문의가 성공적으로 접수되었습니다! 24시간 이내에 연락드리겠습니다.',
            error_message: '문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.'
        },
        // 로그인/회원가입
        auth: {
            login_title: '로그인',
            signup_title: '회원가입',
            name: '이름',
            email: '이메일',
            password: '비밀번호',
            password_confirm: '비밀번호 확인',
            login_btn: '로그인',
            signup_btn: '회원가입',
            no_account: '계정이 없으신가요?',
            have_account: '이미 계정이 있으신가요?',
            signup_link: '회원가입',
            login_link: '로그인'
        },
        // FAQ 페이지
        faq: {
            page_title: '자주 묻는 질문',
            page_subtitle: '고객님들이 가장 많이 궁금해하시는 내용을 모았습니다',
            cat_all: '전체',
            cat_general: '일반',
            cat_price: '가격/결제',
            cat_process: '제작과정',
            q1: '홈페이지 제작 기간은 얼마나 걸리나요?',
            a1: '제작 기간은 패키지에 따라 다릅니다.<br><br><strong>• 기본 패키지:</strong> 7-10일<br><strong>• 표준 패키지:</strong> 14-21일<br><strong>• 프리미엄 패키지:</strong> 30-45일<br><br>AI 기술을 활용하여 일반 제작사 대비 3-5배 빠른 제작이 가능합니다. 긴급한 경우 추가 비용으로 특급 제작도 가능합니다.',
            q2: '모바일에서도 잘 보이나요?',
            a2: '네, 모든 웹사이트는 <strong>반응형 디자인</strong>으로 제작됩니다.<br><br>PC, 태블릿, 스마트폰 등 모든 기기에서 최적화되어 보입니다. 요즘은 모바일 방문자가 70% 이상이므로, 모바일 최적화를 최우선으로 고려합니다.',
            q3: 'IT를 잘 몰라도 관리할 수 있나요?',
            a3: '물론입니다! 저희가 특별히 신경 쓰는 부분입니다.<br><br><strong>제공 서비스:</strong><br>• 쉬운 관리자 페이지 (클릭만으로 수정 가능)<br>• 1:1 사용법 교육 (영상 + 전화)<br>• 평생 기술 지원<br>• 눈높이에 맞춘 친절한 설명<br><br>IT를 잘 모르는 분들을 위해 특별히 배려합니다.',
            q4: '가격은 어떻게 되나요?',
            a4: '투명한 가격 정책을 운영합니다.<br><br><strong>• 기본 패키지:</strong> 80만원부터<br><strong>• 표준 패키지:</strong> 250만원부터<br><strong>• 프리미엄 패키지:</strong> 500만원부터<br><br>별도 비용: 호스팅(연 10만원), 도메인(연 2만원), 유지보수(월 15만원, 선택)<br><br>자세한 견적은 상담 후 프로젝트 규모에 맞춰 제공됩니다.',
            q5: '결제는 어떻게 하나요?',
            a5: '안전한 단계별 결제 시스템을 운영합니다.<br><br><strong>결제 일정:</strong><br>• 계약금 30%: 계약 시<br>• 중도금 40%: 디자인 확정 시<br>• 잔금 30%: 최종 납품 시<br><br><strong>결제 방법:</strong><br>계좌이체, 카드결제, 현금영수증 발행 가능합니다.',
            q6: '왜 다른 업체보다 저렴한가요?',
            a6: 'AI 기술을 적극 활용하기 때문입니다.<br><br><strong>비용 절감 비결:</strong><br>• 젠스파크 AI로 자동화된 코딩<br>• 3-5배 빠른 제작 속도<br>• 효율적인 프로세스<br>• 불필요한 중간 마진 제거<br><br>하지만 품질은 절대 타협하지 않습니다. 오히려 AI 덕분에 더 정교하고 최신 기술을 적용합니다.',
            q7: '제작 과정은 어떻게 되나요?',
            a7: '체계적인 6단계 프로세스를 거칩니다.<br><br><strong>1단계:</strong> 상담 및 요구사항 분석 (1-2일)<br><strong>2단계:</strong> 기획 및 와이어프레임 (2-3일)<br><strong>3단계:</strong> 디자인 시안 제작 (3-5일)<br><strong>4단계:</strong> 개발 및 코딩 (5-10일)<br><strong>5단계:</strong> 테스트 및 수정 (2-3일)<br><strong>6단계:</strong> 최종 납품 및 교육 (1일)<br><br>각 단계마다 고객 확인과 피드백을 받습니다.',
            q8: '제가 준비해야 할 것이 있나요?',
            a8: '최소한의 자료만 준비하시면 됩니다.<br><br><strong>필수 자료:</strong><br>• 회사/사업 소개 내용<br>• 로고 (있는 경우)<br>• 연락처 정보<br><br><strong>있으면 좋은 자료:</strong><br>• 제품/서비스 사진<br>• 참고하고 싶은 웹사이트<br>• 브랜드 컬러/폰트 가이드<br><br>자료가 부족해도 괜찮습니다. 저희가 콘텐츠 작성과 이미지 소싱을 도와드립니다.',
            q9: '수정은 몇 번까지 가능한가요?',
            a9: '패키지별로 무료 수정 횟수가 다릅니다.<br><br><strong>• 기본 패키지:</strong> 제작 중 3회, 완성 후 1개월<br><strong>• 표준 패키지:</strong> 제작 중 5회, 완성 후 3개월<br><strong>• 프리미엄 패키지:</strong> 제작 중 무제한, 완성 후 6개월<br><br>무료 수정 기간 이후에도 유지보수 계약(월 15만원)으로 지속적인 업데이트가 가능합니다.'
        },
        // 푸터
        footer: {
            company: '회사',
            company_desc1: '경험과 지혜가 담긴 홈페이지 제작 전문 기업',
            company_desc2: '당신의 성공을 함께 만들어갑니다.',
            quick_links: '바로가기',
            services_title: '서비스',
            service1: '기업 홈페이지',
            service2: '쇼핑몰',
            service3: '포트폴리오',
            service4: '반응형 웹',
            support_title: '고객지원',
            legal: '법률 정보',
            faq: '자주 묻는 질문',
            terms: '이용약관',
            privacy: '개인정보처리방침',
            contact: '문의하기',
            newsletter_title: '뉴스레터',
            newsletter_desc: '최신 소식을 받아보세요',
            newsletter_placeholder: '이메일 주소',
            newsletter_button: '구독하기',
            address_label: '주소',
            address_line1: '경기도 부천시 원미구',
            address_line2: '송내대로74번길 34, B103호',
            copyright: '© 2025 지혜로운 손길. All rights reserved.'
        }
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            services: 'Services',
            portfolio: 'Portfolio',
            pricing: 'Pricing',
            about: 'About',
            video: 'Video',
            contact: 'Contact',
            login: 'Login',
            signup: 'Sign Up'
        },
        // Hero Section
        hero: {
            subtitle: 'Experience Meets Innovation',
            title1: 'Your Success with',
            title2: 'Wise Hands',
            description: 'Combining 65 years of experience with cutting-edge AI technology to create the perfect website for your business',
            cta1: 'Free Consultation',
            cta2: 'View Portfolio',
            stat1: 'Projects Completed',
            stat2: 'Client Satisfaction',
            stat3: 'Avg Response Time'
        },
        // Features
        features: {
            subtitle: 'Why Choose Wise Hands?',
            title: 'Our Competitive Advantages',
            title1: '65 Years Experience',
            desc1: 'With extensive life experience, we understand real customer needs and capture the essence of your business in every website.',
            title2: 'AI Technology',
            desc2: 'Utilizing cutting-edge Genspark AI technology for fast and accurate development, boasting 3-5x faster production speed.',
            title3: 'Warm Communication',
            desc3: 'Even for clients unfamiliar with IT terminology, we provide friendly and comfortable consultations tailored to your level.',
            title4: 'Fair Pricing',
            desc4: 'AI automation reduces labor costs, allowing us to deliver high-quality websites 20-30% cheaper than competitors.',
            title5: 'Perfect Responsive',
            desc5: 'Creating responsive websites that work flawlessly on all devices: PC, tablet, and mobile.',
            title6: 'Lifetime Support',
            desc6: 'Continuous maintenance and consultation even after launch. Your success is our success.'
        },
        // Services
        services: {
            subtitle: 'Custom Solutions',
            title: 'Our Services',
            description: 'Optimal web solutions for all business sizes, from small businesses to enterprises',
            small: {
                title: 'Small Business Website',
                desc: 'Custom website for cafes, restaurants, salons, and more. Includes menu introduction, location guide, and reservation features.',
                feature1: 'Basic 5-page structure',
                feature2: 'Responsive design',
                feature3: 'Map/contact integration',
                feature4: 'SNS integration'
            },
            corporate: {
                title: 'Corporate Website',
                desc: 'Professional corporate website for SMEs and startups. Build company introduction, services, and portfolio.',
                feature1: '10+ page structure',
                feature2: 'Admin page',
                feature3: 'Board/news features',
                feature4: 'SEO optimization'
            },
            shop: {
                title: 'E-commerce',
                desc: 'E-commerce website for online sales. Integrated construction of product registration, shopping cart, and payment systems.',
                feature1: 'Product management system',
                feature2: 'Shopping cart',
                feature3: 'Payment integration',
                feature4: 'Order management'
            },
            portfolio: {
                title: 'Personal Portfolio',
                desc: 'Personal branding website for freelancers and professionals. Elegantly showcase your career, work, and contact information.',
                feature1: 'Elegant design',
                feature2: 'Work gallery',
                feature3: 'Resume integration',
                feature4: 'Contact form'
            }
        },
        // Portfolio
        portfolio: {
            subtitle: 'Our Work',
            title: 'Portfolio',
            tab_images: 'Images',
            tab_videos: 'Videos',
            item1: {
                category: 'Small Business',
                title: 'Warm Cafe',
                desc: 'Modern and emotional cafe website'
            },
            item2: {
                category: 'Restaurant',
                title: 'Gourmet Restaurant',
                desc: 'Luxury restaurant homepage'
            },
            item3: {
                category: 'Real Estate',
                title: 'Premium Real Estate',
                desc: 'Luxury real estate agency site'
            },
            item4: {
                category: 'Beauty',
                title: 'Elegance Spa',
                desc: 'Luxury spa & beauty website'
            },
            item5: {
                category: 'IT',
                title: 'Tech Innovation',
                desc: 'Innovative IT startup'
            },
            item6: {
                category: 'Corporate',
                title: 'Global Enterprise',
                desc: 'Official large enterprise homepage'
            },
            video1: {
                title: 'Web Design Showcase',
                desc: 'Modern and sophisticated website design portfolio'
            },
            video2: {
                title: 'Website Showcase Template',
                desc: 'Professional website presentation design'
            },
            video3: {
                title: '2025 Web Design Trends',
                desc: 'Introduction to latest web design technologies and trends'
            },
            video4: {
                title: 'Website Showcase 2023',
                desc: 'Collection of various web project portfolios'
            },
            video5: {
                title: 'Website Demo Presentation',
                desc: 'Professional website introduction video template'
            },
            video6: {
                title: '3D Web Developer Portfolio',
                desc: 'Innovative portfolio using React and Three.js'
            }
        },
        // Pricing
        pricing: {
            subtitle: 'Transparent Pricing',
            title: 'Pricing Plans',
            description: 'Fair and clear pricing with no hidden costs',
            badge_popular: 'Popular',
            badge_recommended: 'Recommended',
            badge_premium: 'Premium',
            basic: {
                title: 'Basic Package',
                price: '₩800,000',
                period: 'from',
                feature1: '5-page structure',
                feature2: 'Responsive design',
                feature3: 'Basic SEO',
                feature4: 'Contact form',
                feature5: 'Map integration',
                feature6: '1 month free revisions',
                button: 'Select',
                note: 'Recommended for small businesses'
            },
            standard: {
                title: 'Standard Package',
                price: '₩2,500,000',
                period: 'from',
                feature1: '10-page structure',
                feature2: 'Responsive design',
                feature3: 'Premium SEO',
                feature4: 'Contact form',
                feature5: 'Map integration',
                feature6: '3 months free revisions',
                feature7: 'Admin page',
                feature8: 'Board features',
                button: 'Select',
                note: 'Recommended for SMEs and startups'
            },
            premium: {
                title: 'Premium Package',
                price: '₩5,000,000',
                period: 'from',
                feature1: 'Unlimited pages',
                feature2: 'Responsive design',
                feature3: 'Advanced SEO',
                feature4: 'Custom features',
                feature5: 'Advanced animations',
                feature6: '6 months free revisions',
                feature7: 'Admin page',
                feature8: 'Board + Membership system',
                button: 'Select',
                note: 'Recommended for shopping malls and large projects'
            },
            extra_title: 'Additional Services',
            extra_maintenance: 'Monthly Maintenance',
            extra_maintenance_price: '₩150,000/month',
            extra_hosting: 'Hosting & Domain',
            extra_hosting_price: '₩100,000/year',
            extra_content: 'Content Writing',
            extra_content_price: '₩50,000 per page',
            extra_photo: 'Photo Shooting',
            extra_photo_price: 'Separate quote'
        },
        // About
        about: {
            subtitle: 'Introducing Us',
            title: 'Age is Just a Number, Experience is an Asset',
            ceo_badge: '65 Years Active',
            ceo_name: 'CEO Kim Gi-cheol',
            content1: 'I started a new challenge at age 65. I began the homepage business by combining my lifetime business experience and wisdom in dealing with people with cutting-edge AI technology.',
            content2: 'Young companies have technology, but it takes time to understand customers\' hearts. But we are different. With the experience of living a long life, we listen carefully and understand what customers really want.',
            company_info: 'Company Information',
            company_name: 'Company',
            ceo: 'CEO',
            business_number: 'Business No.',
            address: 'Address',
            address_label: 'Address',
            address_line1: 'Wonmi-gu, Bucheon-si, Gyeonggi-do',
            address_line2: '34, Songnae-daero 74beon-gil, B103',
            email: 'Email',
            phone: 'Phone',
            business_hours: 'Weekdays 09:00-18:00',
            values_title: 'Our Values',
            value1_title: 'Authenticity',
            value1_desc: 'Honest and warm communication with customers',
            value2_title: 'Trust',
            value2_desc: 'Keep promises and take responsibility',
            value3_title: 'Innovation',
            value3_desc: 'Learning attitude regardless of age',
            value4_title: 'Quality',
            value4_desc: 'Best results without compromise'
        },
        // Video
        video: {
            subtitle: 'Watch Our Story',
            title: 'Company Introduction Video',
            description: 'Meet Wise Hands through video',
            placeholder: 'Introduction video coming soon',
            coming_soon: 'We will meet you with a great video soon',
            content_title: 'What you can see in the video',
            content1: 'Greeting from CEO Kim Gi-cheol',
            content2: 'Company vision and philosophy',
            content3: 'Production process introduction',
            content4: 'Customer success stories',
            content5: 'How to use AI technology',
            contact_text: 'Video Production Inquiry:'
        },
        // Contact
        contact: {
            subtitle: 'Free Consultation',
            title: 'Project Inquiry',
            description: 'Please contact us anytime. We will respond within 24 hours.',
            info_title: 'Contact Information',
            phone_label: 'Phone',
            phone_hours: 'Weekdays 09:00 - 18:00',
            email_label: 'Email',
            email_hours: '24/7 available',
            address_label: 'Address',
            address_line1: 'Wonmi-gu, Bucheon-si, Gyeonggi-do',
            address_line2: '34, Songnae-daero 74beon-gil, B103',
            address_note: 'Visit welcome (Reservation required)',
            social_title: 'Social Media',
            name_label: 'Name *',
            phone_input_label: 'Phone *',
            email_input_label: 'Email',
            service_label: 'Desired Service',
            service_placeholder: 'Please select',
            service_basic: 'Basic Package',
            service_standard: 'Standard Package',
            service_premium: 'Premium Package',
            service_consult: 'Consultation only',
            message_label: 'Project Description *',
            message_placeholder: 'What kind of website do you want to create? Please tell us in detail.',
            privacy_agree: 'I agree to the collection and use of personal information',
            submit_button: 'Submit Consultation',
            success_message: 'Your inquiry has been successfully submitted! We will contact you within 24 hours.',
            error_message: 'An error occurred while submitting your inquiry. Please try again.'
        },
        // Auth
        auth: {
            login_title: 'Login',
            signup_title: 'Sign Up',
            name: 'Name',
            email: 'Email',
            password: 'Password',
            password_confirm: 'Confirm Password',
            login_btn: 'Login',
            signup_btn: 'Sign Up',
            no_account: "Don't have an account?",
            have_account: 'Already have an account?',
            signup_link: 'Sign Up',
            login_link: 'Login'
        },
        // Footer
        footer: {
            company: 'Company',
            company_desc1: 'Professional website creation company with experience and wisdom',
            company_desc2: 'Creating your success together.',
            quick_links: 'Quick Links',
            services_title: 'Services',
            service1: 'Corporate Website',
            service2: 'E-commerce',
            service3: 'Portfolio',
            service4: 'Responsive Web',
            support_title: 'Customer Support',
            legal: 'Legal',
            faq: 'FAQ',
            terms: 'Terms of Service',
            privacy: 'Privacy Policy',
            contact: 'Contact',
            newsletter_title: 'Newsletter',
            newsletter_desc: 'Get the latest news',
            newsletter_placeholder: 'Email address',
            newsletter_button: 'Subscribe',
            address_label: 'Address',
            address_line1: 'Wonmi-gu, Bucheon-si, Gyeonggi-do',
            address_line2: '34, Songnae-daero 74beon-gil, B103',
            copyright: '© 2025 Wise Hands. All rights reserved.'
        }
    },
    ja: {
        // ナビゲーション
        nav: {
            home: 'ホーム',
            services: 'サービス',
            portfolio: 'ポートフォリオ',
            pricing: '料金案内',
            about: '会社案内',
            video: '紹介動画',
            contact: 'お問い合わせ',
            login: 'ログイン',
            signup: '会員登録'
        },
        // ヒーローセクション
        hero: {
            subtitle: '経験と知恵が込められた',
            title1: 'あなたの成功のための',
            title2: '賢い手',
            description: '65年の人生経験と最先端のAI技術（Genspark）を組み合わせ、お客様の本当のニーズを理解し、ビジネスの本質を捉えたウェブサイトを制作します。',
            cta1: '無料相談申込',
            cta2: 'ポートフォリオを見る',
            stat1: 'プロジェクト完了',
            stat2: '顧客満足度',
            stat3: '平均応答時間'
        },
        // 特徴
        features: {
            subtitle: 'なぜ賢い手なのか？',
            title: '私たちの差別化された強み',
            title1: '65年の経験',
            desc1: '長い人生経験でお客様の本当のニーズを理解し、ビジネスの本質を捉えたウェブサイトを制作します。',
            title2: 'AI技術活用',
            desc2: '最先端のGenspark AI技術で迅速かつ正確に、3-5倍速い制作速度を誇ります。',
            title3: '温かいコミュニケーション',
            desc3: 'IT用語が難しいお客様も快適に、目線に合わせた親切な相談とサービスを提供します。',
            title4: '合理的な価格',
            desc4: 'AI自動化で人件費を削減し、高品質なウェブサイトを競合他社より20-30%安く提供します。',
            title5: '完璧なレスポンシブ',
            desc5: 'PC、タブレット、モバイルすべてのデバイスで完璧に動作するレスポンシブウェブサイトを制作します。',
            title6: '生涯サポート',
            desc6: '制作後も継続的なメンテナンスと相談、お客様の成功が私たちの成功です。'
        },
        // サービス
        services: {
            subtitle: 'カスタムソリューション',
            title: '提供サービス',
            description: '小規模事業者から大企業まで、あらゆる規模のビジネスに最適なウェブソリューション',
            small: {
                title: '小規模事業者ホームページ',
                desc: 'カフェ、レストラン、美容室などの小規模事業者のためのカスタムウェブサイト。メニュー紹介、位置案内、予約機能などを含みます。',
                feature1: '基本5ページ構成',
                feature2: 'レスポンシブデザイン',
                feature3: '地図/連絡先統合',
                feature4: 'SNS連動'
            },
            corporate: {
                title: '企業ホームページ',
                desc: '中小企業、スタートアップのための専門的な企業ウェブサイト。会社紹介、サービス案内、ポートフォリオなどを構築します。',
                feature1: '10ページ以上構成',
                feature2: '管理者ページ',
                feature3: '掲示板/ニュース機能',
                feature4: 'SEO最適化'
            },
            shop: {
                title: 'ショッピングモール',
                desc: 'オンライン販売のための電子商取引ウェブサイト。商品登録、カート、決済システムまで統合構築します。',
                feature1: '商品管理システム',
                feature2: 'カート機能',
                feature3: '決済連動',
                feature4: '注文管理'
            },
            portfolio: {
                title: '個人ポートフォリオ',
                desc: 'フリーランサー、専門家のための個人ブランディングウェブサイト。経歴、作品、連絡先を洗練された形で紹介します。',
                feature1: '洗練されたデザイン',
                feature2: '作品ギャラリー',
                feature3: '履歴書統合',
                feature4: 'お問い合わせフォーム'
            }
        },
        // ポートフォリオ
        portfolio: {
            subtitle: '私たちの作品',
            title: '制作事例',
            tab_images: '画像',
            tab_videos: '動画',
            item1: {
                category: '小規模事業者',
                title: '温かいカフェ',
                desc: 'モダンで感性的なカフェウェブサイト'
            },
            item2: {
                category: 'レストラン',
                title: '美食堂',
                desc: '高級レストランホームページ'
            },
            item3: {
                category: '不動産',
                title: 'プレミアム不動産',
                desc: 'ラグジュアリー不動産仲介サイト'
            },
            item4: {
                category: 'ビューティー',
                title: 'エレガンススパ',
                desc: 'ラグジュアリースパ & ビューティーウェブサイト'
            },
            item5: {
                category: 'IT',
                title: 'テックイノベーション',
                desc: '革新的なITスタートアップ'
            },
            item6: {
                category: '企業',
                title: 'グローバルエンタープライズ',
                desc: '大企業公式ホームページ'
            },
            video1: {
                title: 'ウェブデザインショーケース',
                desc: 'モダンで洗練されたウェブサイトデザインポートフォリオ'
            },
            video2: {
                title: 'ウェブサイトショーケーステンプレート',
                desc: '専門的なウェブサイトプレゼンテーションデザイン'
            },
            video3: {
                title: '2025ウェブデザイントレンド',
                desc: '最新のウェブデザイン技術とトレンド紹介'
            },
            video4: {
                title: 'ウェブサイトショーケース2023',
                desc: '多様なウェブプロジェクトポートフォリオ集'
            },
            video5: {
                title: 'ウェブサイトデモプレゼンテーション',
                desc: '専門的なウェブサイト紹介動画テンプレート'
            },
            video6: {
                title: '3Dウェブ開発者ポートフォリオ',
                desc: 'ReactとThree.jsを活用した革新的なポートフォリオ'
            }
        },
        // 料金
        pricing: {
            subtitle: '透明な価格',
            title: '料金案内',
            description: '合理的で明確な価格、隠れた費用はありません',
            badge_popular: '人気',
            badge_recommended: 'おすすめ',
            badge_premium: 'プレミアム',
            basic: {
                title: '基本パッケージ',
                price: '80万円',
                period: 'から',
                feature1: '5ページ構成',
                feature2: 'レスポンシブデザイン',
                feature3: '基本SEO設定',
                feature4: 'お問い合わせフォーム',
                feature5: '地図統合',
                feature6: '1ヶ月無料修正',
                button: '選択する',
                note: '小規模事業者、個人事業主におすすめ'
            },
            standard: {
                title: '標準パッケージ',
                price: '250万円',
                period: 'から',
                feature1: '10ページ構成',
                feature2: 'レスポンシブデザイン',
                feature3: 'プレミアムSEO',
                feature4: 'お問い合わせフォーム',
                feature5: '地図統合',
                feature6: '3ヶ月無料修正',
                feature7: '管理者ページ',
                feature8: '掲示板機能',
                button: '選択する',
                note: '中小企業、スタートアップにおすすめ'
            },
            premium: {
                title: 'プレミアムパッケージ',
                price: '500万円',
                period: 'から',
                feature1: '無制限ページ',
                feature2: 'レスポンシブデザイン',
                feature3: '高度なSEO最適化',
                feature4: 'カスタム機能開発',
                feature5: '高度なアニメーション',
                feature6: '6ヶ月無料修正',
                feature7: '管理者ページ',
                feature8: '掲示板 + 会員システム',
                button: '選択する',
                note: 'ショッピングモール、大型プロジェクトにおすすめ'
            },
            extra_title: '追加サービス',
            extra_maintenance: '月間メンテナンス',
            extra_maintenance_price: '月15万円',
            extra_hosting: 'ホスティング&ドメイン',
            extra_hosting_price: '年10万円',
            extra_content: 'コンテンツ作成',
            extra_content_price: 'ページ当たり5万円',
            extra_photo: '写真撮影',
            extra_photo_price: '別途見積'
        },
        // 会社案内
        about: {
            subtitle: '私たちを紹介します',
            title: '年齢は単なる数字、経験は資産です',
            ceo_badge: '65歳現役',
            ceo_name: '代表 金起哲',
            content1: '私は65歳で新しい挑戦を始めました。人生を通じて築いてきたビジネス経験と人と接する知恵に最先端AI技術を加え、ホームページ制作業を始めました。',
            content2: '若い業者は技術はありますが、顧客の心を理解するには時間がかかります。しかし私たちは違います。長い人生を生きてきた経験で、顧客が本当に求めているものが何かを耳を傾けて理解します。',
            company_info: '会社情報',
            company_name: '会社名',
            ceo: '代表者',
            business_number: '事業者番号',
            address: '住所',
            address_label: '住所',
            address_line1: '京畿道 富川市 遠美区',
            address_line2: '松内大路74番ギル 34, B103号',
            email: 'メール',
            phone: '電話',
            business_hours: '平日 09:00-18:00',
            values_title: '私たちの価値観',
            value1_title: '真正性',
            value1_desc: '顧客との正直で温かいコミュニケーション',
            value2_title: '信頼',
            value2_desc: '約束を守り責任を持つ姿勢',
            value3_title: '革新',
            value3_desc: '年齢にとらわれない学びの姿勢',
            value4_title: '品質',
            value4_desc: '妥協しない最高の成果物'
        },
        // 動画
        video: {
            subtitle: '動画でお会いしましょう',
            title: '会社紹介動画',
            description: '賢い手のストーリーを動画でお会いしましょう',
            placeholder: '紹介動画準備中です',
            coming_soon: '素晴らしい動画でお会いします',
            content_title: '動画で確認できる内容',
            content1: '金起哲代表のご挨拶',
            content2: '会社のビジョンと哲学',
            content3: '制作プロセスの紹介',
            content4: '顧客成功事例',
            content5: 'AI技術活用方法',
            contact_text: '動画制作お問い合わせ：'
        },
        // お問い合わせ
        contact: {
            subtitle: '無料相談',
            title: 'プロジェクトお問い合わせ',
            description: 'ご質問がございましたら、いつでもご連絡ください。24時間以内に回答いたします。',
            info_title: '連絡先情報',
            phone_label: '電話',
            phone_hours: '平日 09:00 - 18:00',
            email_label: 'メール',
            email_hours: '24時間受付可能',
            address_label: '住所',
            address_line1: '京畿道 富川市 遠美区',
            address_line2: '松内大路74番ギル 34, B103号',
            address_note: '訪問相談歓迎（事前予約）',
            social_title: 'ソーシャルメディア',
            name_label: 'お名前 *',
            phone_input_label: '連絡先 *',
            email_input_label: 'メール',
            service_label: '希望サービス',
            service_placeholder: 'お選びください',
            service_basic: '基本パッケージ',
            service_standard: '標準パッケージ',
            service_premium: 'プレミアムパッケージ',
            service_consult: '相談のみ',
            message_label: 'プロジェクト説明 *',
            message_placeholder: 'どのようなウェブサイトを作成したいですか？詳しくお知らせください。',
            privacy_agree: '個人情報の収集と利用に同意します',
            submit_button: '相談申込',
            success_message: 'お問い合わせが正常に受付されました！24時間以内にご連絡いたします。',
            error_message: 'お問い合わせ受付中にエラーが発生しました。もう一度お試しください。'
        },
        // ログイン/会員登録
        auth: {
            login_title: 'ログイン',
            signup_title: '会員登録',
            name: '名前',
            email: 'メールアドレス',
            password: 'パスワード',
            password_confirm: 'パスワード確認',
            login_btn: 'ログイン',
            signup_btn: '会員登録',
            no_account: 'アカウントをお持ちでない方',
            have_account: 'すでにアカウントをお持ちの方',
            signup_link: '会員登録',
            login_link: 'ログイン'
        },
        // フッター
        footer: {
            company: '会社',
            company_desc1: '経験と知恵が込められたホームページ制作専門企業',
            company_desc2: 'あなたの成功を一緒に作ります。',
            quick_links: 'クイックリンク',
            services_title: 'サービス',
            service1: '企業ホームページ',
            service2: 'ショッピングモール',
            service3: 'ポートフォリオ',
            service4: 'レスポンシブウェブ',
            support_title: 'カスタマーサポート',
            legal: '法的情報',
            faq: 'よくある質問',
            terms: '利用規約',
            privacy: 'プライバシーポリシー',
            contact: 'お問い合わせ',
            newsletter_title: 'ニュースレター',
            newsletter_desc: '最新ニュースを受け取る',
            newsletter_placeholder: 'メールアドレス',
            newsletter_button: '購読',
            address_label: '住所',
            address_line1: '京畿道 富川市 遠美区',
            address_line2: '松内大路74番ギル 34, B103号',
            copyright: '© 2025 賢い手. All rights reserved.'
        }
    },
    zh: {
        // 导航
        nav: {
            home: '首页',
            services: '服务',
            portfolio: '作品集',
            pricing: '价格',
            about: '公司介绍',
            video: '介绍视频',
            contact: '联系我们',
            login: '登录',
            signup: '注册'
        },
        // 主页
        hero: {
            subtitle: '经验与智慧的结晶',
            title1: '您成功的伙伴',
            title2: '智慧之手',
            description: '结合65年的人生经验和尖端AI技术（Genspark），创建真正理解您需求并捕捉业务本质的网站。',
            cta1: '免费咨询',
            cta2: '查看作品',
            stat1: '完成项目',
            stat2: '客户满意度',
            stat3: '平均响应时间'
        },
        // 特点
        features: {
            subtitle: '为什么选择智慧之手？',
            title: '我们的差异化优势',
            title1: '65年经验',
            desc1: '凭借丰富的人生经验，理解客户真实需求，创建捕捉业务本质的网站。',
            title2: 'AI技术应用',
            desc2: '利用尖端Genspark AI技术快速准确地开发，自豪地实现3-5倍的制作速度。',
            title3: '温暖沟通',
            desc3: '即使对IT术语不熟悉的客户也能舒适地接受符合其水平的友好咨询和服务。',
            title4: '合理价格',
            desc4: 'AI自动化降低人工成本，提供比竞争对手便宜20-30%的高质量网站。',
            title5: '完美响应式',
            desc5: '制作在PC、平板、手机等所有设备上完美运行的响应式网站。',
            title6: '终身支持',
            desc6: '制作完成后持续维护和咨询，客户的成功就是我们的成功。'
        },
        // 服务
        services: {
            subtitle: '定制解决方案',
            title: '提供服务',
            description: '从小型企业到大型企业，为各种规模的业务提供最佳Web解决方案',
            small: {
                title: '小型企业官网',
                desc: '为咖啡馆、餐厅、美容院等小型企业定制的网站。包括菜单介绍、位置指南、预约功能等。',
                feature1: '基本5页结构',
                feature2: '响应式设计',
                feature3: '地图/联系方式集成',
                feature4: '社交媒体集成'
            },
            corporate: {
                title: '企业官网',
                desc: '为中小企业和初创公司打造的专业企业网站。构建公司介绍、服务指南、作品集等。',
                feature1: '10页以上结构',
                feature2: '管理页面',
                feature3: '公告板/新闻功能',
                feature4: 'SEO优化'
            },
            shop: {
                title: '电子商务',
                desc: '用于在线销售的电子商务网站。集成构建产品注册、购物车、支付系统。',
                feature1: '产品管理系统',
                feature2: '购物车功能',
                feature3: '支付集成',
                feature4: '订单管理'
            },
            portfolio: {
                title: '个人作品集',
                desc: '为自由职业者和专业人士打造的个人品牌网站。精美展示经历、作品和联系方式。',
                feature1: '精美设计',
                feature2: '作品画廊',
                feature3: '简历集成',
                feature4: '联系表单'
            }
        },
        // 作品集
        portfolio: {
            subtitle: '我们的作品',
            title: '制作案例',
            tab_images: '图片',
            tab_videos: '视频',
            item1: {
                category: '小型企业',
                title: '温馨咖啡馆',
                desc: '现代感性的咖啡馆网站'
            },
            item2: {
                category: '餐厅',
                title: '美食餐厅',
                desc: '高级餐厅官网'
            },
            item3: {
                category: '房地产',
                title: '高端房地产',
                desc: '奢华房地产中介网站'
            },
            item4: {
                category: '美容',
                title: '优雅水疗',
                desc: '奢华水疗及美容网站'
            },
            item5: {
                category: 'IT',
                title: '科技创新',
                desc: '创新IT初创企业'
            },
            item6: {
                category: '企业',
                title: '全球企业',
                desc: '大型企业官方网站'
            },
            video1: {
                title: '网页设计展示',
                desc: '现代精致的网站设计作品集'
            },
            video2: {
                title: '网站展示模板',
                desc: '专业网站演示设计'
            },
            video3: {
                title: '2025网页设计趋势',
                desc: '最新网页设计技术和趋势介绍'
            },
            video4: {
                title: '网站展示2023',
                desc: '各种网页项目作品集合'
            },
            video5: {
                title: '网站演示展示',
                desc: '专业网站介绍视频模板'
            },
            video6: {
                title: '3D网页开发者作品集',
                desc: '使用React和Three.js的创新作品集'
            }
        },
        // 价格
        pricing: {
            subtitle: '透明价格',
            title: '价格方案',
            description: '合理明确的价格，没有隐藏费用',
            badge_popular: '热门',
            badge_recommended: '推荐',
            badge_premium: '高级',
            basic: {
                title: '基础套餐',
                price: '80万韩元',
                period: '起',
                feature1: '5页结构',
                feature2: '响应式设计',
                feature3: '基础SEO设置',
                feature4: '联系表单',
                feature5: '地图集成',
                feature6: '1个月免费修改',
                button: '选择',
                note: '推荐给小型企业和个人'
            },
            standard: {
                title: '标准套餐',
                price: '250万韩元',
                period: '起',
                feature1: '10页结构',
                feature2: '响应式设计',
                feature3: '高级SEO',
                feature4: '联系表单',
                feature5: '地图集成',
                feature6: '3个月免费修改',
                feature7: '管理页面',
                feature8: '公告板功能',
                button: '选择',
                note: '推荐给中小企业和初创公司'
            },
            premium: {
                title: '高级套餐',
                price: '500万韩元',
                period: '起',
                feature1: '无限页面',
                feature2: '响应式设计',
                feature3: '高级SEO优化',
                feature4: '定制功能开发',
                feature5: '高级动画',
                feature6: '6个月免费修改',
                feature7: '管理页面',
                feature8: '公告板 + 会员系统',
                button: '选择',
                note: '推荐给电商和大型项目'
            },
            extra_title: '附加服务',
            extra_maintenance: '月度维护',
            extra_maintenance_price: '每月15万韩元',
            extra_hosting: '托管和域名',
            extra_hosting_price: '每年10万韩元',
            extra_content: '内容撰写',
            extra_content_price: '每页5万韩元',
            extra_photo: '照片拍摄',
            extra_photo_price: '另行报价'
        },
        // 公司介绍
        about: {
            subtitle: '介绍我们',
            title: '年龄只是数字，经验是财富',
            ceo_badge: '65岁现役',
            ceo_name: '代表 金起哲',
            content1: '我65岁时开始了新的挑战。我将一生积累的业务经验和处理人际关系的智慧与尖端AI技术相结合，开始了网站制作业务。',
            content2: '年轻公司有技术，但理解客户心意需要时间。但我们不同。凭借丰富的人生经验，我们倾听并理解客户真正想要的是什么。',
            company_info: '公司信息',
            company_name: '公司名称',
            ceo: '代表',
            business_number: '营业执照',
            address: '地址',
            address_label: '地址',
            address_line1: '京畿道 富川市 远美区',
            address_line2: '松内大路74号街 34, B103号',
            email: '邮箱',
            phone: '电话',
            business_hours: '工作日 09:00-18:00',
            values_title: '我们的价值观',
            value1_title: '真诚',
            value1_desc: '与客户真诚温暖的沟通',
            value2_title: '信任',
            value2_desc: '遵守承诺并负责任的态度',
            value3_title: '创新',
            value3_desc: '不受年龄限制的学习态度',
            value4_title: '品质',
            value4_desc: '不妥协的最佳成果'
        },
        // 视频
        video: {
            subtitle: '通过视频了解我们',
            title: '公司介绍视频',
            description: '通过视频了解智慧之手的故事',
            placeholder: '介绍视频准备中',
            coming_soon: '即将为您呈现精彩视频',
            content_title: '视频中可以看到的内容',
            content1: 'CEO金起哲的问候',
            content2: '公司愿景和理念',
            content3: '制作流程介绍',
            content4: '客户成功案例',
            content5: 'AI技术应用方法',
            contact_text: '视频制作咨询：'
        },
        // 联系我们
        contact: {
            subtitle: '免费咨询',
            title: '项目咨询',
            description: '如有任何问题，请随时联系我们。我们将在24小时内回复。',
            info_title: '联系信息',
            phone_label: '电话',
            phone_hours: '工作日 09:00 - 18:00',
            email_label: '邮箱',
            email_hours: '24小时接收',
            address_label: '地址',
            address_line1: '京畿道 富川市 远美区',
            address_line2: '松内大路74号街 34, B103号',
            address_note: '欢迎上门咨询（需提前预约）',
            social_title: '社交媒体',
            name_label: '姓名 *',
            phone_input_label: '联系方式 *',
            email_input_label: '邮箱',
            service_label: '期望服务',
            service_placeholder: '请选择',
            service_basic: '基础套餐',
            service_standard: '标准套餐',
            service_premium: '高级套餐',
            service_consult: '仅咨询',
            message_label: '项目说明 *',
            message_placeholder: '您想创建什么样的网站？请详细告诉我们。',
            privacy_agree: '我同意收集和使用个人信息',
            submit_button: '提交咨询',
            success_message: '您的咨询已成功提交！我们将在24小时内联系您。',
            error_message: '提交咨询时发生错误。请重试。'
        },
        // 登录/注册
        auth: {
            login_title: '登录',
            signup_title: '注册',
            name: '姓名',
            email: '邮箱',
            password: '密码',
            password_confirm: '确认密码',
            login_btn: '登录',
            signup_btn: '注册',
            no_account: '还没有账户？',
            have_account: '已有账户？',
            signup_link: '注册',
            login_link: '登录'
        },
        // 页脚
        footer: {
            company: '公司',
            company_desc1: '经验与智慧的结晶，专业网站制作企业',
            company_desc2: '与您共同创造成功。',
            quick_links: '快速链接',
            services_title: '服务',
            service1: '企业官网',
            service2: '电子商务',
            service3: '作品集',
            service4: '响应式网站',
            support_title: '客户支持',
            legal: '法律信息',
            faq: '常见问题',
            terms: '服务条款',
            privacy: '隐私政策',
            contact: '联系我们',
            newsletter_title: '新闻订阅',
            newsletter_desc: '获取最新消息',
            newsletter_placeholder: '邮箱地址',
            newsletter_button: '订阅',
            address_label: '地址',
            address_line1: '京畿道 富川市 远美区',
            address_line2: '松内大路74号街 34, B103号',
            copyright: '© 2025 智慧之手. 版权所有.'
        }
    }
}

// 현재 언어 (기본값: 한국어)
let currentLanguage = localStorage.getItem('language') || 'ko';

// 언어 설정
function setLanguage(lang) {
    if (!translations[lang]) {
        console.error(`Language '${lang}' not found`);
        return;
    }
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // 페이지 번역 적용
    translatePage();
    
    // 언어 선택기 업데이트
    updateLanguageSelector();
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = lang;
    
    // 언어별 테마 적용
    applyLanguageTheme(lang);
}

// 언어별 테마 색상 적용
function applyLanguageTheme(lang) {
    const body = document.body;
    
    // 기존 언어 클래스 제거
    body.classList.remove('lang-ko', 'lang-en', 'lang-ja', 'lang-zh');
    
    // 새 언어 클래스 추가
    body.classList.add(`lang-${lang}`);
    
    // 언어별 CSS 변수 설정
    const root = document.documentElement;
    
    const themes = {
        ko: {
            '--accent-color': '#C60C30',
            '--accent-secondary': '#003478'
        },
        en: {
            '--accent-color': '#B22234',
            '--accent-secondary': '#3C3B6E'
        },
        ja: {
            '--accent-color': '#BC002D',
            '--accent-secondary': '#FFFFFF'
        },
        zh: {
            '--accent-color': '#DE2910',
            '--accent-secondary': '#FFDE00'
        }
    }
    
    const theme = themes[lang];
    if (theme) {
        Object.keys(theme).forEach(key => {
            root.style.setProperty(key, theme[key]);
        });
    }
}

// 번역 텍스트 가져오기
function t(path) {
    const keys = path.split('.');
    let value = translations[currentLanguage];
    
    for (const key of keys) {
        if (value && typeof value === 'object') {
            value = value[key];
        } else {
            return path; // 번역을 찾지 못한 경우 경로 반환
        }
    }
    
    return value || path;
}

// 페이지 번역 적용
function translatePage() {
    // data-i18n 속성을 가진 모든 요소 찾기
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        // 플레이스홀더 속성이 있는 경우
        if (element.hasAttribute('data-i18n-placeholder')) {
            element.placeholder = translation;
        }
        // value 속성이 있는 경우 (버튼 등)
        else if (element.tagName === 'INPUT' && element.type === 'submit') {
            element.value = translation;
        }
        // 일반 텍스트
        else {
            element.textContent = translation;
        }
    });
}

// 언어 선택기 업데이트
function updateLanguageSelector() {
    const selector = document.getElementById('languageSelect');
    if (selector) {
        selector.value = currentLanguage;
    }
    
    // 현재 언어 버튼 업데이트
    const currentLangBtn = document.getElementById('currentLang');
    const activeOption = document.querySelector(`.lang-option[data-lang="${currentLanguage}"]`);
    
    if (currentLangBtn && activeOption) {
        const flagUrl = `https://flagcdn.com/w20/${activeOption.dataset.flag}.png`;
        const langName = activeOption.dataset.name;
        
        currentLangBtn.innerHTML = `
            <img src="${flagUrl}" alt="${langName}" width="20">
            <span>${langName}</span>
            <i class="fas fa-chevron-down"></i>
        `;
    }
    
    // 언어 옵션 활성화 상태 업데이트
    document.querySelectorAll('.lang-option').forEach(option => {
        if (option.dataset.lang === currentLanguage) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 저장된 언어 또는 브라우저 언어 감지
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('language');
    const initialLang = savedLang || (translations[browserLang] ? browserLang : 'ko');
    
    console.log('🌏 다국어 시스템 초기화:', initialLang);
    setLanguage(initialLang);
    
    // 언어 선택 이벤트 리스너
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }
    
    // 드롭다운 토글 (langMenu.show, .language-dropdown.active 모두 지원)
    const currentLangBtn = document.getElementById('currentLang');
    const languageDropdown = document.querySelector('.language-dropdown');
    const langMenu = document.getElementById('langMenu');
    if (currentLangBtn && languageDropdown && langMenu) {
        currentLangBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
            langMenu.classList.toggle('show');
        });
        // 외부 클릭 시 드롭다운 닫기
        document.addEventListener('click', () => {
            languageDropdown.classList.remove('active');
            langMenu.classList.remove('show');
        });
        // 드롭다운 내부 클릭 시 이벤트 전파 중지
        languageDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    // 언어 옵션 클릭 이벤트
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            setLanguage(option.dataset.lang);
            if (languageDropdown) languageDropdown.classList.remove('active');
            if (langMenu) langMenu.classList.remove('show');
        });
    });
});

// 전역 함수로 export
window.setLanguage = setLanguage;
window.t = t;
