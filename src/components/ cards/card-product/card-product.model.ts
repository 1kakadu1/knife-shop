import { ICartItem } from '../../../store/reducer/cart/cart.model';
import { IFavoriteData } from '../../../store/reducer/favorite/favorite.model';
import { IProductData } from '../../../store/reducer/products/products.model';

export interface ICardProduct {
	data: ICardProductData;
	className?: string;
	onAdd: (product: ICartItem, size: string) => void;
	onChangeRating: (id: string, size: string, stars: number) => void;
	onChangeFavorite?: (product: IFavoriteData, size: string) => void;
	isFavorite?: boolean;
	onCompare?: () => void;
}

export interface ICardProductData extends IProductData {}
