import { ISubMenuCat, IMenuCatalog } from './menu-catalog.model';
const mockSubMenuCatalogItem: ISubMenuCat[] = [
	{
		cat: 'Категория ножей',
		href: '/cat-knife-catalog',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-knife-9',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-knife-8',
			},
			{
				name: 'Ножи охотничьи',
				href: 'cat-knife-7',
			},
			{
				name: 'Булатные ножи',
				href: 'cat-knife-6',
			},
			{
				name: 'Ножи из дамаска',
				href: 'cat-knife-5',
			},
			{
				name: 'Тактического назначения',
				href: 'cat-knife-4',
			},
			{
				name: 'Метательные ножи',
				href: 'cat-knife-3',
			},
			{
				name: 'Мачете и кукри',
				href: 'cat-knife-2',
			},
			{
				name: 'Ножи кухонные',
				href: 'cat-knife-1',
			},
		],
	},
	{
		cat: 'Производство ножей',
		href: '/cat-knife-create-catalog',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-knife-create-9',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-knife-create-8',
			},
		],
	},
	{
		cat: 'Сувенирные изделия',
		href: '/cat-knife-suvenir-catalog',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-knife-suvenir-create-9',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-knife-suvenir-create-8',
			},
		],
	},
	{
		cat: 'Фонари ARMYTEK',
		href: '/cat-knife-ARMYTEK-catalog',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-cat-knife-ARMYTEK-9',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-cat-knife-ARMYTEK-8',
			},
		],
	},
	{
		cat: 'Сопуствующие товары',
		href: '/cat-knife-popular-catalog',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-knife-popular-create-9',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-knife-popular-create-8',
			},
		],
	},
];

const mockSubMenuCatalogItemArmor: ISubMenuCat[] = [
	{
		cat: 'Armor',
		href: '/cat-knife-catalog',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-armor-9',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-armor-8',
			},
		],
	},
];

const mockSubMenuCatalogItem2: ISubMenuCat[] = [
	{
		cat: 'Сувенирные изделия',
		href: '/cat-knife-catalog-14',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-armor-99',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-armor-88',
			},
		],
	},
];

const mockSubMenuCatalogItem3: ISubMenuCat[] = [
	{
		cat: 'Фонари ARMYTEK',
		href: '/cat-knife-catalog-7878',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-armor-934324',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-armor-85656',
			},
		],
	},
];

const mockSubMenuCatalogItem4: ISubMenuCat[] = [
	{
		cat: 'Сопуствующие товары',
		href: '/cat-knife-catalog-0987',
		subMenu: [
			{
				name: 'Разделочные ножи',
				href: 'cat-armor-90088',
			},
			{
				name: 'Туристические ножи',
				href: 'cat-armor-80008',
			},
		],
	},
];

export const mockMenuCatalog: IMenuCatalog[] = [
	{
		name: 'Каталог ножей',
		cat: 'Категория ножей',
		href: '/cat-knife',
		catList: mockSubMenuCatalogItem,
	},
	{
		name: 'Клинковое оружие',
		cat: 'Категория ножей',
		href: '/cat-09',
		catList: mockSubMenuCatalogItemArmor,
	},
	{
		name: 'Сувенирные изделия',
		cat: 'Категория ножей',
		href: '/cat-10',
		catList: mockSubMenuCatalogItem2,
	},
	{
		name: 'Фонари ARMYTEK',
		cat: 'Категория ножей',
		href: '/cat-11',
		catList: mockSubMenuCatalogItem3,
	},
	{
		name: 'Сопуствующие товары',
		cat: 'Категория ножей',
		href: '/cat-12',
		catList: mockSubMenuCatalogItem4,
	},
];
