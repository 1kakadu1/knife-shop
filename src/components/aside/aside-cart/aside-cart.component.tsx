import React from 'react';
import { IAsideProductProps } from './aside-cart.model';
import { Aside } from '../aside.component';
import { Box } from '../../box/box.component';
import { ButtonDefault } from '../../buttons/default/default.component';
import { RoutsPath } from '../../../routes/routes.model';
import { Divider } from '../../divider/divider.component';
import '../aside.scss';
import './aside-cart.scss';
import { useCart } from '../../../hook/useCart';
import { CURRENCY } from '../../../const/setting.const';

export const AsideCart = ({ className = '', ...props }: IAsideProductProps) => {
	const { counter, totalPrice } = useCart();

	return (
		<Aside onClose={props.onClose} open={props.open}>
			<div className={'aside-cart' + className}>
				<Box styles={{ padding: '10px' }}>
					<ButtonDefault link={RoutsPath.order}>Оформить заказ</ButtonDefault>
				</Box>

				<span className="aside-cart__info">
					Доступный способ доставки, а также адрес можно выбрать при оформлении
					заказа
				</span>
				<Divider />
				<Box styles={{ padding: '10px' }}>
					<div className="aside-cart-detail">
						<div className="aside-cart-detail-item">
							<div className="aside-cart-detail-item__title">Ваша корзина</div>
							<div className="aside-cart-detail-item__subtitle">
								{counter} товара
							</div>
						</div>
						<Divider />
						<div className="aside-cart-detail-item">
							<div className="aside-cart-detail-item__title">
								Общая стоимость
							</div>
							<div className="aside-cart-detail-item__price">
								{totalPrice} {CURRENCY}
							</div>
						</div>
					</div>
				</Box>
				<Box styles={{ padding: '6px' }} />
			</div>
		</Aside>
	);
};
