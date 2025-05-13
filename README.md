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

## 如何上传原型文件

### 方法一：通过GitHub Desktop上传本地原型文件

1. **准备原型文件**
   - 确保您的原型文件已经打包为完整的网页（包含HTML、CSS、JS等所有必需文件）
   - 建议使用以下文件结构：
     ```
     您的原型名称/
     ├── index.html
     ├── css/
     ├── js/
     └── assets/
     ```

2. **通过GitHub Desktop上传文件**
   - 打开GitHub Desktop
   - 选择 `Dipper95.github.io` 仓库
   - 将您的原型文件夹复制到 `projects/app小程序原型/[您的版本名称]/` 目录下
   - 在GitHub Desktop中提交更改：
     1. 输入提交信息，例如："添加新的原型版本：[版本名称]"
     2. 点击 "Commit to main"
     3. 点击 "Push origin" 推送到网站

3. **更新data.js配置文件**
   - 在VS Code或其他编辑器中打开 `js/data.js` 文件
   - 找到 "app/小程序原型" 项目的定义部分
   - 在versions数组中添加新版本信息，例如：
     ```javascript
     {
         id: "v1.0", // 版本号
         description: "您的版本描述", // 版本描述
         updateDate: "2024-05-14", // 更新日期
         url: "projects/app小程序原型/您的版本名称/index.html", // 文件路径
         isPinned: false // 是否置顶
     }
     ```
   - 保存文件并通过GitHub Desktop提交更改

4. **检查更新是否成功**
   - 等待几分钟（GitHub Pages可能需要时间部署）
   - 访问您的网站，检查新版本是否显示

### 方法二：直接通过浏览器上传（适合小文件）

1. **在GitHub网站上创建目录**
   - 登录GitHub，进入您的 `Dipper95.github.io` 仓库
   - 导航到 `projects/app小程序原型/` 目录
   - 点击 "Add file" > "Create new file"
   - 在文件名框中输入 `您的版本名称/index.html` 创建新目录和文件

2. **上传文件**
   - 编辑并保存index.html文件
   - 重复上述步骤，上传其他必要文件（CSS、JS等）

3. **更新data.js配置**
   - 在GitHub上打开 `js/data.js` 文件
   - 点击编辑按钮（铅笔图标）
   - 按照方法一中的说明添加新版本信息
   - 提交更改，添加提交信息

## data.js配置说明

在 `data.js` 文件中，项目和版本的配置结构如下：

```javascript
{
    id: 5, // 项目ID（唯一）
    name: "app/小程序原型", // 项目名称
    color: "blue", // 项目颜色（可选：blue, green, purple, pink）
    isPinned: true, // 是否置顶项目
    requireAuth: false, // 是否需要密码访问
    password: "", // 密码（如果requireAuth为true）
    versions: [ // 版本数组
        {
            id: "v1.0", // 版本ID
            description: "版本描述", // 版本描述
            updateDate: "2024-05-14", // 更新日期
            url: "projects/app小程序原型/版本名称/index.html", // 文件路径
            isPinned: true // 是否置顶版本
        }
        // 更多版本...
    ]
}
```

添加新版本时，只需在对应项目的versions数组中添加新的版本对象即可。 