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

## 本地运行说明

### 使用本地服务器运行

由于项目使用了 Git 子模块来引用原型文件，直接打开 HTML 文件无法正确加载原型文件。请按照以下步骤使用本地服务器运行：

1. **安装 Python**（如果尚未安装）：
   - 访问 [Python 官网](https://www.python.org/downloads/) 下载并安装
   - 确保安装时勾选 "Add Python to PATH" 选项

2. **启动本地服务器**：
   - 打开终端（Windows 用户使用命令提示符或 PowerShell）
   - 进入项目目录：
     ```bash
     cd Dipper95.github.io
     ```
   - 启动 Python 的 HTTP 服务器：
     ```bash
     # Python 3
     python -m http.server 8000
     
     # 或使用 Python 2
     python -m SimpleHTTPServer 8000
     ```

3. **访问网站**：
   - 打开浏览器
   - 访问 `http://localhost:8000`
   - 现在应该可以看到密码输入框和原型文件

### 注意事项
- 必须使用本地服务器运行，不能直接打开 HTML 文件
- 确保所有子模块都已正确初始化
- 如果看不到原型文件，请检查子模块是否正确加载

## 文件更新说明

### 更新原型文件步骤

1. **更新私有仓库中的原型文件**
   - 打开 GitHub Desktop
   - 选择 `prototypes-temp` 仓库（这是存放原型文件的私有仓库）
   - 添加或修改原型文件
   - 点击 "Commit to main" 提交更改
   - 点击 "Push origin" 推送到私有仓库

2. **更新公开仓库中的子模块**
   - 打开 GitHub Desktop
   - 切换到 `Dipper95.github.io` 仓库（这是公开的网站仓库）
   - 点击顶部菜单的 "Repository" > "Open in Terminal"
   - 在弹出的终端窗口中，执行以下命令：
     ```
     git submodule update --remote --merge
     ```
   - 等待更新完成
   - 在 GitHub Desktop 中：
     1. 勾选 `prototypes` 文件夹的更改
     2. 在底部输入提交信息，例如："Update: 更新原型文件引用"
     3. 点击 "Commit to main" 提交更改
     4. 点击 "Push origin" 推送到网站

3. **检查更新是否成功**
   - 等待几分钟
   - 打开浏览器访问您的网站
   - 检查原型文件是否已经更新

### 注意事项
- 原型文件必须放在私有仓库中，不要直接修改公开仓库
- 每次修改原型文件后，都要按照上述步骤更新子模块
- 如果更新后网站没有变化，请等待几分钟再刷新页面
- 如果遇到问题，可以尝试重新执行更新步骤

### 常见问题
1. 如果文件没有正确更新：
   - 检查私有仓库的提交是否成功
   - 确保子模块已正确更新
   - 尝试重新执行子模块更新命令
   - 检查 GitHub Pages 的构建状态

2. 如果遇到权限问题：
   - 检查 GitHub 账号权限
   - 确认私有仓库的访问权限
   - 验证 SSH 密钥配置
   - 确保已接受私有仓库的邀请 