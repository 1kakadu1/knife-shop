import React from 'react';
import { CardWrapper } from '../card-wrapper/card-wrapper.component';
import { ICardProductInfoProps } from './card-product-info.model';
import { Rating } from '../../rating/rating.component';
import { IconFavorite } from '../../icons/favorite.icon.component';
import { IconCompare } from '../../icons/compare.icon.component';
import './card-product-info.scss';
import { Divider } from '../../divider/divider.component';
import { SelectDefault } from '../../inputs/selsect/select.component';
import { CURRENCY } from '../../../const/setting.const';
import { Box } from '../../box/box.component';
import { Counter } from '../../counter/counter.component';

export const CardProductInfo = ({
	product,
	onChangeRating,
	isFavorite,
	onChangeFavorite,
	onCompare,
	onAddCart,
	onSubCart,
	currentCart,
}: ICardProductInfoProps) => {
	const productCart = {
		title: product.name,
		preview: product.preview,
		id: product.id,
		price: product.price,
		count: currentCart?.count || 0,
		productSize: product.size,
	};
	return (
		<CardWrapper className="card-product-info">
			<div className="card-product-info__header">
				<h3 className="card-product-info__name card-product-info__title">
					{product.name}
					<span className="card-product-info__status card-product-info-status_success">
						В наличии
					</span>
				</h3>
				<Rating
					id={product.id}
					size={product.size}
					selected={product.userStars || 0}
					onChangeRating={onChangeRating}
					width={21}
					className="card-product-info__stars"
				/>
				<div className="card-product-info__actions">
					{onCompare && (
						<div className="card-product-info__action card-product-info_compare">
							<IconCompare />
						</div>
					)}

					{onChangeFavorite && (
						<div
							className={`card-product-info__action card-product-info_favorite${
								isFavorite === true ? ' isFavorite' : ''
							}`}
							onClick={() => {
								onChangeFavorite(
									{
										title: product.name,
										preview: product.preview,
										id: product.id,
										price: product.price,
										count: 0,
										productSize: product.size,
									},
									product.size
								);
							}}
						>
							<IconFavorite />
						</div>
					)}
				</div>
			</div>
			<Divider ptb={30} />
			<div className="card-product-info__body">
				<ul className="card-product-info__list">
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Артикул:
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							AF0000001952
						</div>
					</li>
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Торговая марка:
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							WUESTHOF (Германия)
						</div>
					</li>
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Серия:
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							Ножи серии Classic Ikon
						</div>
					</li>
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Бонусные баллы:
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							38
						</div>
					</li>
				</ul>
			</div>
			<Divider ptb={30} />
			<div className="card-product-info__criterial">
				<ul className="card-product-info__list">
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Сталь:
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							<SelectDefault
								className="card-product-info__select"
								onChange={() => void 0}
								value=""
								id="type_material"
								options={[
									{
										value: '1',
										name: '110Х18М-ШД1',
									},
								]}
								black
							/>
						</div>
					</li>
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Обработка клинка
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							<SelectDefault
								className="card-product-info__select"
								onChange={() => void 0}
								value=""
								id="type_material"
								options={[
									{
										value: '1',
										name: '110Х18М-ШД1',
									},
								]}
								black
							/>
						</div>
					</li>
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Рукоять
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							<SelectDefault
								className="card-product-info__select"
								onChange={() => void 0}
								value=""
								id="type_material"
								options={[
									{
										value: '1',
										name: '110Х18М-ШД1',
									},
								]}
								black
							/>
						</div>
					</li>
					<li className="card-product-info__list-item">
						<div className="card-product-info__item-name card-product-info_item-name-width">
							Гарда и тыльник
						</div>
						<div className="card-product-info__item-name card-product-info_item-name-color">
							<SelectDefault
								className="card-product-info__select"
								onChange={() => void 0}
								value=""
								id="type_material"
								options={[
									{
										value: '1',
										name: '110Х18М-ШД1',
									},
								]}
								black
							/>
						</div>
					</li>
				</ul>
			</div>
			<Divider ptb={30} />
			<div className="card-product-info__footer card-product-footer">
				<div className="card-product-footer__row">
					<div className="card-product-info__price">
						{product.price} {CURRENCY}
					</div>
					<div className="card-product-info__bonus">
						+ 449 баллов за покупку{' '}
						<span className="badge badge__bonus card-product-info__badge">
							?
						</span>
					</div>
				</div>
				<Box styles={{ padding: '12px' }} />
				<div className="card-product-footer__row">
					{onAddCart && onSubCart && (
						<Counter
							onAdd={() => onAddCart(productCart, product.size)}
							count={productCart.count}
							onSub={() => onSubCart(productCart, product.size)}
						/>
					)}
				</div>
			</div>
		</CardWrapper>
	);
};
