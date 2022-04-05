import React from 'react';
import './text-item.scss';

export const TextItem = ({
	label,
	value,
	className = '',
}: {
	label: string;
	value: string | number;
	className?: string;
}) => {
	return (
		<div className={'text-item ' + className}>
			<div className="text-item__label">{label}</div>
			<div className="text-item__value">{value}</div>
		</div>
	);
};

export const TextItems = ({
	className = '',
	items,
	title,
}: {
	title: string;
	items: { label: string; value: string | number }[];
	className?: string;
}) => {
	return (
		<div className={'text-items-container ' + className}>
			<div className="text-items__label">{title}</div>
			<ul className="text-items-list">
				{items.map(({ label, value }, index) => (
					<li className="text-items-list__item" key={index}>
						<TextItem label={label} value={value} />
					</li>
				))}
			</ul>
		</div>
	);
};
