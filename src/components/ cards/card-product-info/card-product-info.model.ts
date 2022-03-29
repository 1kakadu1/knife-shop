import { ICartItem } from '../../../store/reducer/cart/cart.model';
import { IFavoriteData } from '../../../store/reducer/favorite/favorite.model';
import { IProductData } from '../../../store/reducer/product/product.model';

export interface ICardProductInfoProps {
	product: IProductData;
	onChangeRating: (id: string, size: string, stars: number) => void;
	onChangeFavorite?: (product: IFavoriteData, size: string) => void;
	isFavorite?: boolean;
	onCompare?: () => void;
	onAddCart?: (product: ICartItem, size: string) => void;
	onSubCart?: (product: ICartItem, size: string) => void;
	currentCart?: ICartItem;
}
