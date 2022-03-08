import React from 'react';
import { CartBtn } from '../buttons/cart-btn/cart-btn.component';
import { ICartInfoBtnProps } from './cart-info-btn.model';
import './cart-info-btn.scss';

export const CartInfoBtn = ({ showInfo }: ICartInfoBtnProps) => {
	return (
		<div className="cart-info">
			<CartBtn counter={0} onClick={() => {}} />
			<div
				className={`cart-info__order cart-order ${
					showInfo ? 'cart-order_show-' + showInfo : ''
				}`}
			>
				<div className="cart-order__price">0 р</div>
				<div className="cart-order__btn">Оформить заказ</div>
			</div>
		</div>
	);
};
