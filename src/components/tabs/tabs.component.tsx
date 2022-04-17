import React, { useContext, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ITabs, ITabsContainer, ITabsNavigation } from './tabs.model';
import { useDidUpdateEffect } from '../../hook/useDidUpdateEffect';
import { EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './tabs.scss';
import TabsContext from './tabs.context';

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
				{labels.map((item, index) => (
					<button
						key={'tab-' + index}
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

export const Tabs = ({
	className = '',
	tab,
	items,
	swiperProps,
	update,
}: ITabs) => {
	const ref = useRef<any | null>(null);
	const { setTabsRef } = useContext(TabsContext);
	useDidUpdateEffect(() => {
		ref && ref.current && ref.current.slideTo(tab);
		if (update) {
			setTimeout(() => {
				ref && ref.current && ref.current.update();
			}, 300);
		}
	}, [tab]);

	return (
		<div className={'tabs-list ' + className}>
			<Swiper
				className="tabs-swiper"
				onSwiper={(swiper) => {
					setTabsRef && setTabsRef(swiper);
					ref.current = swiper;
				}}
				effect="fade"
				modules={[EffectFade]}
				autoHeight={true}
				updateOnWindowResize={true}
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
	tab,
	onChangeTab,
	update,
}: ITabsContainer) => {
	const [tabState, setTabState] = useState(init || 0);
	const tabActive = tab !== undefined ? tab : tabState;

	return (
		<div className={'tabs-container ' + className}>
			<TabsNavigation
				tab={tabActive}
				onChange={tab !== undefined && onChangeTab ? onChangeTab : setTabState}
				labels={labels}
			/>
			<Tabs tab={tabActive} items={items} update={update} />
		</div>
	);
};
