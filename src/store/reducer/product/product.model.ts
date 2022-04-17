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
	user: IUserData;
	comment: string;
	userStars?: number;
	date: string;
	id: string;
}

export interface IGalleryData {
	original: string;
	thumbnail: string;
}

//TODO: заменить на interface пользователя
export interface IUserData {
	preview?: string;
	name: string;
	usName: string;
	id: string;
}
