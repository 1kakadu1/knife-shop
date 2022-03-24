import React, { useState, useRef, useEffect } from 'react';
import { useWindowSize, WindowBreakpoints } from '../../utils/useWindowSize';
import { ButtonBurger } from '../buttons/burger/burger.component';
import { PortalWrapper } from '../portal-wrapper/portal-wrapper.container';
import { IMenuLink, IMenuTopNavProps, IMenuTopProps } from './menu-top.model';
import './menu-top.styles.scss';

const MenuTopNav = ({ links, catalogMenu, open }: IMenuTopNavProps) => {
	const { breakpoint } = useWindowSize();

	return (
		<nav
			className={`menu-top__nav menu-top__mobile ${
				open ? 'menu-top_mobile_active' : ''
			}`}
		>
			<ul className={`menu-top__list`}>
				{links.map((item: IMenuLink) => (
					<li className="menu-top__nav__item" key={item.href}>
						{item.name}
					</li>
				))}
			</ul>
			{catalogMenu && breakpoint < WindowBreakpoints.lg && (
				<div className="menu-top__catalog">{catalogMenu}</div>
			)}
		</nav>
	);
};

export const MenuTop = ({
	container,
	rightContent,
	links,
	catalogMenu,
	portal,
}: IMenuTopProps) => {
	const [open, setOpen] = useState<boolean>(false);
	const bodyRef = useRef<HTMLElement | null>();

	const onToggle = (value: boolean) => {
		setOpen(value);
	};

	useEffect(() => {
		bodyRef.current = document.querySelector('body');
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

	return (
		<div className={`menu-top ${container ? 'menu-top_container' : ''}`}>
			<div className="menu-top__burger">
				<ButtonBurger open={open} onToggle={onToggle} />
			</div>
			{portal ? (
				<PortalWrapper wrapperId="react-portal-menu">
					<MenuTopNav open={open} links={links} catalogMenu={catalogMenu} />
				</PortalWrapper>
			) : (
				<MenuTopNav open={open} links={links} catalogMenu={catalogMenu} />
			)}

			{rightContent}
		</div>
	);
};
