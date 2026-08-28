import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
	avatar: "/assets/brand/avatar.png",
	name: "Zhiheng Wang",
	bio: "AI Engineer | Agent Systems | Software Engineering",
	typewriter: {
		enable: false,
		speed: 80, // 打字速度（毫秒）
	},
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/TraceOnSnow",
		},
		{
			name: "LinkedIn",
			icon: "fa7-brands:linkedin",
			url: "https://www.linkedin.com/in/zhihengwang02/",
		},
		{
			name: "Email",
			icon: "material-symbols:mail",
			url: "mailto:zhihengw02@outlook.com",
		},
		{
			name: "Homepage",
			icon: "material-symbols:home",
			url: "https://traceonsnow.com",
		},
	],
};
