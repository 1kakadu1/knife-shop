import {
	IMenuCatalog,
	ISubMenuCat,
} from '../components/menu-catalog/menu-catalog.model';
import { ICategoryItemData } from '../store/reducer/category/category.model';

export const createCatalog = (category: ICategoryItemData[]) => {
	let catalog: IMenuCatalog[] = [];
	const catalogList = category.filter(
		(x) => x.catalog === undefined && x.parentCategory === undefined
	);
	for (let i = 0; i < catalogList.length; i++) {
		const parent: ISubMenuCat[] = category
			.filter((x) => x.catalog === catalogList[i].id)
			.map((item) => ({ ...item, subMenu: [] }));
		for (let j = 0; j < parent.length; j++) {
			parent[j]['subMenu'] = category.filter((x) =>
				x.parentCategory?.includes(parent[j].id)
			);
		}
		catalog.push({
			name: catalogList[i].name,
			id: catalogList[i].id,
			href: catalogList[i].href,
			catList: parent,
		});
	}

	return catalog;
};
