import { ICartItem } from '../cart/cart.model';

export interface IFavoriteData extends ICartItem {}

export interface IFavoriteState {
	favorites: IFavoriteData[];
	isOpen: boolean;
}
