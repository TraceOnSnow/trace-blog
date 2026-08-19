import type { CommentConfig } from "../types/config";
import { SITE_LANG } from "./siteConfig";

// 评论系统配置
export const commentConfig: CommentConfig = {
	enable: false, // 启用评论功能。当设置为 false 时，评论组件将不会显示在文章区域。
	system: "twikoo", // 评论系统选择: "twikoo" | "giscus"
	twikoo: {
		envId: "",
		lang: SITE_LANG,
	},
	giscus: {
		repo: "",
		repoId: "",
		category: "Announcements",
		categoryId: "",
		mapping: "pathname",
		strict: "0",
		reactionsEnabled: "1",
		emitMetadata: "0",
		inputPosition: "top",
		theme: "preferred_color_scheme",
		lang: SITE_LANG,
		loading: "lazy",
	},
};
