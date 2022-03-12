import { ICategoryItemData } from '../../store/reducer/category/category.model';

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
	id: string;
	catList: ISubMenuCat[];
}

export interface ISubMenuCat extends ICategoryItemData {
	subMenu?: ICategoryItemData[];
}
