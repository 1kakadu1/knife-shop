import { ICartItem } from '../../../store/reducer/cart/cart.model';
import { IProductData } from '../../../store/reducer/products/products.model';

export interface ICardProduct {
	data: ICardProductData;
	className?: string;
	onAdd: (product: ICartItem, size: string) => void;
	onChangeRating: (id: string, size: string, stars: number) => void;
}

export interface ICardProductData extends IProductData {}
