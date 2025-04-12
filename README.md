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

### 部署到服务器

1. 将整个 `prototype-hosting-platform` 目录上传到您的Web服务器
2. 确保服务器配置正确，能够提供静态文件服务
3. 通过服务器URL访问平台

### 部署到Git（GitHub Pages）

1. **创建GitHub仓库**：
   - 登录您的GitHub账户
   - 创建一个新的仓库，例如 `prototype-hosting`

2. **初始化本地Git仓库**：
   ```bash
   cd prototype-hosting
   git init
   git add .
   git commit -m "初始提交：原型托管平台"
   ```

3. **关联远程仓库**：
   ```bash
   git remote add origin https://github.com/您的用户名/prototype-hosting.git
   git branch -M main
   git push -u origin main
   ```

4. **设置GitHub Pages**：
   - 在GitHub仓库页面，点击 "Settings"
   - 滚动到 "GitHub Pages" 部分
   - 在 "Source" 下拉菜单中选择 "main" 分支
   - 点击 "Save"
   - 等待几分钟，您的网站将在 `https://您的用户名.github.io/prototype-hosting` 上可用

5. **更新原型文件**：
   - 添加您的原型文件到 `projects` 目录
   - 更新 `js/data.js` 文件中的项目和版本数据
   - 提交并推送更改：
     ```bash
     git add .
     git commit -m "添加原型文件"
     git push
     ```

6. **使用自定义域名（可选）**：
   - 在仓库的 "Settings" > "GitHub Pages" 部分
   - 在 "Custom domain" 字段中输入您的域名
   - 点击 "Save"
   - 在您的域名注册商处添加相应的DNS记录

### 部署到GitLab Pages

1. **创建GitLab仓库**：
   - 登录您的GitLab账户
   - 创建一个新的项目

2. **初始化本地Git仓库并推送**：
   ```bash
   cd prototype-hosting-platform
   git init
   git add .
   git commit -m "初始提交：原型托管平台"
   git remote add origin https://gitlab.com/您的用户名/prototype-hosting.git
   git push -u origin master
   ```

3. **配置GitLab Pages**：
   - 在项目根目录创建 `.gitlab-ci.yml` 文件，内容如下：
     ```yaml
     pages:
       stage: deploy
       script:
         - mkdir .public
         - cp -r * .public
         - mv .public public
       artifacts:
         paths:
           - public
       only:
         - master
     ```
   - 提交并推送此文件：
     ```bash
     git add .gitlab-ci.yml
     git commit -m "添加GitLab Pages配置"
     git push
     ```

4. **访问您的网站**  
   - 部署完成后，您的网站将在 `https://您的用户名.gitlab.io/prototype-hosting` 上可用

## 替换为您自己的数据

### 1. 修改数据文件

编辑 `js/data.js` 文件，替换示例项目和版本数据为您自己的数据。数据结构如下：

```javascript
const projects = [
    {
        id: 1,                      // 项目唯一标识符
        name: "项目名称",            // 项目名称
        color: "blue",              // 项目颜色（可选值: "blue", "green", "purple", "pink"）
        isPinned: false,            // 是否置顶
        versions: [                 // 版本数组
            {
                id: "v1.0",         // 版本号
                description: "版本描述", // 版本描述
                updateDate: "2024-03-08", // 更新日期（格式: "YYYY-MM-DD"）
                url: "projects/project1/v1.0/index.html", // 原型文件路径
                isPinned: false     // 是否置顶
            }
        ]
    }
];
```

### 2. 组织原型文件

1. 在 `projects` 目录下为每个项目创建子目录
2. 在项目目录下为每个版本创建子目录
3. 将原型文件放在对应的版本目录中

推荐的目录结构：

```
prototype-hosting-platform/
├── projects/
│   ├── project1/
│   │   ├── v1.0/
│   │   │   ├── index.html
│   │   │   └── ...
│   │   └── v2.0/
│   │       ├── index.html
│   │       └── ...
│   └── project2/
│       ├── v1.0/
│       │   ├── index.html
│       │   └── ...
│       └── ...
└── ...
```

### 3. 更新URL路径

确保 `data.js` 中每个版本的 `url` 属性指向正确的原型文件路径。

## 自定义样式

如果需要自定义平台的样式，可以编辑以下文件：

- `css/styles.css` - 主样式文件
- `css/additional.css` - 附加样式文件（可以在这里添加自定义样式而不影响主样式）

## 浏览器兼容性

平台兼容所有现代浏览器，包括：

- Chrome
- Firefox
- Safari
- Edge

## 许可

此项目采用 MIT 许可证。 