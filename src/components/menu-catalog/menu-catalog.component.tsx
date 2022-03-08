import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Container } from '../container/container.component';
import { IconArrowLeft } from '../icons/arrow-left.icon.component';
import { IconArrowSmallRight } from '../icons/arrow-small-right.icon.component';
import { mockMenuCatalog } from './menu-catalog.mock';
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
								key={item.href}
							>
								{item.catList.map((cat) => (
									<div className="sub-menu-catalog__column" key={cat.href}>
										<a href={cat.href} className="sub-menu-catalog__cat">
											{cat.cat}
										</a>
										<ul className="sub-menu-catalog__list">
											{cat.subMenu.map(({ name, href }) => (
												<li className="sub-menu-catalog__item" key={href}>
													<a href={href} className="sub-menu-catalog__link">
														{name}
													</a>
												</li>
											))}
										</ul>
										<a href={cat.href} className="sub-menu-catalog__more">
											Смотреть все
										</a>
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
	const [active, setActive] = useState<string>(mockMenuCatalog[0].href || '');
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
			menu={mockMenuCatalog}
			active={active}
			onBack={() => setOpen('')}
		/>
	);
	const portalRef = useRef<HTMLElement | null>();

	useEffect(() => {
		portalRef.current = document.getElementById('portal');
	}, []);

	return (
		<nav className="menu-catalog">
			<Container className="menu-catalog__container" paddingNull>
				<div className="menu-catalog__align-items-center">
					<ul className="menu-catalog__list">
						{mockMenuCatalog.map((item) => (
							<li
								className="menu-catalog__item"
								key={item.href + '-general'}
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
			{portal && portalRef.current
				? ReactDOM.createPortal(InnerComponent, portalRef.current)
				: InnerComponent}
		</nav>
	);
};