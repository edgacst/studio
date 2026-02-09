# 📹 동영상 포트폴리오 가이드

## 개요

**지혜로운 손길** 웹사이트의 포트폴리오 섹션에는 **이미지**와 **동영상** 두 가지 형태의 포트폴리오가 있습니다.

---

## 🎬 동영상 포트폴리오 목록

### 1. 웹 디자인 쇼케이스
- **제목**: 웹 디자인 쇼케이스
- **설명**: 모던하고 세련된 웹사이트 디자인 포트폴리오
- **YouTube ID**: `8NvnO0Badu4`
- **길이**: 0:30
- **카테고리**: 웹 디자인

### 2. 웹사이트 쇼케이스 템플릿
- **제목**: 웹사이트 쇼케이스 템플릿
- **설명**: 전문적인 웹사이트 프레젠테이션 디자인
- **YouTube ID**: `8eLItjVpLhc`
- **길이**: 0:29
- **카테고리**: 템플릿 디자인

### 3. 2025 웹 디자인 트렌드
- **제목**: 2025 웹 디자인 트렌드
- **설명**: 최신 웹 디자인 기술과 트렌드 소개
- **YouTube ID**: `RGWXVbkrYKM`
- **길이**: 0:59
- **카테고리**: 트렌드 소개

### 4. 웹사이트 쇼케이스 2023
- **제목**: 웹사이트 쇼케이스 2023
- **설명**: 다양한 웹 프로젝트 포트폴리오 모음
- **YouTube ID**: `JQcpJlaGw18`
- **길이**: 1:45
- **카테고리**: 포트폴리오 모음

### 5. 웹사이트 데모 프레젠테이션
- **제목**: 웹사이트 데모 프레젠테이션
- **설명**: 전문적인 웹사이트 소개 영상 템플릿
- **YouTube ID**: `5_BxqNC3aLs`
- **길이**: 0:52
- **카테고리**: 프레젠테이션

### 6. 3D 웹 개발자 포트폴리오
- **제목**: 3D 웹 개발자 포트폴리오
- **설명**: React와 Three.js를 활용한 혁신적인 포트폴리오
- **YouTube ID**: `E-fdPfRxkzQ`
- **길이**: 3:15
- **카테고리**: 3D 웹 개발

---

## 📐 기술 구현

### HTML 구조
```html
<div class="portfolio-tabs">
    <button class="portfolio-tab active" data-tab="images">
        <i class="fas fa-image"></i> 이미지
    </button>
    <button class="portfolio-tab" data-tab="videos">
        <i class="fas fa-video"></i> 동영상
    </button>
</div>

<div class="portfolio-content active" id="images">
    <!-- 이미지 포트폴리오 -->
</div>

<div class="portfolio-content" id="videos">
    <!-- 동영상 포트폴리오 -->
    <div class="video-portfolio-card">
        <div class="video-wrapper-portfolio">
            <iframe src="https://www.youtube.com/embed/VIDEO_ID" 
                    frameborder="0" 
                    allowfullscreen>
            </iframe>
        </div>
        <div class="video-portfolio-info">
            <h3>제목</h3>
            <p>설명</p>
            <span class="video-duration">
                <i class="fas fa-clock"></i> 0:30
            </span>
        </div>
    </div>
</div>
```

### JavaScript 탭 전환
```javascript
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
```

### CSS 스타일
```css
.video-portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.video-wrapper-portfolio {
    width: 100%;
    height: 220px;
    position: relative;
    overflow: hidden;
    background-color: #000;
}

.video-wrapper-portfolio iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}
```

---

## 🔄 동영상 추가/변경 방법

### 1. YouTube 영상 ID 찾기
YouTube URL: `https://www.youtube.com/watch?v=VIDEO_ID`에서 `VIDEO_ID` 부분을 추출

### 2. HTML 수정
`index.html`에서 해당 카드를 찾아 iframe의 `src` 속성 변경:
```html
<iframe src="https://www.youtube.com/embed/새로운_VIDEO_ID" ...>
```

### 3. 제목, 설명, 길이 업데이트
```html
<div class="video-portfolio-info">
    <h3>새로운 제목</h3>
    <p>새로운 설명</p>
    <span class="video-duration">
        <i class="fas fa-clock"></i> 새로운_길이
    </span>
</div>
```

---

## 📱 반응형 지원

- **PC (1024px+)**: 3열 그리드
- **태블릿 (768px ~ 1023px)**: 2열 그리드
- **모바일 (767px 이하)**: 1열 그리드

---

## ⚡ 성능 최적화

### YouTube iframe 최적화
```html
<iframe 
    src="https://www.youtube.com/embed/VIDEO_ID"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

### 권장사항
- ✅ YouTube `embed` URL 사용 (자동 최적화)
- ✅ `loading="lazy"` 속성 추가 (레이지 로딩)
- ✅ 영상 길이는 2분 이내 권장
- ✅ 섬네일 품질 우선순위 높게 설정

---

## 🎯 사용자 경험 (UX)

### 탭 전환 플로우
1. 사용자가 "동영상" 탭 클릭
2. 이미지 콘텐츠 숨김 (fade-out)
3. 동영상 콘텐츠 표시 (fade-in)
4. 6개 동영상 카드 그리드로 표시
5. 호버 시 카드 상승 효과

### 인터랙션
- **호버**: 카드가 10px 상승, 그림자 증가
- **클릭**: YouTube 영상 재생
- **반응형**: 화면 크기에 따라 열 수 자동 조정

---

## 📊 통계

- **총 동영상 수**: 6개
- **총 재생 시간**: 약 8분
- **평균 영상 길이**: 약 1분 20초
- **카테고리**: 웹 디자인, 포트폴리오, 트렌드, 3D 개발

---

## 🔮 향후 개선 계획

### Phase 1 (즉시)
- [ ] 자체 제작 영상 추가
- [ ] 한국어 자막 지원
- [ ] 고객 사례 영상

### Phase 2 (단기)
- [ ] 영상 검색 기능
- [ ] 영상 필터링 (카테고리별)
- [ ] 재생 통계 추적

### Phase 3 (중장기)
- [ ] 자체 비디오 플레이어
- [ ] 자동 재생 옵션
- [ ] 플레이리스트 기능
- [ ] 영상 댓글 시스템

---

**마지막 업데이트**: 2025-11-29  
**작성자**: 지혜로운 손길 웹 개발팀
