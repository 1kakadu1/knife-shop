import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toCategorySelector } from '../../store/reducer/category/category.selector';
import { createCatalog } from '../../utils/catalog.utils';
import { Container } from '../container/container.component';
import { IconArrowLeft } from '../icons/arrow-left.icon.component';
import { IconArrowSmallRight } from '../icons/arrow-small-right.icon.component';
import { PortalWrapper } from '../portal-wrapper/portal-wrapper.container';
import { IMenuCatalogProps, ISubMenuCatalogProps } from './menu-catalog.model';
import './menu-catalog.scss';

const SubMenuCatalog = ({
	fixed,
	open,
	active,
	menu,
	onBack,
}: ISubMenuCatalogProps) => {
	return (
		<div
			className={`menu-catalog__sub-menu sub-menu-catalog ${
				open ? 'sub-menu-catalog_open' : ''
			} ${fixed ? 'sub-menu-catalog_fixed' : ''}`}
		>
			<Container paddingNull>
				<>
					<div className="sub-menu-catalog__close back" onClick={onBack}>
						<IconArrowLeft className="back__icon" />
					</div>
					{menu.map((item) => {
						return (
							<div
								className={`sub-menu-catalog__row ${
									active === item.href ? 'sub-menu-catalog__row_show' : ''
								}`}
								key={item.id}
							>
								{item.catList.map((cat) => (
									<div className="sub-menu-catalog__column" key={cat.id}>
										<Link
											to={'../' + cat.href}
											className="sub-menu-catalog__cat"
										>
											{cat.name}
										</Link>
										<ul className="sub-menu-catalog__list">
											{cat.subMenu &&
												cat.subMenu.map(({ name, href, id }) => (
													<li className="sub-menu-catalog__item" key={id}>
														<Link
															to={'../' + cat.href}
															className="sub-menu-catalog__link"
														>
															{name}
														</Link>
													</li>
												))}
										</ul>
										<Link
											to={'../' + cat.href}
											className="sub-menu-catalog__more"
										>
											Смотреть все
										</Link>
									</div>
								))}
							</div>
						);
					})}
				</>
			</Container>
		</div>
	);
};

export const MenuCatalog = ({ fixed, portal }: IMenuCatalogProps) => {
	const category = useSelector(toCategorySelector.category);
	const catalog = useMemo(() => {
		return createCatalog(category);
	}, [category]);

	const [active, setActive] = useState<string>(catalog[0].href || '');
	const [open, setOpen] = useState<string>('');

	const onToggle = (value: string) => {
		if (open === '') {
			setOpen(value);
			setActive(value);
		} else if (value === active && open !== '') {
			setOpen('');
		} else {
			setActive(value);
		}
	};
	const InnerComponent = (
		<SubMenuCatalog
			fixed={fixed}
			open={open}
			menu={catalog}
			active={active}
			onBack={() => setOpen('')}
		/>
	);

	return (
		<nav className="menu-catalog">
			<Container className="menu-catalog__container" paddingNull>
				<div className="menu-catalog__align-items-center">
					<ul className="menu-catalog__list">
						{catalog.map((item) => (
							<li
								className="menu-catalog__item"
								key={item.id}
								onClick={() => onToggle(item.href)}
							>
								<div
									className={`menu-catalog__link ${
										active === item.href && open !== ''
											? 'menu-catalog__link_active'
											: ''
									} `}
								>
									{item.name}
									<IconArrowSmallRight className="menu-catalog__link-icon" />
								</div>
							</li>
						))}
					</ul>
				</div>
			</Container>
			{portal ? (
				<PortalWrapper wrapperId="react-portal-catalog">
					{InnerComponent}
				</PortalWrapper>
			) : (
				InnerComponent
			)}
		</nav>
	);
};
