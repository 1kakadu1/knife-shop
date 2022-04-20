import React, { useState } from 'react';
import { IAsideProductProps } from './aside-product.model';
import { SlideDownCustom } from '../../slide-down/slide-down.component';
import { Aside } from '../aside.component';
import '../aside.scss';
import { RangeSlider } from '../../inputs/range/range.component';
import { defaultPrice, ratingMock } from './aside-product.mock';
import { Checkbox } from '../../inputs/checkbox/checkbox.component';
import { ButtonDefault } from '../../buttons/default/default.component';
import starActive from '../../../assets/images/star-active.png';
import { newArray } from '../../../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import {
	FiltersKey,
	IProductsFilter,
} from '../../../store/reducer/products/products.model';
import { toProductsSelector } from '../../../store/reducer/products/products.selector';
import { toProductsAction } from '../../../store/reducer/products/products.reducer';
import { useFilterUrl } from '../../../hook/useFilterUrl.hook';
import { toCategorySelector } from '../../../store/reducer/category/category.selector';

export const AsideProduct = ({
	className = '',
	...props
}: IAsideProductProps) => {
	const dispatch = useDispatch();
	const filters = useSelector(toProductsSelector.filter);
	const category = useSelector(toCategorySelector.categorySub());
	const [stateFilter, setStateFilter] = useState<IProductsFilter>(filters);
	const onChangeFilter = (key: FiltersKey, value: any) =>
		setStateFilter({ ...stateFilter, [key]: value });
	const onResetFilter = () => {
		setStateFilter({});
		dispatch(toProductsAction.productsFilter({}));
	};
	useFilterUrl<IProductsFilter>(filters, {
		setFilter: (values) => {
			setStateFilter(values);
			dispatch(toProductsAction.productsFilter(values));
		},
	});

	const onChangeCheckbox = (
		checkboxObject: { [key: string]: string },
		key: FiltersKey,
		update: (key: FiltersKey, obj: { [key: string]: string }) => void,
		id: string,
		checked: boolean,
		value?: string
	) => {
		const obj = JSON.parse(JSON.stringify(checkboxObject));
		if (obj[id] !== undefined) {
			delete obj[id];
		} else {
			obj[id] = value;
		}
		update(key, obj);
	};

	const onChangeCategory = (checked: boolean, id?: string, value?: string) =>
		onChangeCheckbox(
			stateFilter.category || {},
			FiltersKey.category,
			onChangeFilter,
			id || '',
			checked,
			value
		);
	const onChangeRating = (checked: boolean, id?: string, value?: string) =>
		onChangeCheckbox(
			stateFilter.rating || {},
			FiltersKey.rating,
			onChangeFilter,
			id || '',
			checked,
			value
		);

	const onFilter = () => {
		dispatch(toProductsAction.productsFilter({ ...filters, ...stateFilter }));
	};

	return (
		<Aside onClose={props.onClose} open={props.open}>
			<div className={'aside-product' + className}>
				<div className="aside-slide-down">
					<div className="aside-slide-down__button aside-slide-down_align-items-center">
						<span>Фильтр товаров</span>
						{Object.keys(filters).length > 0 && (
							<button
								className="btn-close btn-filter__cancel"
								onClick={onResetFilter}
							>
								<svg viewBox="0 0 24 24">
									<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM4 12c0-4.4 3.6-8 8-8 1.8 0 3.5.6 4.9 1.7L5.7 16.9C4.6 15.5 4 13.8 4 12zm8 8c-1.8 0-3.5-.6-4.9-1.7L18.3 7.1C19.4 8.5 20 10.2 20 12c0 4.4-3.6 8-8 8z"></path>
								</svg>
							</button>
						)}
					</div>
				</div>
				<SlideDownCustom
					title="Цена"
					defaultClose={false}
					className="aside-slide-down"
				>
					<div className="aside-slide-down__list">
						<RangeSlider
							value={
								stateFilter.rangePrice || [defaultPrice.min, defaultPrice.max]
							}
							onChange={(value) => onChangeFilter(FiltersKey.rangePrice, value)}
							sliderProps={{
								max: defaultPrice.max,
								min: defaultPrice.min,
							}}
						/>
					</div>
				</SlideDownCustom>
				<SlideDownCustom
					title="Категории"
					defaultClose={true}
					className="aside-slide-down"
				>
					<div className="aside-slide-down__list checkbox-list">
						{category.map((item) => (
							<div className="checkbox-list__item" key={item.id}>
								<Checkbox
									id={item.id}
									value={item.href}
									label={<span> {item.name}</span>}
									checked={
										stateFilter.category
											? stateFilter.category[item.id] !== undefined
											: false
									}
									onChange={onChangeCategory}
								/>
							</div>
						))}
					</div>
				</SlideDownCustom>

				{/* <SlideDownCustom
                        title="Производство"
                        defaultClose={true}
                        className="aside-slide-down"
                    >
                        <div className="aside-slide-down__list checkbox-list">
                                {
                                    productionMock.map(item=>(
                                        <div className="checkbox-list__item" key={item.id}>
                                            <Checkbox 
                                                id={item.id}
                                                value={item.name}
                                                label={<span> {item.label} <span className="checkbox-counter">({item.count})</span></span>}
                                                checked={stateFilter.production ?  stateFilter.production[item.id] !== undefined : false}
                                                onChange={onChangeProduction}
                                            />
                                        </div>
                                    ))
                                }
                        </div>
                    </SlideDownCustom> */}

				{/* <SlideDownCustom
                        title="Ширина"
                        defaultClose={true}
                        className="aside-slide-down"
                    >
                        <div className="aside-slide-down__list">
                            <RangeSlider
                                value={stateFilter.rangeWidth || [defaultWidth.min, defaultWidth.max]}
                                onChange={(value)=> onChangeFilter(FiltersKey.rangeWidth, value)}
                                sliderProps={{
                                    max: defaultWidth.max,
                                    min: defaultWidth.min,
                                }}
                            />
                        </div>
                    </SlideDownCustom> */}

				<SlideDownCustom
					title="Рейтинг"
					defaultClose={false}
					className="aside-slide-down"
				>
					<div className="aside-slide-down__list">
						{ratingMock.map((item) => (
							<div className="checkbox-list__item" key={item.id}>
								<Checkbox
									id={item.id}
									value={item.rating.toString()}
									label={
										<div className="aside-filter__rating-label">
											<div className="rating-label-wrap">
												{newArray(item.rating).map((item) => (
													<img src={starActive} alt="" key={item} />
												))}
											</div>

											<span>{item.rating}/5</span>
										</div>
									}
									checked={
										stateFilter.rating
											? stateFilter.rating[item.id] !== undefined
											: false
									}
									onChange={onChangeRating}
								/>
							</div>
						))}
					</div>
				</SlideDownCustom>

				<ButtonDefault className="aside-button-filter" onClick={onFilter}>
					<span>Подобрать</span>
				</ButtonDefault>
			</div>
		</Aside>
	);
};
