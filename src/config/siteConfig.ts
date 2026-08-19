import type { SiteConfig } from "../types/config";

// 定义站点语言
const SITE_LANG = "zh_CN"; // 语言代码，例如：'en', 'zh_CN', 'ja' 等。

export const siteConfig: SiteConfig = {
	title: "Trace Blog",
	subtitle: "记录软件工程、AI / Agent、游戏开发、项目实践与长期思考",
	siteURL: "https://blog.treesonsnow.com/",
	keywords: [
		"Trace Blog",
		"Zhiheng Wang",
		"软件工程",
		"AI",
		"Agent",
		"游戏开发",
	],
	siteStartDate: "2026-08-16", // 站点开始运行日期，用于站点统计组件计算运行天数
	timeZone: "Asia/Shanghai", // 文章日期使用的 IANA 时区，可改为 Asia/Tokyo、Europe/Berlin 等

	lang: SITE_LANG,

	themeColor: {
		hue: 240, // 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		fixed: false, // 对访问者隐藏主题色选择器
	},

	// 特色页面开关配置（关闭未使用的页面有助于提升 SEO，关闭后请记得在 navbarConfig 中移除对应链接）
	featurePages: {
		anime: false, // 番剧页面开关
		diary: false, // 日记页面开关
		friends: false, // 友链页面开关
		projects: true, // 项目页面开关
		skills: false, // 技能页面开关
		timeline: false, // 时间线页面开关
		albums: false, // 相册页面开关
		devices: false, // 设备页面开关
		aiTools: false, // AI 工具页面开关
	},

	// 顶栏标题配置
	navbarTitle: {
		// 显示模式："text-icon" 显示图标+文本，"logo" 仅显示Logo
		mode: "text-icon",
		// 顶栏标题文本
		text: "Trace Blog",
		// 顶栏标题图标路径
		icon: "/assets/brand/logo.png",
		// 网站Logo图片路径
		logo: "/assets/brand/logo.png",
	},

	// 旧版页面自动缩放配置。默认关闭，页面尺寸优先交由响应式布局处理。
	pageScaling: {
		enable: false, // 兼容旧站点的可选缩放；不建议通过根字号控制整体布局
		targetWidth: 2000, // 目标宽度，低于此宽度时开始缩放
	},

	font: {
		// custom 保持 ZenMaruGothic -> Loli -> 系统字体的显示顺序；system 不加载任何自定义字体
		mode: "custom",
	},

	bangumi: {
		userId: "",
		fetchOnDev: false, // 是否在开发环境下获取 Bangumi 数据（默认 false），获取前先执行 pnpm build 构建 json 文件
	},

	bilibili: {
		vmid: "",
		fetchOnDev: false, // 是否在开发环境下获取 Bilibili 数据（默认 false）
		coverMirror: "", // 封面图片镜像源（可选，如果需要使用镜像源，例如 "https://images.weserv.nl/?url="）
		useWebp: true, // 是否使用WebP格式（默认 true）

		// bilibili 观看进度配置说明(可选，如需配置仔细阅读):
		// 1. 本地开发：请在 .env 文件中填写 BILI_SESSDATA=your_SESSDATA
		// 2. 远程构建：请在 GitHub 仓库 Settings -> Secrets 中添加 BILI_SESSDATA
		// 注意：SESSDATA 为账号凭证，为防止泄露，切记不可使用硬编码。
		// 安全提示：如 SESSDATA 已泄露，请打开 B站手机端 —— 我的 —— 设置 —— 安全隐私 —— 登陆设备管理 —— 一键退登，销毁已泄露的账号凭证
	},

	anime: {
		mode: "local", // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置，"bilibili" 使用Bilibili API
	},

	// 日记页面 Memos API 地址，留空则使用静态数据
	diaryApiUrl: "",

	// 文章列表布局配置
	postListLayout: {
		// 默认布局模式："list" 列表模式（单列布局），"grid" 网格模式（双列布局）
		// 注意：如果侧边栏配置启用了"both"双侧边栏，则无法使用文章列表"grid"网格（双列）布局
		defaultMode: "list",
		// 是否启用布局切换功能
		enable: true,
		// 是否允许用户切换布局
		allowSwitch: true,
		// 文章列表页分类导航条配置
		categoryBar: {
			enable: true, // 是否在文章列表页显示分类导航条
		},
	},

	// 文章页超宽屏布局配置
	// 在 2K/4K 视口下扩展文章容器、侧栏与正文阅读轨道；1920px 以下不生效。
	// 与 pageScaling 互不影响：断点按 CSS 视口判断，且 pageScaling 在 2000px 以上是空操作。
	ultrawidePostLayout: {
		enable: true, // 访客未手动切换时的初始状态
		allowSwitch: true, // 是否在设置面板中显示开关
	},

	// 标签样式配置
	tagStyle: {
		// 是否使用新样式（悬停高亮样式）还是旧样式（外框常亮样式）
		useNewStyle: false,
	},

	// 壁纸模式配置
	wallpaperMode: {
		// 默认壁纸模式：banner=顶部横幅，fullscreen=全屏壁纸，none=无壁纸
		defaultMode: "none",
		// 整体布局方案切换按钮显示设置（默认："desktop"）
		// "off" = 不显示
		// "mobile" = 仅在移动端显示
		// "desktop" = 仅在桌面端显示
		// "both" = 在所有设备上显示
		showModeSwitchOnMobile: "off",
	},

	banner: {
		src: "",

		position: "center", // 等同于 object-position，仅支持 'top', 'center', 'bottom'。默认为 'center'

		carousel: {
			enable: false,
			interval: 3,
			switchable: false,
		},

		waves: {
			enable: false,
			performanceMode: false,
			mobileDisable: false,
			switchable: false,
		},

		// PicFlow API支持(智能图片API)
		imageApi: {
			enable: false, // 启用图片API
			url: "",
		},

		homeText: {
			enable: false,
			title: "Trace Blog",
			switchable: false,

			subtitle: ["记录项目、技术与长期思考"],
			typewriter: {
				enable: true, // 启用副标题打字机效果

				speed: 100, // 打字速度（毫秒）
				deleteSpeed: 50, // 删除速度（毫秒）
				pauseTime: 2000, // 完全显示后的暂停时间（毫秒）
			},
		},

		credit: {
			enable: false, // 显示横幅图片来源文本

			text: "", // 要显示的来源文本
			url: "", // （可选）原始艺术品或艺术家页面的 URL 链接
		},

		navbar: {
			transparentMode: "semi",
		},
	},
	toc: {
		enable: true, // 总开关，启用目录功能
		mobileTop: true, // 手机端顶部 TOC 按钮
		desktopSidebar: true, // 电脑端右侧边栏 TOC
		floating: true, // 悬浮 TOC 按钮
		depth: 2, // 目录深度，1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推
		useJapaneseBadge: false,
	},
	showCoverInContent: true, // 在文章内容页显示文章封面
	generateOgImages: false, // 启用生成OpenGraph图片功能,注意开启后要渲染很长时间，不建议本地调试的时候开启
	favicon: [
		{ src: "/favicon/favicon-16x16.png", sizes: "16x16" },
		{ src: "/favicon/favicon-32x32.png", sizes: "32x32" },
		{ src: "/favicon/favicon.ico" },
	],

	showLastModified: true, // 控制"上次编辑"卡片显示的开关
	pageProgressBar: {
		enable: true, // 启用页面顶部进度条
		height: 3, // 进度条高度 3px
		duration: 6000, // 动画时长 6s
	},

	thirdPartyAnalytics: {
		enable: false, // 是否启用第三方统计（Microsoft Clarity），默认关闭，启用可能影响 Lighthouse 评分
		clarityId: "", // Clarity 项目 ID
	},
	// 卡片样式配置
	card: {
		border: true, // 开启卡片边框和微阴影，让卡片更有立体感
		followTheme: false, // 卡片背景跟随主题色相
	},
	// 图片优化配置
	imageOptimization: {
		formats: "webp", // 图片输出格式："avif"、"webp" 或 "both"（avif+webp，最优质量但构建更慢）
		quality: 85, // 图片质量，推荐 70-85
		noReferrerDomains: [
			// 需要添加 referrerpolicy="no-referrer" 的域名（支持通配符）
		],
	},
};

export { SITE_LANG };
