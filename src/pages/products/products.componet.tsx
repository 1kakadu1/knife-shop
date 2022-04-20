import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { CardProduct } from '../../components/ cards/card-product/card-product.component';
import { AsideProduct } from '../../components/aside/aside-product/aside-product.component';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs.component';
import { ContainerAside } from '../../components/container-aside/container-aside.component';
import { Container } from '../../components/container/container.component';
import { Footer } from '../../components/footer/footer.component';
import { Header } from '../../components/header/header.component';
import { SelectDefault } from '../../components/inputs/selsect/select.component';
import { SectionRow } from '../../components/section/section-row/section-row.component';
import { toProductsSelector } from '../../store/reducer/products/products.selector';
import { sortMock } from './products.mock';
import './products.scss';
import { useFilterUrl } from '../../hook/useFilterUrl.hook';
import {
	IProductsFilter,
	TypeOrder,
} from '../../store/reducer/products/products.model';
import { Pagination } from '../../components/pagination/pagination.component';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { RoutsPath } from '../../routes/routes.model';
import { useProduct } from '../../hook/useProduct';
import { useFavorite } from '../../hook/useFavorite';
import { useCart } from '../../hook/useCart';

export const ProductsPage = () => {
	const { page = 1 } = useParams();
	const navigate = useNavigate();
	const { search } = useLocation();

	const products = useSelector(
		toProductsSelector.productsFilter((Number(page) - 1) * 6)
	);
	const { onChangeRating, total, filters, onChangeFilter } = useProduct();
	const { onAddItem } = useCart();
	const { favorites, onToggleFavorite } = useFavorite();

	const { updateUrl } = useFilterUrl<IProductsFilter>(filters, {
		setFilter: onChangeFilter,
		offUpdate: true,
		unMountFilter: () => onChangeFilter({}),
	});

	const onSort = (value: TypeOrder) => {
		onChangeFilter({ ...filters, order: value });
		updateUrl({ ...filters, order: value });
	};

	const onChangePagination = (page: number) => {
		navigate(RoutsPath.products + '/' + page + search);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Products</title>
			</Helmet>
			<Header />
			<Container>
				<div className="products">
					<div className="h1-title products_title">Разделочные ножи</div>
					<div className="products__header">
						<div className="products__breadcrumbs">
							<Breadcrumbs links={[{ name: 'Разделочные ножи' }]} />
						</div>
						<div className="products__actions">
							<SelectDefault
								id="sort"
								value={filters['order'] || sortMock[0].value}
								onChange={onSort}
								options={sortMock}
								placeholder="Сортировать по:"
							/>
						</div>
					</div>

					<ContainerAside
						aside={<AsideProduct />}
						content={
							<SectionRow container={false}>
								{products.map((item) => (
									<div key={item.id} className="section-row__item-3">
										<CardProduct
											data={item}
											onAdd={onAddItem}
											onChangeRating={onChangeRating}
											onChangeFavorite={onToggleFavorite}
											isFavorite={!!favorites.find((x) => x.id === item.id)}
										/>
									</div>
								))}
							</SectionRow>
						}
						sticky
						shadow
					/>
					<div className="page-pagination-container">
						<Pagination
							count={total}
							page={Number(page)}
							onChange={onChangePagination}
							search={search}
						/>
					</div>
				</div>
			</Container>

			<Footer />
		</div>
	);
};
