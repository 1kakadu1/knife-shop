import React from 'react';
import { IconCart } from '../../icons/cart.icon.component';
import { ICartBtnProps } from './cart-btn.model';
import './cart-btn.scss';

export const CartBtn = ({ counter, onClick }: ICartBtnProps) => {
	return (
		<div className="cart-btn cart-btn_relative" onClick={onClick}>
			<div className="badge cart-btn__badge">{counter}</div>
			<IconCart className="cart-btn__icon" />
		</div>
	);
};
