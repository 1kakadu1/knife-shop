import { ICartItem } from '../../../store/reducer/cart/cart.model';

export interface ICartItemProps {
	item: ICartItem;
	className?: string;
	onAdd: (product: ICartItem, size: string) => void;
	onSub: (product: ICartItem, size: string) => void;
}
