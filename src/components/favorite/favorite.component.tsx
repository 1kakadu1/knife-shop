import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IFavoriteProps, IFavoriteModalProps } from './favorite.model';
import { CSSTransition } from 'react-transition-group';
import './favorite.scss';
import { toFavoriteSelector } from '../../store/reducer/favorite/favorite.selector';
import { toFavoriteAction } from '../../store/reducer/favorite/favorite.reducer';
import { IconArrowLeft } from '../icons/arrow-left.icon.component';
import { CartItem } from '../ cards/cart-item/cart-item.component';

const Favorite = ({
	open,
	onClose,
	favorites,
	className = '',
}: IFavoriteProps) => {
	const dispatch = useDispatch();
	const onRemove = (id: string, size: string) =>
		dispatch(toFavoriteAction.remove({ id, size }));
	return (
		<CSSTransition
			in={open}
			timeout={300}
			classNames="favorite-fade"
			unmountOnExit
		>
			<div className={`favorite ${className}`}>
				<div className="favorite__header">
					<div className="favorite__title">Избранное</div>
					<div className="favorite__back" onClick={onClose}>
						<IconArrowLeft className="favorite__back-icon" />
					</div>
				</div>
				<div className="favorite__body">
					<div className="favorite__list">
						{favorites.map((item) => (
							<div className="favorite__list-item" key={item.id}>
								<CartItem item={item} onRemove={onRemove} />
							</div>
						))}
					</div>

					<div
						className={`favorite__empty${
							favorites.length === 0 ? ' show' : ''
						}`}
					>
						У Вас еще нет товаров в избранном
					</div>
				</div>
			</div>
		</CSSTransition>
	);
};

const FavoriteOverlay = ({
	onClose,
	open,
}: {
	onClose: () => void;
	open: boolean;
}) => {
	return (
		<CSSTransition
			in={open}
			timeout={300}
			classNames="favorite-overlay-fade"
			unmountOnExit
		>
			<div className="favorite-overlay" onClick={onClose} />
		</CSSTransition>
	);
};

export const FavoriteModal = ({
	portalID = 'portal',
	...props
}: IFavoriteModalProps) => {
	const dispatch = useDispatch();
	const open = useSelector(toFavoriteSelector.isOpen);
	const favorites = useSelector(toFavoriteSelector.favorites);

	const onClose = () => {
		dispatch(toFavoriteAction.toggleWindow(false));
	};

	const portalRef = useRef<HTMLElement | null>();
	const bodyRef = useRef<HTMLElement | null>();

	const InnerComponent = (
		<>
			<Favorite
				open={open}
				favorites={favorites}
				onClose={onClose}
				{...props}
			/>
			<FavoriteOverlay open={open} onClose={onClose} />
		</>
	);

	useEffect(() => {
		portalRef.current = document.getElementById(portalID);
		bodyRef.current = document.querySelector('body');
		const items = localStorage.getItem('favorites');

		if (items !== null) {
			dispatch(toFavoriteAction.setFavorite(JSON.parse(items)));
		}

		return () => {
			if (bodyRef.current) bodyRef.current.style.overflow = '';
		};
	}, []);

	useEffect(() => {
		if (bodyRef.current)
			if (open) {
				bodyRef.current.style.overflow = 'hidden';
			} else {
				bodyRef.current.style.overflow = '';
			}
	}, [open]);

	useEffect(() => {
		if (favorites.length === 0) {
			localStorage.removeItem('favorites');
		} else {
			localStorage.setItem('favorites', JSON.stringify(favorites));
		}
	}, [favorites]);

	return (
		<>
			{props.portal && portalRef.current
				? ReactDOM.createPortal(InnerComponent, portalRef.current)
				: InnerComponent}
		</>
	);
};
