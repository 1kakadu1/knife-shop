import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ITabs, ITabsContainer, ITabsNavigation } from './tabs.model';
import { useDidUpdateEffect } from '../../hook/useDidUpdateEffect';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './tabs.scss';

export const TabsNavigation = ({
	className = '',
	labels,
	onChange,
	tab,
}: ITabsNavigation) => {
	const handlerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const value = e.currentTarget.getAttribute('data-tab') || '0';
		onChange(parseInt(value));
	};

	return (
		<div className={'tabs-container ' + className}>
			<div className="tabs-navigation">
				{labels.map((item) => (
					<button
						className={`tabs-navigation__item ${
							tab === item.id ? 'active' : ''
						}`}
						onClick={handlerClick}
						data-tab={item.id}
					>
						{item.label}
					</button>
				))}
			</div>
		</div>
	);
};

export const Tabs = ({ className = '', tab, items, swiperProps }: ITabs) => {
	const ref = useRef<any | null>(null);
	useDidUpdateEffect(() => {
		ref && ref.current && ref.current.slideTo(tab);
	}, [tab]);

	return (
		<div className={'tabs-list ' + className}>
			<Swiper
				className="tabs-swiper"
				onSwiper={(swiper) => (ref.current = swiper)}
				effect="fade"
				modules={[EffectFade]}
				autoHeight={true}
				{...swiperProps}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<div className="tabs-list__item tabs-swiper-item">{item}</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export const TabsContainer = ({
	labels,
	items,
	className = '',
	init,
}: ITabsContainer) => {
	const [tab, setTab] = useState(init || 0);

	return (
		<div className={'tabs-container ' + className}>
			<TabsNavigation tab={tab} onChange={setTab} labels={labels} />
			<Tabs tab={tab} items={items} />
		</div>
	);
};
