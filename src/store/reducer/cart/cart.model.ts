export interface ICart {
	products: ICartItem[];
	isOpen: boolean;
}

export interface ICartItem {
	title: string;
	preview: string;
	id: string;
	price: number | string;
	count: number;
	cat?: string;
	comments?: string;
	productSize: string;
	[key: string]: unknown;
}

export interface ICartComments {
	id: string;
	size: string;
	comments: string;
}
