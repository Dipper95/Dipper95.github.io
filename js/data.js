// 版本: v2024.05.13.03
console.log("data.js 加载完成");

/**
 * 原型托管平台数据 - 版本 2024.05.13.01
 * 这个文件包含项目和版本的数据结构
 * 
 * ===== 当前平台设置 =====
 * 当前平台已设置为仅显示"app/小程序原型"项目，其他项目不显示
 * 如需更改此设置，请修改 main.js 中的 renderProjects() 函数
 * 
 * ===== 如何替换为您自己的真实数据 =====
 * 
 * 1. 替换下方的 projects 数组，按照以下结构添加您的项目和版本：
 * 
 * projects 数组结构说明：
 * - id: 项目唯一标识符（数字或字符串）
 * - name: 项目名称
 * - color: 项目颜色（可选值: "blue", "green", "purple", "pink"）
 * - isPinned: 是否置顶（布尔值，true 或 false）
 * - requireAuth: 是否需要认证（布尔值，true 或 false）
 * - password: 认证密码（字符串）
 * - versions: 版本数组，包含该项目的所有版本
 *   - id: 版本号（如 "v1.0"）
 *   - description: 版本描述
 *   - updateDate: 更新日期（格式: "YYYY-MM-DD"）
 *   - url: 原型文件路径（相对于网站根目录）
 *   - isPinned: 是否置顶（布尔值，true 或 false）
 * 
 * 2. 文件结构建议：
 *    将您的原型文件放在 projects/[项目文件夹名]/[版本文件夹名]/ 目录下
 *    例如: projects/youshi/backend/index.html
 * 
 * 3. 确保每个原型的 URL 路径正确，可以正常访问
 */

// 项目数据 - 版本 2024.05.13.02
const projects = [
    {
        id: 1,
        name: "切膜机项目",
        color: "blue",
        isPinned: true,
        requireAuth: true,
        password: "wanghaoqiang227",
        hidden: true, // 隐藏此项目
        versions: [
            {
                id: "v25.3.2型号数据优化",
                description: "型号展示从纯文字改为图文形式",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v25.3.2型号数据优化/index.html",
                isPinned: true
            },
            {
                id: "v25.3.1自动调刀逻辑说明",
                description: "sd196电动刀座，自动调刀适配",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v25.3.1自动调刀逻辑说明/index.html",
                isPinned: true
            },
            {
                id: "v24.12.2松星瑞适配双头机器+通用功能优化",
                description: "160档刀压适配",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.12.2松星瑞适配双头机器+通用功能优化/index.html",
                isPinned: true
            },
            {
                id: "v24.12.1通用功能+松星瑞、skystar用户信息收集",
                description: "通用版本优化，skystar强制用户信息收集",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.12.1通用功能+松星瑞、skystar用户信息收集/index.html",
                isPinned: true
            },
            {
                id: "v24.11.1M40ai大模型版本",
                description: "对接讯飞语音识别、语音唤醒功能，增加文生图功能",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.11.1M40ai大模型版本/index.html",
                isPinned: true
            },
            {
                id: "v24.10.2问题反馈统计",
                description: "增加问题反馈统计功能",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.10.2问题反馈统计/index.html",
                isPinned: true
            },
            {
                id: "v24.10.1机器可用时间控制",
                description: "包年包月时间区间下增加自定义时间控制",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.10.1机器可用时间控制/index.html",
                isPinned: true
            },
            {
                id: "v24.9.4热转印打印业务",
                description: "增加热转印打印功能",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.9.4热转印打印业务/index.html",
                isPinned: true
            },
            {
                id: "v24.9.3防窥膜角度配置",
                description: "针对型号进行防窥角度配置",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.9.3防窥膜角度配置/index.html",
                isPinned: true
            },
            {
                id: "v24.9.2字体轮廓功能",
                description: "字体轮廓功能增加以代理商维度控制",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.9.2字体轮廓功能/index.html",
                isPinned: true
            },
            {
                id: "v24.9.1数据统计",
                description: "修改工作台数据统计维度",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.9.1数据统计/index.html",
                isPinned: true
            },
            {
                id: "v24.6.1切割流程自定义",
                description: "增加双系统扫码切割功能",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.6.1切割流程自定义/index.html",
                isPinned: true
            },
            {
                id: "v24.4.1打印机文生图",
                description: "背膜增加文生图功能，头像动漫化功能",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.4.1打印机文生图/index.html",
                isPinned: true
            },{
                id: "v24.3.3欧盟GDRP合规调整",
                description: "增加了欧盟合规隐私协议和弹窗",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.3.3欧盟GDRP合规调整/index.html",
                isPinned: true
            },
            {
                id: "v24.3.2库存预警+操作指引",
                description: "增加库存预警和操作指引功能",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.3.1数据统计/index.html",
                isPinned: true
            },
            {
                id: "v24.3.1数据统计",
                description: "工作台统计数据优化",
                updateDate: "2024-03-06",
                url: "projects/skycut-Flim/v24.3.2库存预警+操作指引/index.html",
                isPinned: true
            }
        ]
    },
    {
        id: 2,
        name: "手工机项目",
        color: "green",
        isPinned: false,
        requireAuth: true,
        password: "wanghaoqiang227",
        hidden: true, // 隐藏此项目
        versions: [
            {
                id: "v3.1",
                description: "新增数据分析模块，优化用户权限管理",
                updateDate: "2023-12-01",
                url: "projects/yinshanshanpay/v3.1/index.html",
                isPinned: true
            },
            {
                id: "v3.0",
                description: "全新设计的仪表盘，支持自定义布局和数据可视化",
                updateDate: "2023-11-10",
                url: "projects/yinshanshanpay/v3.0/index.html",
                isPinned: false
            },
            {
                id: "v2.5",
                description: "增加批量操作功能，优化表格组件性能",
                updateDate: "2023-10-15",
                url: "projects/yinshanshanpay/v2.5/index.html",
                isPinned: false
            },
            {
                id: "v2.0",
                description: "重构用户界面，提升响应速度，新增导出功能",
                updateDate: "2023-09-20",
                url: "projects/yinshanshanpay/v2.0/index.html",
                isPinned: false
            }
        ]
    },
    {
        id: 3,
        name: "标签机项目",
        color: "purple",
        isPinned: false,
        requireAuth: true,
        password: "wanghaoqiang227",
        hidden: true, // 隐藏此项目
        versions: [
            {
                id: "总后台汇总",
                description: "首信易支付总后台功能汇总",
                updateDate: "2023-11-25",
                url: "projects/shouxinpay/admin/index.html",
                isPinned: false
            },
            {
                id: "代理商后台汇总",
                description: "代理商管理后台功能汇总",
                updateDate: "2023-10-30",
                url: "projects/shouxinpay/agent/index.html",
                isPinned: false
            },
            {
                id: "app 汇总",
                description: "首信易支付APP功能汇总",
                updateDate: "2023-10-01",
                url: "projects/shouxinpay/app/index.html",
                isPinned: false
            }
        ]
    },
    {
        id: 4,
        name: "首信易支付",
        color: "pink",
        isPinned: false,
        requireAuth: true,
        password: "wanghaoqiang227",
        hidden: true, // 隐藏此项目
        versions: [
            {
                id: "总后台汇总",
                description: "手工机总后台功能汇总",
                updateDate: "2023-11-25",
                url: "projects/handcraft/admin/index.html",
                isPinned: false
            },
            {
                id: "创作者平台",
                description: "创作者平台功能汇总",
                updateDate: "2023-10-30",
                url: "projects/handcraft/creator/index.html",
                isPinned: false
            },
            {
                id: "手工机app",
                description: "手工机APP功能汇总",
                updateDate: "2023-10-01",
                url: "projects/handcraft/app/index.html",
                isPinned: false
            }
        ]
    },
    {
        id: 5,
        name: "优市",
        color: "red",
        isPinned: false,
        requireAuth: true,
        password: "wanghaoqiang227",
        hidden: true, // 隐藏此项目
        versions: [
            {
                id: "优市后台总文档汇总",
                description: "优市后台总文档汇总",
                updateDate: "2023-11-25",
                url: "projects/Youshi/优市后台文档汇总/index.html",
                isPinned: false
            },
            {
                id: "优市app总文档汇总",
                description: "优市app总文档汇总",
                updateDate: "2023-10-30",
                url: "projects/cuttingmachine/creator/index.html",
                isPinned: false
            }
        ]
    },
    {
        id: 6,
        name: "app小程序原型",
        color: "#0077cc",
        isPinned: false,
        requireAuth: false,
        password: "",
        hidden: false,
        versions: [
            {
                id: 1,
                description: "Craft4U-app",
                updateDate: "2024年5月13日",
                url: "projects/app小程序原型/Craft4U_app/index.html",
                isPinned: false
            },
            {
                id: 2,
                description: "本地原型文件示例",
                updateDate: "2024年5月14日",
                url: "projects/app小程序原型/您的版本名称/index.html",
                isPinned: false,
                note: "上传本地原型后，请替换'您的版本名称'为实际文件夹名称"
            }
        ]
    }
];

/* 
 * 数据模板示例（可复制此模板添加您的项目）：
 *
 * {
 *     id: 7,  // 使用新的唯一ID
 *     name: "您的项目名称",
 *     color: "pink",  // 可选: "blue", "green", "purple", "pink"
 *     isPinned: false,
 *     requireAuth: false,
 *     password: "",
 *     versions: [
 *         {
 *             id: "版本名称",
 *             description: "版本描述",
 *             updateDate: "2024-03-08",  // 使用 YYYY-MM-DD 格式
 *             url: "projects/your-project-folder/version-folder/index.html",
 *             isPinned: false
 *         }
 *     ]
 * }
 */

// 从本地存储加载置顶状态
function loadPinnedStates() {
    try {
        const savedPinnedProjects = localStorage.getItem('pinnedProjects');
        const savedPinnedVersions = localStorage.getItem('pinnedVersions');
        
        if (savedPinnedProjects) {
            const pinnedProjectIds = JSON.parse(savedPinnedProjects);
            projects.forEach(project => {
                project.isPinned = pinnedProjectIds.includes(project.id);
            });
        }
        
        if (savedPinnedVersions) {
            const pinnedVersionsMap = JSON.parse(savedPinnedVersions);
            projects.forEach(project => {
                if (pinnedVersionsMap[project.id]) {
                    project.versions.forEach(version => {
                        version.isPinned = pinnedVersionsMap[project.id].includes(version.id);
                    });
                }
            });
        }
    } catch (error) {
        console.error('Error loading pinned states:', error);
    }
}

// 保存置顶状态到本地存储
function savePinnedStates() {
    try {
        const pinnedProjectIds = projects.filter(project => project.isPinned).map(project => project.id);
        
        const pinnedVersionsMap = {};
        projects.forEach(project => {
            const pinnedVersionIds = project.versions.filter(version => version.isPinned).map(version => version.id);
            if (pinnedVersionIds.length > 0) {
                pinnedVersionsMap[project.id] = pinnedVersionIds;
            }
        });
        
        localStorage.setItem('pinnedProjects', JSON.stringify(pinnedProjectIds));
        localStorage.setItem('pinnedVersions', JSON.stringify(pinnedVersionsMap));
    } catch (error) {
        console.error('Error saving pinned states:', error);
    }
}

// 初始化时加载置顶状态
loadPinnedStates(); 