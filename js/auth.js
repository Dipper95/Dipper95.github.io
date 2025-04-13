// 密码验证功能
const PASSWORD = 'wanghaoqiang9527';
const STORAGE_KEY = 'prototype_auth';

// 检查是否已认证
function checkAuth() {
    const authToken = localStorage.getItem(STORAGE_KEY);
    if (authToken) {
        // 验证 token 是否有效
        try {
            const tokenData = JSON.parse(atob(authToken));
            if (tokenData.exp > Date.now()) {
                return true;
            }
        } catch (e) {
            // token 无效
        }
    }
    return false;
}

// 创建认证 token
function createAuthToken() {
    const tokenData = {
        exp: Date.now() + (24 * 60 * 60 * 1000) // 24小时后过期
    };
    return btoa(JSON.stringify(tokenData));
}

// 显示密码输入框
function showPasswordDialog() {
    // 先隐藏所有内容
    document.querySelector('.container').style.display = 'none';
    
    const dialog = document.createElement('div');
    dialog.className = 'password-dialog';
    dialog.innerHTML = `
        <div class="password-container">
            <h2>请输入访问密码</h2>
            <input type="password" id="password-input" placeholder="请输入密码">
            <button id="password-submit">确认</button>
            <p class="error-message"></p>
        </div>
    `;
    document.body.appendChild(dialog);

    // 添加事件监听
    const input = dialog.querySelector('#password-input');
    const submit = dialog.querySelector('#password-submit');
    const error = dialog.querySelector('.error-message');

    submit.addEventListener('click', () => {
        if (input.value === PASSWORD) {
            localStorage.setItem(STORAGE_KEY, createAuthToken());
            dialog.remove();
            document.querySelector('.container').style.display = 'block';
        } else {
            error.textContent = '密码错误，请重试';
            input.value = '';
        }
    });

    // 按回车键提交
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            submit.click();
        }
    });
}

// 初始化认证
function initAuth() {
    if (!checkAuth()) {
        showPasswordDialog();
    } else {
        document.querySelector('.container').style.display = 'block';
    }
}

// 立即执行认证检查
initAuth(); 