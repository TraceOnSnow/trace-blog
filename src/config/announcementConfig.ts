import type { AnnouncementConfig } from "../types/config";

// 公告栏配置
export const announcementConfig: AnnouncementConfig = {
	title: "",
	content: "",
	closable: true, // 允许用户关闭公告
	link: {
		enable: false,
		text: "",
		url: "",
		external: false, // 内部链接
	},
};
