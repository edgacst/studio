// 회원가입 폼 유효성 검사 및 처리

// 비밀번호 표시/숨김
function togglePassword(inputId, iconId) {
    const passwordInput = document.getElementById(inputId);
    const toggleIcon = document.getElementById(iconId);
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// 비밀번호 강도 체크
document.getElementById('password').addEventListener('input', function(e) {
    const password = e.target.value;
    const bars = ['bar1', 'bar2', 'bar3', 'bar4'];
    const strengthText = document.getElementById('strengthText');
    
    // 초기화
    bars.forEach(barId => {
        const bar = document.getElementById(barId);
        bar.classList.remove('active', 'weak', 'medium', 'strong');
    });
    
    if (password.length === 0) {
        strengthText.textContent = '비밀번호를 입력해주세요';
        return;
    }
    
    let strength = 0;
    
    // 길이 체크
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // 복잡성 체크
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    
    // 강도 표시
    if (strength <= 2) {
        bars.slice(0, 1).forEach(barId => {
            const bar = document.getElementById(barId);
            bar.classList.add('active', 'weak');
        });
        strengthText.textContent = '약함 - 더 강력한 비밀번호를 사용하세요';
        strengthText.style.color = '#e74c3c';
    } else if (strength <= 3) {
        bars.slice(0, 2).forEach(barId => {
            const bar = document.getElementById(barId);
            bar.classList.add('active', 'medium');
        });
        strengthText.textContent = '보통 - 특수문자를 추가하면 더 안전합니다';
        strengthText.style.color = '#f39c12';
    } else {
        bars.forEach(barId => {
            const bar = document.getElementById(barId);
            bar.classList.add('active', 'strong');
        });
        strengthText.textContent = '강함 - 안전한 비밀번호입니다';
        strengthText.style.color = '#2ecc71';
    }
});

// 비밀번호 확인
document.getElementById('passwordConfirm').addEventListener('input', function(e) {
    const password = document.getElementById('password').value;
    const confirm = e.target.value;
    const message = document.getElementById('confirmMessage');
    const input = e.target;
    
    if (confirm.length === 0) {
        input.classList.remove('error', 'success');
        message.textContent = '';
        return;
    }
    
    if (password === confirm) {
        input.classList.remove('error');
        input.classList.add('success');
        message.classList.remove('error');
        message.classList.add('success');
        message.textContent = '✓ 비밀번호가 일치합니다';
    } else {
        input.classList.remove('success');
        input.classList.add('error');
        message.classList.remove('success');
        message.classList.add('error');
        message.textContent = '✗ 비밀번호가 일치하지 않습니다';
    }
    
    checkFormValidity();
});

// 이메일 유효성 검사 및 중복 확인
document.getElementById('email').addEventListener('blur', async function(e) {
    const email = e.target.value;
    const message = document.getElementById('emailMessage');
    const input = e.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email.length === 0) {
        input.classList.remove('error', 'success');
        message.textContent = '';
        return;
    }
    
    if (!emailRegex.test(email)) {
        input.classList.remove('success');
        input.classList.add('error');
        message.classList.remove('success');
        message.classList.add('error');
        message.textContent = '✗ 올바른 이메일 형식이 아닙니다';
        checkFormValidity();
        return;
    }
    
    // 데이터베이스에서 이메일 중복 확인
    message.textContent = '확인 중...';
    message.classList.remove('error', 'success');
    
    try {
        const result = await checkEmailExists(email);
        
        if (result.exists) {
            input.classList.remove('success');
            input.classList.add('error');
            message.classList.remove('success');
            message.classList.add('error');
            message.textContent = '✗ 이미 사용 중인 이메일입니다';
        } else {
            input.classList.remove('error');
            input.classList.add('success');
            message.classList.remove('error');
            message.classList.add('success');
            message.textContent = '✓ 사용 가능한 이메일입니다';
        }
    } catch (error) {
        console.error('이메일 확인 오류:', error);
        input.classList.remove('error', 'success');
        message.classList.remove('error', 'success');
        message.textContent = '';
    }
    
    checkFormValidity();
});

// 전화번호 자동 포맷팅
document.getElementById('phone').addEventListener('input', function(e) {
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
    
    checkFormValidity();
});

// 전체 동의 체크박스
document.getElementById('agreeAll').addEventListener('change', function(e) {
    const isChecked = e.target.checked;
    document.querySelectorAll('.agree-item').forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    checkFormValidity();
});

// 개별 체크박스
document.querySelectorAll('.agree-item').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const allChecked = Array.from(document.querySelectorAll('.agree-item')).every(cb => cb.checked);
        document.getElementById('agreeAll').checked = allChecked;
        checkFormValidity();
    });
});

// 폼 유효성 검사
function checkFormValidity() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    const agreePrivacy = document.getElementById('agreePrivacy').checked;
    const submitBtn = document.getElementById('submitBtn');
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    
    const isValid = 
        name.length >= 2 &&
        emailRegex.test(email) &&
        phoneRegex.test(phone) &&
        password.length >= 8 &&
        password === passwordConfirm &&
        agreeTerms &&
        agreePrivacy;
    
    submitBtn.disabled = !isValid;
}

// 폼 제출
document.getElementById('signupForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;
    
    // 버튼 비활성화 및 로딩 표시
    submitBtn.disabled = true;
    submitBtn.textContent = '처리 중...';
    
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        password: document.getElementById('password').value,
        company: document.getElementById('company').value.trim(),
        businessType: '개인', // 기본값
        marketingAgree: document.getElementById('agreeMarketing').checked
    };
    
    try {
        // 데이터베이스에 회원 등록
        const result = await handleSignup(formData);
        
        if (result.success) {
            // 성공 메시지
            alert('🎉 회원가입이 완료되었습니다!\n\n로그인 페이지로 이동합니다.');
            
            // 로그인 페이지로 이동
            window.location.href = 'login.html';
        } else {
            // 실패 메시지
            alert('❌ ' + result.message);
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    } catch (error) {
        console.error('회원가입 오류:', error);
        alert('❌ 회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
    }
});

// 실시간 유효성 검사
document.getElementById('name').addEventListener('input', checkFormValidity);
document.getElementById('email').addEventListener('input', checkFormValidity);
document.getElementById('phone').addEventListener('input', checkFormValidity);
document.getElementById('password').addEventListener('input', checkFormValidity);
document.getElementById('passwordConfirm').addEventListener('input', checkFormValidity);