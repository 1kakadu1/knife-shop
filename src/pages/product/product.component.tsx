import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { SliderProduct } from '../../components/section/slider-product/slider-product.component';
import { RoutsPath } from '../../routes/routes';
import { toProductsSelector } from '../../store/reducer/products/products.selector';

export const ProductPage = () => {
	const sliderProducts = useSelector(toProductsSelector.productsLimit(0, 6));
	const sliderProductsTop = useSelector(
		toProductsSelector.productsLimit(6, 11)
	);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Product</title>
			</Helmet>
			<Header />
			<Container paddingNull>
				<SliderProduct
					slides={sliderProducts}
					title="Рекомендуем"
					autoplay
					offAddCart
				/>
			</Container>
			<Container paddingNull>
				<SliderProduct
					slides={sliderProductsTop}
					title="Похожие товары"
					autoplay
					offAddCart
				/>
			</Container>
			<Footer />
		</div>
	);
};
