# 原型托管平台

这是一个简单的原型托管平台，用于展示和管理设计原型。平台支持项目和版本的分类管理，以及置顶功能。

## 功能特点

- 项目和版本的分类展示
- 项目和版本的置顶功能
- 响应式设计，适配不同设备
- 简洁美观的用户界面

## 如何使用

### 本地运行

1. 克隆或下载此仓库到本地
2. 使用任意HTTP服务器运行，例如：
   ```
   cd 文件目录
   python3 -m http.server 8000
   ```
3. 在浏览器中访问 `http://localhost:8000`

### 部署到GitHub Pages

1. **创建GitHub仓库**：
   - 登录您的GitHub账户
   - 创建一个新的仓库，例如 `Dipper95.github.io`

2. **初始化本地Git仓库**：
   ```bash
   cd Dipper95.github.io
   git init
   git add .
   git commit -m "初始提交：原型托管平台"
   ```

3. **关联远程仓库**：
   ```bash
   git remote add origin https://github.com/您的用户名/Dipper95.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **设置GitHub Pages**：
   - 在GitHub仓库页面，点击 "Settings"
   - 滚动到 "GitHub Pages" 部分
   - 在 "Source" 下拉菜单中选择 "main" 分支
   - 点击 "Save"
   - 等待几分钟，您的网站将在 `https://您的用户名.github.io` 上可用

## 文件更新说明

### 更新原型文件步骤

1. **更新私有仓库中的原型文件**
   - 打开 GitHub Desktop
   - 选择 `prototypes-temp` 仓库（这是存放原型文件的私有仓库）
   - 添加或修改原型文件
   - 点击 "Commit to main" 提交更改
   - 点击 "Push origin" 推送到私有仓库

2. **更新公开仓库中的引用**
   - 打开 GitHub Desktop
   - 切换到 `Dipper95.github.io` 仓库（这是公开的网站仓库）
   - 点击顶部菜单的 "Repository" > "Pull" 获取最新更改
   - 在左侧文件列表中，找到并勾选 `prototypes` 文件夹
   - 在底部输入框写："更新原型文件引用"
   - 点击 "Commit to main" 提交更改
   - 点击 "Push origin" 推送到网站

3. **检查更新是否成功**
   - 等待几分钟
   - 打开浏览器访问您的网站
   - 检查原型文件是否已经更新

### 注意事项
- 原型文件必须放在私有仓库中，不要直接修改公开仓库
- 每次修改原型文件后，都要按照上述步骤更新引用
- 如果更新后网站没有变化，请等待几分钟再刷新页面
- 如果遇到问题，可以尝试重新执行更新步骤

### 常见问题
1. 如果文件没有正确更新：
   - 检查私有仓库的提交是否成功
   - 确保公开仓库中的子模块引用已更新
   - 尝试重新拉取最新更改
   - 检查 GitHub Pages 的构建状态

2. 如果遇到权限问题：
   - 检查 GitHub 账号权限
   - 确认私有仓库的访问权限
   - 验证 SSH 密钥配置
   - 确保已接受私有仓库的邀请 