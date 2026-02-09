// =================================
// 지혜로운 손길 - 데이터베이스 연동
// =================================

'use strict';

// RESTful API 기본 URL
const API_BASE = 'tables';

// =================================
// 회원가입 처리
// =================================

async function handleSignup(formData) {
    try {
        // 비밀번호 해싱 (실제로는 서버에서 해야 하지만 데모용)
        const hashedPassword = await hashPassword(formData.password);
        
        // 회원 데이터 준비
        const memberData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: hashedPassword,
            company: formData.company || '',
            business_type: formData.businessType || '개인',
            marketing_agree: formData.marketingAgree || false,
            status: 'active',
            language: currentLanguage || 'ko',
            created_at: Date.now(),
            last_login: Date.now()
        };
        
        // API 호출
        const response = await fetch(`${API_BASE}/members`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(memberData)
        });
        
        if (!response.ok) {
            throw new Error('회원가입 실패');
        }
        
        const result = await response.json();
        console.log('회원가입 성공:', result);
        
        return {
            success: true,
            message: '회원가입이 완료되었습니다! 로그인해주세요.',
            data: result
        };
        
    } catch (error) {
        console.error('회원가입 오류:', error);
        return {
            success: false,
            message: '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.',
            error: error.message
        };
    }
}

// =================================
// 이메일 중복 확인
// =================================

async function checkEmailExists(email) {
    try {
        const response = await fetch(`${API_BASE}/members?search=${encodeURIComponent(email)}&limit=1`);
        
        if (!response.ok) {
            throw new Error('이메일 확인 실패');
        }
        
        const result = await response.json();
        
        // 검색 결과에서 정확히 일치하는 이메일 찾기
        const exists = result.data.some(member => member.email === email);
        
        return {
            exists: exists,
            message: exists ? '이미 사용 중인 이메일입니다.' : '사용 가능한 이메일입니다.'
        };
        
    } catch (error) {
        console.error('이메일 확인 오류:', error);
        return {
            exists: false,
            message: '이메일 확인 중 오류가 발생했습니다.',
            error: error.message
        };
    }
}

// =================================
// 로그인 처리
// =================================

async function handleLogin(email, password) {
    try {
        // 이메일로 회원 찾기
        const response = await fetch(`${API_BASE}/members?search=${encodeURIComponent(email)}&limit=1`);
        
        if (!response.ok) {
            throw new Error('로그인 실패');
        }
        
        const result = await response.json();
        
        // 회원 찾기
        const member = result.data.find(m => m.email === email);
        
        if (!member) {
            return {
                success: false,
                message: '이메일 또는 비밀번호가 올바르지 않습니다.'
            };
        }
        
        // 비밀번호 검증 (실제로는 서버에서 해싱된 비밀번호 비교)
        const isPasswordValid = await verifyPassword(password, member.password);
        
        if (!isPasswordValid) {
            return {
                success: false,
                message: '이메일 또는 비밀번호가 올바르지 않습니다.'
            };
        }
        
        // 마지막 로그인 시간 업데이트
        await fetch(`${API_BASE}/members/${member.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                last_login: Date.now()
            })
        });
        
        // 세션에 저장
        sessionStorage.setItem('user', JSON.stringify({
            id: member.id,
            name: member.name,
            email: member.email,
            language: member.language
        }));
        
        return {
            success: true,
            message: '로그인 성공!',
            user: {
                id: member.id,
                name: member.name,
                email: member.email,
                language: member.language
            }
        };
        
    } catch (error) {
        console.error('로그인 오류:', error);
        return {
            success: false,
            message: '로그인 중 오류가 발생했습니다. 다시 시도해주세요.',
            error: error.message
        };
    }
}

// =================================
// 문의 등록
// =================================

async function handleInquiry(formData) {
    try {
        // 문의 데이터 준비
        const inquiryData = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service_type: formData.serviceType || '기타',
            message: formData.message,
            status: 'pending',
            priority: 'medium',
            budget: formData.budget || '',
            deadline: formData.deadline || '',
            language: currentLanguage || 'ko',
            ip_address: await getClientIP(),
            user_agent: navigator.userAgent,
            created_at: Date.now(),
            replied_at: null,
            admin_memo: ''
        };
        
        // API 호출
        const response = await fetch(`${API_BASE}/inquiries`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inquiryData)
        });
        
        if (!response.ok) {
            throw new Error('문의 등록 실패');
        }
        
        const result = await response.json();
        console.log('문의 등록 성공:', result);
        
        return {
            success: true,
            message: '문의가 성공적으로 접수되었습니다! 24시간 이내에 연락드리겠습니다.',
            data: result
        };
        
    } catch (error) {
        console.error('문의 등록 오류:', error);
        return {
            success: false,
            message: '문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.',
            error: error.message
        };
    }
}

// =================================
// 회원 목록 조회 (관리자용)
// =================================

async function getMembers(page = 1, limit = 10, search = '') {
    try {
        let url = `${API_BASE}/members?page=${page}&limit=${limit}`;
        if (search) {
            url += `&search=${encodeURIComponent(search)}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('회원 목록 조회 실패');
        }
        
        const result = await response.json();
        
        return {
            success: true,
            data: result.data,
            total: result.total,
            page: result.page,
            limit: result.limit
        };
        
    } catch (error) {
        console.error('회원 목록 조회 오류:', error);
        return {
            success: false,
            message: '회원 목록을 불러올 수 없습니다.',
            error: error.message
        };
    }
}

// =================================
// 문의 목록 조회 (관리자용)
// =================================

async function getInquiries(page = 1, limit = 10, status = '', search = '') {
    try {
        let url = `${API_BASE}/inquiries?page=${page}&limit=${limit}`;
        if (search) {
            url += `&search=${encodeURIComponent(search)}`;
        }
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('문의 목록 조회 실패');
        }
        
        const result = await response.json();
        
        // 상태 필터링 (클라이언트 측)
        let filteredData = result.data;
        if (status) {
            filteredData = result.data.filter(inquiry => inquiry.status === status);
        }
        
        return {
            success: true,
            data: filteredData,
            total: filteredData.length,
            page: result.page,
            limit: result.limit
        };
        
    } catch (error) {
        console.error('문의 목록 조회 오류:', error);
        return {
            success: false,
            message: '문의 목록을 불러올 수 없습니다.',
            error: error.message
        };
    }
}

// =================================
// 문의 상태 업데이트 (관리자용)
// =================================

async function updateInquiryStatus(inquiryId, status, adminMemo = '') {
    try {
        const updateData = {
            status: status,
            admin_memo: adminMemo
        };
        
        if (status === 'completed') {
            updateData.replied_at = Date.now();
        }
        
        const response = await fetch(`${API_BASE}/inquiries/${inquiryId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        });
        
        if (!response.ok) {
            throw new Error('문의 상태 업데이트 실패');
        }
        
        const result = await response.json();
        
        return {
            success: true,
            message: '문의 상태가 업데이트되었습니다.',
            data: result
        };
        
    } catch (error) {
        console.error('문의 상태 업데이트 오류:', error);
        return {
            success: false,
            message: '문의 상태 업데이트 중 오류가 발생했습니다.',
            error: error.message
        };
    }
}

// =================================
// 회원 삭제 (관리자용)
// =================================

async function deleteMember(memberId) {
    try {
        const response = await fetch(`${API_BASE}/members/${memberId}`, {
            method: 'DELETE'
        });
        
        if (!response.ok) {
            throw new Error('회원 삭제 실패');
        }
        
        return {
            success: true,
            message: '회원이 삭제되었습니다.'
        };
        
    } catch (error) {
        console.error('회원 삭제 오류:', error);
        return {
            success: false,
            message: '회원 삭제 중 오류가 발생했습니다.',
            error: error.message
        };
    }
}

// =================================
// 유틸리티 함수
// =================================

// 간단한 비밀번호 해싱 (실제로는 서버에서 bcrypt 등 사용)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}

// 비밀번호 검증
async function verifyPassword(password, hashedPassword) {
    const hash = await hashPassword(password);
    return hash === hashedPassword;
}

// 클라이언트 IP 가져오기 (간단한 버전)
async function getClientIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        return 'unknown';
    }
}

// 날짜 포맷팅
function formatDate(timestamp) {
    if (!timestamp) return '-';
    const date = new Date(timestamp);
    return date.toLocaleString('ko-KR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// 상태 뱃지 HTML
function getStatusBadge(status) {
    const badges = {
        'pending': '<span class="badge badge-warning">대기중</span>',
        'processing': '<span class="badge badge-info">처리중</span>',
        'completed': '<span class="badge badge-success">완료</span>',
        'cancelled': '<span class="badge badge-danger">취소</span>',
        'active': '<span class="badge badge-success">활성</span>',
        'inactive': '<span class="badge badge-secondary">비활성</span>',
        'suspended': '<span class="badge badge-danger">정지</span>'
    };
    return badges[status] || status;
}

// 전역 함수로 export
window.handleSignup = handleSignup;
window.checkEmailExists = checkEmailExists;
window.handleLogin = handleLogin;
window.handleInquiry = handleInquiry;
window.getMembers = getMembers;
window.getInquiries = getInquiries;
window.updateInquiryStatus = updateInquiryStatus;
window.deleteMember = deleteMember;
window.formatDate = formatDate;
window.getStatusBadge = getStatusBadge;
