import React, { useEffect, useState } from 'react';
import { ButtonDefault } from '../../buttons/default/default.component';
import { CardWrapper } from '../card-wrapper/card-wrapper.component';
import { ICardProduct } from './card-product.model';
import { StarsRating } from 'stars-rating-react-hooks';
import './card-product.scss';
import { IconCompare } from '../../icons/compare.icon.component';
import { IconFavorite } from '../../icons/favorite.icon.component';
import starActive from '../../../assets/images/star-active.png';
import starEmpty from '../../../assets/images/star-empty.png';
import starHalf from '../../../assets/images/star-half.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toCartSelector } from '../../../store/reducer/cart/cart.selector';

export const CardProduct = ({
	data,
	className = '',
	onAdd,
	onChangeRating,
}: ICardProduct) => {
	const productCart = useSelector(
		toCartSelector.getCartProductByID(data.id, data.size)
	);
	const [selecting, setSelecting] = useState<{
		isSelecting: boolean;
		selectingValue: number;
	} | null>(null);

	const config = {
		totalStars: 5,
		initialSelectedValue: data.userStars,
		renderFull: <img alt="star" src={starActive} />,
		renderEmpty: <img alt="star" src={starEmpty} />,
		renderHalf: <img alt="star" src={starHalf} />,
	};

	return (
		<CardWrapper paddingNull>
			<div className={'card-product ' + className}>
				<Link className="card-product__preview-container" to={data.href}>
					<img src={data.preview} alt="" className="card-product__preview" />
					<div
						className={`card-product__counter${
							productCart && productCart.count
								? ' card-product_counter-active'
								: ''
						}`}
					>
						{productCart?.count || 0}
					</div>
				</Link>

				<div className="card-product__header card-product_padding">
					<Link to={data.href}>
						<h3 className="card-product__name card-product__title">
							{data.name}
						</h3>
					</Link>

					<div className="card-product__row">
						<div className="card-product__row-item item_bold">{data.size}</div>
						<div className="card-product__row-item item_bold">
							{data.category.join(', ')}
						</div>
					</div>
					<div className="card-product__row">
						<div className="card-product__row-item item_star">
							<StarsRating
								onStarsRated={(value: number) => {
									onChangeRating(data.id, data.size, value);
								}}
								onSelecting={(isSelecting: boolean, selectingValue: number) => {
									setSelecting({ isSelecting, selectingValue });
								}}
								config={config}
							/>
						</div>
						<div className="card-product__row-item">
							{data.countComments}
							отзывов
						</div>
					</div>
				</div>
				<hr className="card-product__hr" />
				<div className="card-product__body card-product_padding">
					<div className="card-product__price card-product__title">
						{data.price} $
					</div>
					<div className="card-product__actions">
						<div className="card-product__action card-product_compare">
							<IconCompare />
						</div>
						<div className="card-product__action card-product_favorite">
							<IconFavorite />
						</div>
					</div>
				</div>
				<div className="card-product__footer card-product_padding">
					<ButtonDefault
						className="card-product__btn-add button-cart"
						onClick={() =>
							onAdd(
								{
									title: data.name,
									preview: data.preview,
									id: data.id,
									price: data.price,
									count: 1,
									productSize: data.size,
								},
								data.size
							)
						}
					>
						<div className="button-cart__wrap">
							<span className="button-cart__name">В корзину</span>
							<span className="button-cart__icon">
								<svg
									width="19"
									height="19"
									viewBox="0 0 19 19"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.14005 4.42146H16.6916C17.3507 4.42146 17.8296 5.04797 17.6565 5.68396L16.9778 8.17874C16.6225 9.48483 15.4366 10.3912 14.0831 10.3912H5.24054M0 1H2.00252C2.97824 1 3.81154 1.70406 3.97445 2.66608L5.47496 11.5273C5.63787 12.4893 6.47118 13.1934 7.44689 13.1934H16.3759"
										stroke="white"
										strokeWidth="1.5"
									/>
									<path
										d="M8.84137 16.6994C8.84137 17.1899 8.42828 17.6195 7.87882 17.6195C7.32936 17.6195 6.91626 17.1899 6.91626 16.6994C6.91626 16.2089 7.32936 15.7793 7.87882 15.7793C8.42828 15.7793 8.84137 16.2089 8.84137 16.6994Z"
										stroke="white"
										strokeWidth="1.5"
									/>
									<path
										d="M16.3768 16.6994C16.3768 17.1899 15.9637 17.6195 15.4142 17.6195C14.8648 17.6195 14.4517 17.1899 14.4517 16.6994C14.4517 16.2089 14.8648 15.7793 15.4142 15.7793C15.9637 15.7793 16.3768 16.2089 16.3768 16.6994Z"
										stroke="white"
										strokeWidth="1.5"
									/>
								</svg>
							</span>
						</div>
					</ButtonDefault>
				</div>
			</div>
		</CardWrapper>
	);
};
