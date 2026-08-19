// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "steamguess",
		title: "SteamGuess",
		description:
			"根据人气、评价、发行日期等线索猜 Steam 游戏的互动应用，支持实时房间与即时反馈。",
		image: "",
		category: "web",
		techStack: [
			"React 19",
			"TypeScript",
			"Vite",
			"Node.js",
			"SQLite",
			"Socket.IO",
		],
		status: "in-progress",
		sourceCode: "https://github.com/TraceOnSnow/SteamGuess",
		visitUrl: "https://steam-guess.vercel.app",
		startDate: "2026-01-31",
		featured: true,
		tags: ["Game", "Steam", "Realtime"],
		showImage: false,
	},
	{
		id: "hearthstone-card-generator",
		title: "HearthstoneCardGenerator",
		description:
			"将知识图谱、LLM 与 Stable Diffusion 串联起来生成炉石传说卡牌的课程原型。",
		image: "",
		category: "other",
		techStack: ["Python", "Knowledge Graph", "LLM", "Stable Diffusion"],
		status: "completed",
		sourceCode: "https://github.com/TraceOnSnow/HearthstoneCardGenerator",
		startDate: "2026-03-05",
		tags: ["AI", "Knowledge Graph", "Course Project"],
		showImage: false,
	},
	{
		id: "hayaku-shelf",
		title: "hayaku-shelf",
		description:
			"基于 Next.js、SQLite 与 Drizzle 构建的个人收藏整理项目，持续开发中。",
		image: "",
		category: "web",
		techStack: ["Next.js 16", "React 19", "TypeScript", "SQLite", "Drizzle"],
		status: "in-progress",
		sourceCode: "https://github.com/TraceOnSnow/hayaku-shelf",
		startDate: "2026-07-09",
		tags: ["Web", "Collection", "Local Data"],
		showImage: false,
	},
	{
		id: "manboard",
		title: "manboard",
		description:
			"面向本地工作流的任务看板，采用 Python API 与前端界面组织和跟踪任务。",
		image: "",
		category: "web",
		techStack: ["Python", "TypeScript", "REST API", "Local-first"],
		status: "in-progress",
		sourceCode: "https://github.com/TraceOnSnow/manboard",
		startDate: "2026-07-07",
		tags: ["Productivity", "Task Board", "Local-first"],
		showImage: false,
	},
	{
		id: "manbo-agent",
		title: "manbo-agent",
		description:
			"围绕 RSS 和信息流收集、处理与筛选的 Python Agent，使用 FastAPI、SQLite 与 LLM。",
		image: "",
		category: "other",
		techStack: ["Python", "FastAPI", "SQLite", "RSS", "LLM"],
		status: "in-progress",
		sourceCode: "https://github.com/TraceOnSnow/manbo-agent",
		startDate: "2026-05-19",
		tags: ["Agent", "RSS", "Information Flow"],
		showImage: false,
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
