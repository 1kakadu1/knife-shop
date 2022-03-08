import React, { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { IconArrowSmallRight } from '../icons/arrow-small-right.icon.component';
import './slide-down.scss';

export const SlideDownCustom = ({
	children,
	title,
	classNameTitle = '',
}: {
	children: JSX.Element;
	title: string;
	classNameTitle?: string;
}) => {
	const [open, setOpen] = useState(true);

	return (
		<div className={'slide-dropdown'}>
			<div
				className={'slide-dropdown__button ' + classNameTitle}
				onClick={() => setOpen(!open)}
			>
				{title}
				<IconArrowSmallRight
					className={`slide-dropdown__icon ${open ? 'open' : ''}`}
				/>
			</div>
			<SlideDown
				className={'pure-menu pure-menu-scrollable slide-dropdown__list'}
				closed={open}
			>
				{children}
			</SlideDown>
		</div>
	);
};
