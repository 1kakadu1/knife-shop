import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICartItem } from '../store/reducer/cart/cart.model';
import { toCartAction } from '../store/reducer/cart/cart.reducer';
import { toCartSelector } from '../store/reducer/cart/cart.selector';

const CART_STORE_LOCAL = 'cart';

export const useCart = () => {
	const dispatch = useDispatch();
	const onAddItem = (product: ICartItem, size: string) =>
		dispatch(toCartAction.add({ size, prod: product }));
	const onSubItem = (product: ICartItem, size: string) =>
		dispatch(toCartAction.sub({ size, prod: product }));
	const onRemoveItem = (id: string, size: string) =>
		dispatch(toCartAction.remove({ size, id }));
	const onToggleCart = (toggle: boolean) => {
		dispatch(toCartAction.toggleCart(toggle));
	};

	const refInit = useRef<boolean>(false);

	const cart = useSelector(toCartSelector.cart);
	const counter = useSelector(toCartSelector.cartCounter);
	const isOpen = useSelector(toCartSelector.isOpen);
	const totalPrice = useSelector(toCartSelector.getTotalPrice());

	useEffect(() => {
		if (refInit.current) {
			localStorage.setItem(CART_STORE_LOCAL, JSON.stringify(cart));
		}
	}, [cart, totalPrice, counter]);

	useEffect(() => {
		const localCart = localStorage.getItem(CART_STORE_LOCAL);
		if (cart.length === 0 && localCart !== null && localCart !== '[]') {
			dispatch(toCartAction.setCart({ prod: JSON.parse(localCart) }));
		}
		refInit.current = true;
	}, []);

	return {
		onAddItem,
		onSubItem,
		onRemoveItem,
		onToggleCart,
		cart,
		counter,
		isOpen,
		totalPrice,
		CART_STORE_LOCAL: CART_STORE_LOCAL,
	};
};
