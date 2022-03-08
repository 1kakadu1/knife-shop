import { IProductData } from '../../../store/reducer/products/products.model';

export interface ICardProduct {
	data: ICardProductData;
	className?: string;
}

export interface ICardProductData extends IProductData {}
