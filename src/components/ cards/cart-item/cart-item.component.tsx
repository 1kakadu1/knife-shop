import React from 'react';
import { ICartItemProps } from './cart-item.model';
import './cart-item.scss';

export const CartItem = ({
	item,
	onAdd,
	onSub,
	className = '',
	onRemove,
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
				{onAdd && onSub && (
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
				)}
				{onRemove && (
					<button
						onClick={() => onRemove(item.id, item.productSize)}
						className="btn-close"
					>
						<svg focusable="false" viewBox="0 0 24 24">
							<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
						</svg>
					</button>
				)}
			</div>
		</div>
	);
};
