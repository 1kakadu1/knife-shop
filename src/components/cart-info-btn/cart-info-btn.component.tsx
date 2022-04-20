import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../hook/useCart';
import { RoutsPath } from '../../routes/routes.model';
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
				<Link className="cart-order__btn" to={RoutsPath.cart}>
					Оформить заказ
				</Link>
			</div>
		</div>
	);
};
