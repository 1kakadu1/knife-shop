import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { SliderProduct } from '../../components/section/slider-product/slider-product.component';
import { RoutsPath } from '../../routes/routes';
import { toProductAction } from '../../store/reducer/product/product.reducer';
import { toProductSelector } from '../../store/reducer/product/product.selector';
import { toProductsSelector } from '../../store/reducer/products/products.selector';

export const ProductPage = () => {
	// TODO: FAKE DATA
	const sliderProducts = useSelector(toProductsSelector.productsLimit(0, 6));
	const sliderProductsTop = useSelector(
		toProductsSelector.productsLimit(6, 11)
	);
	// END FAKE DATA
	const { slug = '' } = useParams();
	const productStore = useSelector(toProductsSelector.getProductBySlug(slug));
	const dispatch = useDispatch();
	const product = useSelector(toProductSelector.product);
	const initPage = useRef<boolean>(false);

	useEffect(() => {
		window.scrollTo(0, 0);

		if (productStore) {
			dispatch(toProductAction.setProduct(productStore));
		}

		return () => {
			dispatch(toProductAction.setProduct(undefined));
		};
	}, []);

	useEffect(() => {
		if (initPage.current) {
			window.scrollTo(0, 0);
			dispatch(toProductAction.setProduct(productStore));
		} else {
			initPage.current = true;
		}
	}, [slug]);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{product?.name || productStore?.name || 'Product'}</title>
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
