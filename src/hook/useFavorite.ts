import { useDispatch, useSelector } from 'react-redux';
import { IFavoriteData } from '../store/reducer/favorite/favorite.model';
import { toFavoriteAction } from '../store/reducer/favorite/favorite.reducer';
import { toFavoriteSelector } from '../store/reducer/favorite/favorite.selector';

export const useFavorite = () => {
	const dispatch = useDispatch();
	const onToggleFavorite = (product: IFavoriteData, size: string) =>
		dispatch(toFavoriteAction.toggleFavorite({ product, size }));
	const favorites = useSelector(toFavoriteSelector.favorites);

	return {
		onToggleFavorite,
		favorites,
	};
};
