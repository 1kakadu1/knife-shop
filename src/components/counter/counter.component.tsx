import React from 'react';
import { ICounterProps } from './counter.model';
import './counter.scss';

export const Counter = ({ count, onAdd, onSub }: ICounterProps) => {
	return (
		<div className="counter">
			<button
				className="counter__btn counter__figure counter-sub"
				onClick={onSub}
			>
				-
			</button>
			<div className="counter__count counter__figure">{count}</div>
			<button
				className="counter__btn counter__figure counter-add"
				onClick={onAdd}
			>
				+
			</button>
		</div>
	);
};
