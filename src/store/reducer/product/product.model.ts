import { ICategoryItemData } from '../category/category.model';

export interface IProductState {
	isLoading: boolean;
	error: string;
	product?: IProductData;
}

export interface IProductData {
	id: string;
	preview: string;
	name: string;
	price: string | number;
	href: string;
	desc: string;
	material: string[];
	category: ICategoryItemData[];
	countComments: number;
	userStars?: number;
	usersStars: number;
	size: string;
	gallery?: IGalleryData[];
}

export interface IGalleryData {
	original: string;
	thumbnail: string;
}
