import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { CardPost } from '../components/ cards/card-post/card-post.component';
import { cardPostsMock } from '../components/ cards/card-post/card-post.mock';
import { Container } from '../components/container/container.component';
import { Footer } from '../components/footer/footer.component';
import { Header } from '../components/header/header.component';
import { BackgroundInfo } from '../components/section/bg-info/bg-info.component';
import { CatalogPopular } from '../components/section/catalog-popular/catalog-popular.component';
import {
	mockCatalogPopular,
	mockCatalogTop,
} from '../components/section/catalog-popular/catalog-popular.mock';
import { IconsInformation } from '../components/section/icons-information/icons-information.component';
import { iconsInformationMock } from '../components/section/icons-information/icons-information.mock';
import { SectionRow } from '../components/section/section-row/section-row.component';
import { SliderInfo } from '../components/section/slider-info/slider-info.component';
import { sliderInfoMock } from '../components/section/slider-info/slider-info.mock';
import {
	SliderProduct,
	swiperDefaultConfig,
} from '../components/section/slider-product/slider-product.component';
import { TextInfo } from '../components/section/text-info/text-info.component';
import { RoutsPath } from '../routes/routes';
import { toProductsSelector } from '../store/reducer/products/products.selector';

export const HomePage = () => {
	const sliderProducts = useSelector(toProductsSelector.productsLimit(0, 6));
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Home</title>
			</Helmet>
			<Header />
			<SliderInfo slides={sliderInfoMock}>
				<IconsInformation data={iconsInformationMock} />
			</SliderInfo>

			<CatalogPopular data={mockCatalogPopular} />

			<Container paddingNull>
				<SliderProduct
					slides={sliderProducts}
					title="Хиты продаж"
					link={{
						name: 'Перейти в каталог',
						href: RoutsPath.products + '/1',
					}}
					autoplay
				/>
			</Container>

			<BackgroundInfo
				link={{
					name: 'Больше новинок',
					href: '#',
				}}
				title="Новинки"
				desc="Добро пожаловать на официальный сайт «SITE»! В нашем магазине представлен наиболее широкий выбор Город ножей от городских Оружейных Фабрик и компаний, мы являемся официальными поставщиками."
			>
				<SliderProduct
					slides={sliderProducts}
					swiperProps={{
						...swiperDefaultConfig,
						breakpoints: {
							...swiperDefaultConfig.breakpoints,
							600: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 1,
							},
							1200: {
								slidesPerView: 2,
							},
							1400: {
								slidesPerView: 3,
							},
						},
					}}
				/>
			</BackgroundInfo>

			<Container paddingNull>
				<SliderProduct
					slides={sliderProducts}
					title="Топ продаж"
					link={{
						name: 'Перейти в каталог',
						href: RoutsPath.products + '/1',
					}}
				/>
			</Container>

			<SectionRow className="post-news">
				{cardPostsMock.map((item) => (
					<div className="section-row__item" key={item.id}>
						<CardPost data={item} />
					</div>
				))}
			</SectionRow>

			<CatalogPopular prefixKey="popular-top" data={mockCatalogTop} items={2} />

			<Container paddingNull>
				<SliderProduct
					slides={sliderProducts}
					title="Фонари"
					link={{
						name: 'Перейти в каталог',
						href: RoutsPath.products + '/1',
					}}
					autoplay
				/>
			</Container>

			<TextInfo
				text="Наш интернет-магазин 'NAME' предлагает Вам ножи очень высокого качества из города оружейников - City. Ножи известны и популярны среди потребителей как на СНГ рынке, так и за рубежом: ножи охотничьи, хозяйственные, туристические, рыбацкие, складные и метательные. Нож City - это идеальный друг и товарищ в повседневной жизни и в экстремальных ситуациях. На многую продукцию распространяется гарантия до 10 лет - это один из главных показателей качества. Для Вас на нашем сайте 'site' предложен огромный ассортимент ножей. Наши менеджеры помогут определиться и подобрать самый лучший  нож, ориентируясь на Ваши пожелания."
				title="Магазинные ножи интернет-магазин 'NAME'"
			/>
			<Footer />
		</div>
	);
};
