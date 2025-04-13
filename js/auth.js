// 密码验证功能
const PASSWORD = 'wanghaoqiang9527';
const STORAGE_KEY = 'prototype_auth';

// 检查是否已认证
function checkAuth() {
    const authToken = localStorage.getItem(STORAGE_KEY);
    if (authToken) {
        try {
            const tokenData = JSON.parse(atob(authToken));
            if (tokenData.exp > Date.now()) {
                return true;
            }
        } catch (e) {
            console.error('Token invalid:', e);
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
    // 确保内容被隐藏
    const container = document.querySelector('.container');
    if (container) {
        container.style.display = 'none';
    }
    
    // 移除已存在的对话框
    const existingDialog = document.querySelector('.password-dialog');
    if (existingDialog) {
        existingDialog.remove();
    }
    
    const dialog = document.createElement('div');
    dialog.className = 'password-dialog';
    dialog.innerHTML = `
        <div class="password-container">
            <h2>请输入访问密码</h2>
            <input type="password" id="password-input" placeholder="请输入密码" autofocus>
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
            if (container) {
                container.style.display = 'block';
            }
        } else {
            error.textContent = '密码错误，请重试';
            input.value = '';
            input.focus();
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
    // 确保在页面加载时立即执行
    if (!checkAuth()) {
        showPasswordDialog();
    } else {
        const container = document.querySelector('.container');
        if (container) {
            container.style.display = 'block';
        }
    }
}

// 立即执行认证检查
document.addEventListener('DOMContentLoaded', () => {
    // 确保在 DOM 加载完成后执行
    initAuth();
});

// 防止页面内容在认证前显示
document.addEventListener('load', () => {
    if (!checkAuth()) {
        const container = document.querySelector('.container');
        if (container) {
            container.style.display = 'none';
        }
    }
}); 