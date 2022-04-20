import React from 'react';
import { CartItem } from '../ cards/cart-item/cart-item.component';
import { useCart } from '../../hook/useCart';
import { Divider } from '../divider/divider.component';
import { ICartProps } from './cart.model';
import './cart.scss';

export const CartFull = ({ className = '' }: ICartProps) => {
	const { cart, counter, onAddItem, onSubItem, onRemoveItem, totalPrice } =
		useCart();

	return (
		<div className={'cart-full' + className}>
			<div className="cart-full-header">
				<div className="cart-full-header__title">Корзина</div>
				<div className="cart-full-header__count">{counter}</div>
			</div>
			<div className="cart-full-body">
				<Divider />
				<ul className="cart-full-list">
					{cart.map((item) => (
						<li className="cart-full-list__item">
							<CartItem
								key={item.id + '-' + item.productSize}
								item={item}
								onAdd={onAddItem}
								onSub={onSubItem}
								onRemove={onRemoveItem}
							/>
							<Divider />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
