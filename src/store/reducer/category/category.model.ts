export interface ICategoryItemData {
	name: string;
	href: string;
	id: string;
	parentCategory?: string[];
	catalog?: string;
	order?: number;
}

export interface ICategoryState {
	category: ICategoryItemData[];
}
