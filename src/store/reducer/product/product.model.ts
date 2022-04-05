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
	reviews?: IProductReview[];
	сharacteristic?: IProductCharacteristic[];
}

export interface IProductCharacteristic {
	label: string;
	items: {
		label: string;
		value: string | number;
	}[];
}

export interface IProductReview {
	//TODO: заменить на interface пользователя
	user: {
		preview?: string;
		name: string;
		usName: string;
	};
	comment: string;
	userStars?: number;
	date: string;
}

export interface IGalleryData {
	original: string;
	thumbnail: string;
}
