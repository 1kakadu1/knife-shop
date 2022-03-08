import { SwiperProps } from 'swiper/react';
import { ICardProductData } from '../../ cards/card-product/card-product.model';

export interface ISliderProductProps {
	className?: string;
	slides: ICardProductData[];
	swiperProps?: SwiperProps;
	link?: {
		name: string;
		href: string;
	};
	title?: string;
	autoplay?: boolean;
}
