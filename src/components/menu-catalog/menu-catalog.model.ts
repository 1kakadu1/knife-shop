export interface IMenuCatalogProps {
	fixed?: boolean;
	portal?: boolean;
}

export interface ISubMenuCatalogProps {
	fixed?: boolean;
	open: string;
	active: string;
	menu: IMenuCatalog[];
	onBack: () => void;
}

export interface IMenuCatalog {
	name: string;
	href: string;
	cat: string;
	catList: ISubMenuCat[];
}

export interface ISubMenuCat {
	subMenu: {
		name: string;
		href: string;
	}[];
	cat: string;
	href: string;
}
