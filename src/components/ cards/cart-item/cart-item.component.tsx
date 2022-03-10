import React from 'react';
import { ICartItemProps } from './cart-item.model';
import './cart-item.scss';

export const CartItem = ({
	item,
	onAdd,
	onSub,
	className = '',
}: ICartItemProps) => {
	return (
		<div className={'cart-item' + className}>
			<img src={item.preview} alt="" className="cart-item__preview" />
			<div className="cart-item__name">{item.title}</div>
			<div className="cart-item__info">
				<div className="cart-item__price">{item.price} $</div>
				<div className="cart-item__size">{item.productSize}</div>
			</div>

			<div className="cart-item__actions">
				<div className="counter">
					<button
						onClick={() => onSub(item, item.productSize)}
						className="counter-btn counter-btn__sub"
					>
						-
					</button>
					<div className="counter__number">{item.count}</div>
					<button
						onClick={() => onAdd(item, item.productSize)}
						className="counter-btn counter-btn__add"
					>
						+
					</button>
				</div>
			</div>
		</div>
	);
};
