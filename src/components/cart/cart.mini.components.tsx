import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { ButtonDefault } from '../buttons/default/default.component';
import { ICartMiniProps } from './cart.model';
import { CSSTransition } from 'react-transition-group';
import './cart.scss';
import { CartItem } from '../ cards/cart-item/cart-item.component';
import { useCart } from '../../hook/useCart';

const CartMiniComponent = ({
	className = '',
	portal,
	portalID = 'portal-cart',
}: ICartMiniProps) => {
	const {
		totalPrice,
		cart: products,
		onAddItem,
		onSubItem,
		onToggleCart,
		isOpen: open,
	} = useCart();
	const goToCart = () => {};
	const handleClose = () => {
		onToggleCart(false);
	};

	return (
		<CSSTransition in={open} timeout={300} classNames="cart-mini" unmountOnExit>
			<div className={'cart-mini' + className}>
				<button onClick={handleClose} className="cart-mini__close">
					<svg focusable="false" viewBox="0 0 24 24">
						<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
					</svg>
				</button>
				<div className="cart-mini__body">
					<CSSTransition
						in={products.length > 0}
						timeout={300}
						classNames="cart-mini-fade"
						unmountOnExit
					>
						<>
							{products.map((item) => (
								<div className="cart-mini__product" key={item.id}>
									<CartItem item={item} onAdd={onAddItem} onSub={onSubItem} />
								</div>
							))}
						</>
					</CSSTransition>

					<CSSTransition
						in={products.length === 0}
						timeout={300}
						classNames="cart-mini-fade"
						unmountOnExit
					>
						<div className="cart-mini__empty">Пусто</div>
					</CSSTransition>
				</div>
				<div className="cart-mini__footer">
					<ButtonDefault className="cart-mini__btn-cart" onClick={goToCart}>
						<span>В корзину</span>
					</ButtonDefault>
					<div className="cart-mini__total-price">{totalPrice} $</div>
				</div>
			</div>
		</CSSTransition>
	);
};

export const CartMini = ({
	portal,
	portalID = 'portal-cart',
	...props
}: ICartMiniProps) => {
	const portalRef = useRef<HTMLElement | null>();
	const InnerComponent = <CartMiniComponent {...props} />;

	useEffect(() => {
		portalRef.current = document.getElementById(portalID);
	}, []);

	return (
		<>
			{portal && portalRef.current
				? ReactDOM.createPortal(InnerComponent, portalRef.current)
				: InnerComponent}
		</>
	);
};
