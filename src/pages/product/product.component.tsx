import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CardProductInfo } from '../../components/ cards/card-product-info/card-product-info.component';
import { CardWrapper } from '../../components/ cards/card-wrapper/card-wrapper.component';
import { Box } from '../../components/box/box.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { GallerySlider } from '../../components/gallery-slider/gallery-slider.component';
import { Header } from '../../components/header/header.component';
import { Reviews } from '../../components/reviews/reviews.component';
import { SliderProduct } from '../../components/section/slider-product/slider-product.component';
import { TabsContainer } from '../../components/tabs/tabs.component';
import TabsContext from '../../components/tabs/tabs.context';
import { TextItems } from '../../components/text-item/text-item.component';
import { useCart } from '../../hook/useCart';
import { useFavorite } from '../../hook/useFavorite';
import { RoutsPath } from '../../routes/routes.model';
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
	const [refTabs, setTabsRef] = useState<any | null>(null);
	const [tab, setTab] = useState(0);

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
		setTab(0);
		if (initPage.current) {
			window.scrollTo(0, 0);
			dispatch(toProductAction.setProduct(productStore));
		} else {
			initPage.current = true;
		}
	}, [slug]);

	const productName = product?.name || productStore?.name || 'Product';

	const tabItems = [
		product ? (
			<div className="product__base-info">
				{product.desc === '' ? '???????????????? ??????????????????????' : product.desc}
			</div>
		) : (
			<div />
		),
		product ? (
			<div className="product__base-info product-row">
				{product.??haracteristic
					? product.??haracteristic.map((item) => (
							<div className="product-row__item" key={item.label}>
								<TextItems title={item.label} items={item.items} />
							</div>
					  ))
					: '??????! ??????-???? ?????????? ???????????????? ????????????????????????????'}
			</div>
		) : (
			<div />
		),
		product ? (
			<div className="product__base-info">
				<Reviews reviews={product.reviews} swiperRef={refTabs} />
			</div>
		) : (
			<div />
		),
	];

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>{productName}</title>
			</Helmet>
			<Header />
			<TabsContext.Provider
				value={{
					tabsRef: refTabs,
					setTabsRef,
				}}
			>
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
						<div className="product__tabs">
							<CardWrapper>
								<TabsContainer
									labels={[
										{ label: '????????????????', id: 0 },
										{ label: '????????????????????????????', id: 1 },
										{ label: '????????????', id: 2 },
									]}
									items={tabItems}
									tab={tab}
									onChangeTab={setTab}
									update
								/>
							</CardWrapper>
						</div>
					</Container>
				) : (
					'Product not found'
				)}

				<Container paddingNull>
					<SliderProduct
						slides={sliderProducts}
						title="??????????????????????"
						autoplay
						offAddCart
					/>
				</Container>
				<Container paddingNull>
					<SliderProduct
						slides={sliderProductsTop}
						title="?????????????? ????????????"
						autoplay
						offAddCart
					/>
				</Container>
				<Footer />
			</TabsContext.Provider>
		</div>
	);
};
