import { IPostData } from '../../../components/ cards/card-post/card-post.model';

export interface INewsState {
	isLoading: boolean;
	error: string;
	news: IPostData[];
	filter: INewsFilter;
}

export enum FiltersNewsKey {
	rating = 'rating',
	category = 'category',
}

export interface INewsFilter {
	[FiltersNewsKey.rating]?: { [key: string]: string };
	[FiltersNewsKey.category]?: { [key: string]: string };
}

export type TypeNewsOrder = 'price-asc' | 'price-desc' | 'popular';
