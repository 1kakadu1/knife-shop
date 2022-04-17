import { SwiperProps } from 'swiper/react';

export interface ITabs {
	swiperProps?: SwiperProps;
	className?: string;
	items: JSX.Element[];
	tab: number;
	update?: boolean;
}

export interface ITabsNavigation {
	className?: string;
	labels: { label: string; id: number }[];
	onChange: (tab: number) => void;
	tab: number;
}

export interface ITabsContainer {
	className?: string;
	labels: { label: string; id: number }[];
	items: JSX.Element[];
	init?: number;
	update?: boolean;
	tab?: number;
	onChangeTab?: (tab: number) => void;
}
