import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useWindowSize, WindowBreakpoints } from '../../utils/useWindowSize';
import { ButtonBurger } from '../buttons/burger/burger.component';
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
	const portalRef = useRef<HTMLElement | null>();
	const onToggle = (value: boolean) => {
		setOpen(value);
	};

	useEffect(() => {
		portalRef.current = document.getElementById('portal');
	}, []);

	return (
		<div className={`menu-top ${container ? 'menu-top_container' : ''}`}>
			<div className="menu-top__burger">
				<ButtonBurger open={open} onToggle={onToggle} />
			</div>
			{portalRef.current && portal ? (
				ReactDOM.createPortal(
					<div className="modal">
						<MenuTopNav open={open} links={links} catalogMenu={catalogMenu} />
					</div>,
					portalRef.current
				)
			) : (
				<MenuTopNav open={open} links={links} catalogMenu={catalogMenu} />
			)}

			{rightContent}
		</div>
	);
};
