import { useDispatch, useSelector } from 'react-redux';
import { IProductsFilter } from '../store/reducer/products/products.model';
import { toProductsAction } from '../store/reducer/products/products.reducer';
import { toProductsSelector } from '../store/reducer/products/products.selector';

export const useProduct = () => {
	const dispatch = useDispatch();

	const onChangeRating = (id: string, size: string, stars: number) =>
		dispatch(toProductsAction.productsStars({ id, size, stars }));
	const onChangeFilter = (value: IProductsFilter) =>
		dispatch(toProductsAction.productsFilter(value));

	const products = useSelector(toProductsSelector.products);
	const total = useSelector(toProductsSelector.total);
	const filters = useSelector(toProductsSelector.filter);
	const error = useSelector(toProductsSelector.error);
	const isLoading = useSelector(toProductsSelector.isLoading);

	return {
		onChangeRating,
		onChangeFilter,
		products,
		total,
		filters,
		error,
		isLoading,
	};
};
