import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ISliderProductProps } from './slider-product.model';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './slider-product.scss';
import { CardProduct } from '../../ cards/card-product/card-product.component';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toProductsAction } from '../../../store/reducer/products/products.reducer';
import { toCartAction } from '../../../store/reducer/cart/cart.reducer';
import { ICartItem } from '../../../store/reducer/cart/cart.model';
import { toFavoriteAction } from '../../../store/reducer/favorite/favorite.reducer';
import { toFavoriteSelector } from '../../../store/reducer/favorite/favorite.selector';
import { IFavoriteData } from '../../../store/reducer/favorite/favorite.model';

export const swiperDefaultConfig = {
	spaceBetween: 20,
	autoHeight: true,
	slidesPerView: 4,
	modules: [Pagination, Autoplay],
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView: 4,
		},
	},
};

export const SliderProduct = ({
	className = '',
	title,
	link,
	slides,
	autoplay,
	swiperProps = { ...swiperDefaultConfig },
}: ISliderProductProps) => {
	const dispatch = useDispatch();
	const onAddCart = (product: ICartItem, size: string) =>
		dispatch(toCartAction.add({ size, prod: product }));
	const onChangeRating = (id: string, size: string, stars: number) =>
		dispatch(toProductsAction.productsStars({ id, size, stars }));
	const onToggleFavorite = (product: IFavoriteData, size: string) =>
		dispatch(toFavoriteAction.toggleFavorite({ product, size }));
	const favorites = useSelector(toFavoriteSelector.favorites);

	const configSwiper = { ...swiperProps };
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return (
				'<span class="swiper-slider-products__pagination ' +
				className +
				'">' +
				(index + 1) +
				'</span>'
			);
		},
	};

	configSwiper.pagination = pagination;
	configSwiper.autoplay = autoplay
		? { delay: 2500, disableOnInteraction: false }
		: undefined;

	return (
		<div className={'slider-products ' + className}>
			<div
				className={`slider-products__header ${
					title && link ? '' : 'padding_null'
				}`}
			>
				{title && <h1 className="h1-title">{title}</h1>}

				{link && (
					<Link className="h3-title slider-products__link" to={link.href}>
						{link.name}
						<svg
							width="10"
							height="16"
							viewBox="0 0 10 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.2309 8.67584L2.00808 15.4644C1.54862 15.8965 0.80369 15.8965 0.344454 15.4644C-0.114818 15.0327 -0.114818 14.3326 0.344454 13.901L6.73553 7.89411L0.34464 1.88747C-0.114632 1.45562 -0.114632 0.75556 0.34464 0.323886C0.803913 -0.107962 1.54881 -0.107962 2.00827 0.323886L9.23108 7.11256C9.46072 7.32851 9.57541 7.61122 9.57541 7.89408C9.57541 8.17707 9.4605 8.46 9.2309 8.67584Z"
								fill="#E8AA31"
							/>
						</svg>
					</Link>
				)}
			</div>

			<Swiper className="swiper-slider-products" {...configSwiper}>
				{slides.map((item) => (
					<SwiperSlide key={'SwiperSlide-' + item.id}>
						<CardProduct
							data={{ ...item }}
							onAdd={onAddCart}
							onChangeRating={onChangeRating}
							onChangeFavorite={onToggleFavorite}
							isFavorite={!!favorites.find((x) => x.id === item.id)}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
