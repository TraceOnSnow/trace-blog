// 日记数据配置。功能关闭时保持空数组，未来启用后只添加真实内容。
export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

const diaryData: DiaryItem[] = [];

export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		for (const tag of item.tags ?? []) {
			tags.add(tag);
		}
	}
	return Array.from(tags).sort();
};
