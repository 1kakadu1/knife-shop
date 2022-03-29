import React from 'react';
import { ButtonDefault } from '../../buttons/default/default.component';
import { CardWrapper } from '../card-wrapper/card-wrapper.component';
import { ICardProduct } from './card-product.model';
import './card-product.scss';
import { IconCompare } from '../../icons/compare.icon.component';
import { IconFavorite } from '../../icons/favorite.icon.component';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toCartSelector } from '../../../store/reducer/cart/cart.selector';
import { RoutsPath } from '../../../routes/routes';
import { Rating } from '../../rating/rating.component';
import { Divider } from '../../divider/divider.component';
import { Box } from '../../box/box.component';

export const CardProduct = ({
	data,
	className = '',
	onAdd,
	onChangeRating,
	isFavorite,
	onChangeFavorite,
	onCompare,
}: ICardProduct) => {
	const productCart = useSelector(
		toCartSelector.getCartProductByID(data.id, data.size)
	);

	return (
		<CardWrapper paddingNull>
			<div className={'card-product ' + className}>
				<Link
					className="card-product__preview-container"
					to={RoutsPath.product + '/' + data.href}
				>
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
					<Link to={RoutsPath.product + '/' + data.href}>
						<h3 className="card-product__name card-product__title">
							{data.name}
						</h3>
					</Link>

					<div className="card-product__row">
						<div className="card-product__row-item item_bold">{data.size}</div>
						<div className="card-product__row-item item_bold">
							{data.material[0] || ''}
							{data.material.length >= 2 && ','}
							{data.material[1] || ''}
						</div>
					</div>
					<div className="card-product__row">
						<div className="card-product__row-item item_star">
							<Rating
								id={data.id}
								size={data.size}
								selected={data.userStars || 0}
								onChangeRating={onChangeRating}
							/>
						</div>
						<div className="card-product__row-item">
							<span>{data.countComments}</span>
							отзывов
						</div>
					</div>
				</div>
				<Box styles={{ padding: '10px 20px' }}>
					<Divider ptb={0} />
				</Box>

				<div className="card-product__body card-product_padding">
					<div className="card-product__price card-product__title">
						{data.price} $
					</div>
					<div className="card-product__actions">
						{onCompare && (
							<div className="card-product__action card-product_compare">
								<IconCompare />
							</div>
						)}

						{onChangeFavorite && (
							<div
								className={`card-product__action card-product_favorite${
									isFavorite === true ? ' isFavorite' : ''
								}`}
								onClick={() => {
									onChangeFavorite(
										{
											title: data.name,
											preview: data.preview,
											id: data.id,
											price: data.price,
											count: 0,
											productSize: data.size,
										},
										data.size
									);
								}}
							>
								<IconFavorite />
							</div>
						)}
					</div>
				</div>
				{onAdd && (
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
				)}
			</div>
		</CardWrapper>
	);
};
