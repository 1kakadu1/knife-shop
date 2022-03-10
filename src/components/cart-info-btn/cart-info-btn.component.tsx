import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toCartAction } from '../../store/reducer/cart/cart.reducer';
import { toCartSelector } from '../../store/reducer/cart/cart.selector';
import { CartBtn } from '../buttons/cart-btn/cart-btn.component';
import { ICartInfoBtnProps } from './cart-info-btn.model';
import './cart-info-btn.scss';

export const CartInfoBtn = ({ showInfo }: ICartInfoBtnProps) => {
	const counter = useSelector(toCartSelector.cartCounter);
	const totalPrice = useSelector(toCartSelector.getTotalPrice());
	const dispatch = useDispatch();
	const onOpen = () => {
		dispatch(toCartAction.toggleCart(true));
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
