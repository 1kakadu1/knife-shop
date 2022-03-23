import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IFavoriteData } from '../store/reducer/favorite/favorite.model';
import { toFavoriteAction } from '../store/reducer/favorite/favorite.reducer';
import { toFavoriteSelector } from '../store/reducer/favorite/favorite.selector';

const FAVORITE_STORE_LOCAL = 'favorite';

export const useFavorite = () => {
	const dispatch = useDispatch();
	const onToggleFavorite = (product: IFavoriteData, size: string) =>
		dispatch(toFavoriteAction.toggleFavorite({ product, size }));
	const favorites = useSelector(toFavoriteSelector.favorites);

	const refInit = useRef<boolean>(false);
	useEffect(() => {
		if (refInit.current) {
			localStorage.setItem(FAVORITE_STORE_LOCAL, JSON.stringify(favorites));
		}
	}, [favorites]);

	useEffect(() => {
		const localCart = localStorage.getItem(FAVORITE_STORE_LOCAL);
		if (
			FAVORITE_STORE_LOCAL.length === 0 &&
			localCart !== null &&
			localCart !== '[]'
		) {
			dispatch(toFavoriteAction.setFavorite(JSON.parse(localCart)));
		}
		refInit.current = true;
	}, []);

	return {
		onToggleFavorite,
		favorites,
		FAVORITE_STORE_LOCAL: FAVORITE_STORE_LOCAL,
	};
};
