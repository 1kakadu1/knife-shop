import React from 'react';
import { useCart } from '../../hook/useCart';
import { CartBtn } from '../buttons/cart-btn/cart-btn.component';
import { ICartInfoBtnProps } from './cart-info-btn.model';
import './cart-info-btn.scss';

export const CartInfoBtn = ({ showInfo }: ICartInfoBtnProps) => {
	const { onToggleCart, counter, totalPrice } = useCart();
	const onOpen = () => {
		onToggleCart(true);
	};

	return (
		<div className="cart-info">
			<CartBtn counter={counter} onClick={onOpen} />
			<div
				className={`cart-info__order cart-order ${
					showInfo ? 'cart-order_show-' + showInfo : ''
				}`}
			>
				<div className="cart-order__price">{totalPrice} $</div>
				<div className="cart-order__btn">Оформить заказ</div>
			</div>
		</div>
	);
};
