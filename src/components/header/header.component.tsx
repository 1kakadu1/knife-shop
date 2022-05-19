import React from 'react';
import { menuHeaderLinkMock } from '../../global-mock/menu-header-top.mock';
import { useWindowSize, WindowBreakpoints } from '../../utils/useWindowSize';
import { Container } from '../container/container.component';
import { MenuCatalog } from '../menu-catalog/menu-catalog.component';
import { MenuToolbar } from '../menu-toolbar/menu-toolbar.component';
import { LinkProfile } from '../menu-top/components/link/link.component';
import { MenuTop } from '../menu-top/menu-top.component';
import './header.scss';

export const Header = () => {
	const { breakpoint } = useWindowSize();

	return (
		<header className="header">
			<div className="header__top">
				<Container>
					<MenuTop
						links={menuHeaderLinkMock}
						rightContent={<LinkProfile />}
						catalogMenu={<MenuCatalog fixed portal />}
						portal={breakpoint < WindowBreakpoints.lg}
					/>
				</Container>
			</div>
			<div className="header__body">
				<Container>
					<MenuToolbar />
				</Container>
			</div>
			{breakpoint >= WindowBreakpoints.lg && (
				<div className="header__footer">
					<MenuCatalog />
				</div>
			)}
		</header>
	);
};
