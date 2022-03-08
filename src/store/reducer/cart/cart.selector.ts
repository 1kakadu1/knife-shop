import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../utils/store.utils';
import { CART_KEY } from './cart.const';
import { ICart } from './cart.model';

export const cartSelector = createFeatureSelector<ICart>(CART_KEY);

const isOpen = createSelector(cartSelector, ({ isOpen }) => isOpen);

const getCartProduct = (id: string) =>
	createSelector(cartSelector, ({ products }) =>
		products.filter((x) => x.id === id)
	);

const getTotalPrice = (id: string) =>
	createSelector(cartSelector, ({ products }) => {
		let totalPrice = 0;
		products.forEach((element) => {
			totalPrice +=
				typeof element.price === 'string'
					? parseInt(element.price)
					: element.price;
		});
		return totalPrice;
	});

const cart = createSelector(cartSelector, ({ products }) => products);

export const toCartSelector = { getCartProduct, cart, isOpen, getTotalPrice };
