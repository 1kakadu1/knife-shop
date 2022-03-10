import React from 'react';
import { ICartProps } from './cart.model';
import './cart.scss';

export const CartFull = ({ className = '' }: ICartProps) => {
	return <div className={'cart-full' + className}></div>;
};
