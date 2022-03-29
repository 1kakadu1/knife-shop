import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { CardProductInfo } from '../../components/ cards/card-product-info/card-product-info.component';
import { CardWrapper } from '../../components/ cards/card-wrapper/card-wrapper.component';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { GallerySlider } from '../../components/gallery-slider/gallery-slider.component';
import { Header } from '../../components/header/header.component';
import { SliderProduct } from '../../components/section/slider-product/slider-product.component';
import { useCart } from '../../hook/useCart';
import { useFavorite } from '../../hook/useFavorite';
import { RoutsPath } from '../../routes/routes';
import { toProductAction } from '../../store/reducer/product/product.reducer';
import { toProductSelector } from '../../store/reducer/product/product.selector';
import { toProductsSelector } from '../../store/reducer/products/products.selector';
import './product.scss';

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
	const { onAddItem, onSubItem, cart } = useCart();
	const { onToggleFavorite, favorites } = useFavorite();

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
	const productName = product?.name || productStore?.name || 'Product';
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{productName}</title>
			</Helmet>
			<Header />
			{product ? (
				<Container>
					<Box styles={{ padding: '30px 0px' }}>
						<Breadcrumbs
							links={[
								{
									name: productStore?.category[0].name || '',
									href: RoutsPath.products,
								},
								{ name: productName },
							]}
						/>
					</Box>

					<div className="product__info">
						<div className="product__info-left">
							{product.gallery ? (
								<GallerySlider items={product.gallery} />
							) : (
								<img
									src={product.preview}
									alt=""
									className="product__preview"
								/>
							)}
						</div>
						<div className="product__info-right">
							<CardProductInfo
								product={product}
								onChangeRating={() => void 0}
								onAddCart={onAddItem}
								onSubCart={onSubItem}
								onChangeFavorite={onToggleFavorite}
								isFavorite={!!favorites.find((x) => x.id === product.id)}
								currentCart={cart.find(
									(x) => x.id === product.id && x.productSize === product.size
								)}
							/>
						</div>
					</div>
				</Container>
			) : (
				'Product not found'
			)}

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
