import React, { useRef } from 'react';
import { Container } from '../../container/container.component';
import { ISliderInfoProps } from './slider-info.model';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { ButtonDefault } from '../../buttons/default/default.component';

import 'swiper/css';
import 'swiper/css/pagination';
import './slider-info.scss';
import { CircleTooltipImage } from '../../circle-tooltip-image/circle-tooltip-image';
import { useWindowSize, WindowBreakpoints } from '../../../utils/useWindowSize';

export const SliderInfo = ({ children, slides }: ISliderInfoProps) => {
	const refCounter = useRef<HTMLSpanElement | null>(null);
	const { breakpoint } = useWindowSize();
	const isShowTooltip =
		breakpoint !== WindowBreakpoints.lg &&
		breakpoint !== WindowBreakpoints.sm &&
		breakpoint !== WindowBreakpoints.xs;

	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return (
				'<span class="swiper-slider-info__pagination ' +
				className +
				'">' +
				(index + 1) +
				'</span>'
			);
		},
	};

	return (
		<div className="slider-info">
			<Container>
				<Swiper
					className="swiper-slider-info"
					spaceBetween={50}
					autoHeight={true}
					slidesPerView={1}
					onSlideChange={(swiper) => {
						if (refCounter.current && refCounter.current.textContent)
							refCounter.current.textContent = (
								swiper.activeIndex + 1
							).toString();
					}}
					pagination={pagination}
					modules={[Pagination]}
					onInit={(swiper) => {
						const countCurrent = document.createElement('span');
						countCurrent.textContent = '1';
						countCurrent.classList.add('swiper-slider-counter__current');

						const counter = document.createElement('span');
						counter.textContent = '/' + swiper.slides.length.toString();
						counter.classList.add('swiper-slider-counter__len');

						const counterContainer = document.createElement('div');
						counterContainer.classList.add('swiper-slider-counter');

						counterContainer.appendChild(countCurrent);
						counterContainer.appendChild(counter);
						counterContainer.style.left =
							swiper.slides.length * 18 + swiper.slides.length * 10 + 20 + 'px';

						swiper.el.appendChild(counterContainer);
						refCounter.current = countCurrent;
					}}
				>
					{slides.map((item, index) => (
						<SwiperSlide key={'SwiperSlide-' + index}>
							<div className="swiper-slider-info__item">
								<div className="swiper-slider-info__column">
									<div className="swiper-slider-info__title">{item.title}</div>
									<div className="swiper-slider-info__subtitle">
										{item.subtitle}
									</div>
									<div className="swiper-slider-info__desc">
										{item.desc || ''}
									</div>
									<ButtonDefault
										link={item.link}
										className="swiper-slider-info__link"
									>
										<span>Подробнее</span>
									</ButtonDefault>
								</div>
								<div className="swiper-slider-info__column swiper-slider-info__column-right">
									{item.tooltips && isShowTooltip ? (
										<CircleTooltipImage
											img={item.preview as string}
											tooltips={item.tooltips}
											classImage={'swiper-slider-info__preview'}
										/>
									) : (
										<img
											src={item.preview as string}
											alt=""
											className={'swiper-slider-info__preview'}
										/>
									)}
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="slider-info__bottom-content">{children}</div>
			</Container>
		</div>
	);
};
