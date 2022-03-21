import { ICategoryItemData } from './category.model';

export const mockCategory: ICategoryItemData[] = [
	// #1 catalog
	{
		name: 'Каталог ножей',
		id: 'id-cat-knife-all',
		href: 'cat-knife-all',
		order: 1,
	},
	// #1-1 parent cat
	{
		name: 'Категория ножей',
		id: 'id-cat-knife',
		href: '/cat-knife',
		catalog: 'id-cat-knife-all',
		order: 1,
	},
	// #cat
	{
		name: 'Разделочные ножи',
		id: 'id-cat-cutting-knives',
		href: 'cat-cutting-knives',
		parentCategory: ['id-cat-knife'],
		order: 1,
	},
	{
		name: 'Туристические ножи',
		href: 'cat-tourist-knives',
		id: 'id-cat-tourist-knives-2',
		parentCategory: ['id-cat-knife'],
		order: 2,
	},
	{
		name: 'Ножи охотничьи',
		href: 'cat-knife-7',
		id: 'id-cat-tourist-knives-3',
		parentCategory: ['id-cat-knife'],
		order: 3,
	},
	{
		name: 'Булатные ножи',
		href: 'cat-knife-6',
		id: 'id-cat-tourist-knives-4',
		parentCategory: ['id-cat-knife'],
		order: 4,
	},
	{
		name: 'Ножи из дамаска',
		href: 'cat-knife-5',
		id: 'id-cat-tourist-knives-5',
		parentCategory: ['id-cat-knife'],
		order: 5,
	},
	{
		name: 'Тактического назначения',
		href: 'cat-knife-4',
		id: 'id-cat-tourist-knives-6',
		parentCategory: ['id-cat-knife'],
		order: 6,
	},
	{
		name: 'Метательные ножи',
		href: 'cat-knife-3',
		id: 'id-cat-tourist-knives-7',
		parentCategory: ['id-cat-knife'],
		order: 7,
	},
	{
		name: 'Мачете и кукри',
		href: 'cat-knife-2',
		id: 'id-cat-tourist-knives-66',
		parentCategory: ['id-cat-knife'],
		order: 8,
	},
	{
		name: 'Ножи кухонные',
		href: 'cat-knife-1',
		id: 'id-cat-tourist-knives-1',
		parentCategory: ['id-cat-knife'],
		order: 2,
	},
	// #1-2 parent cat
	{
		name: 'Производство ножей',
		id: 'id-cat-production-of-knives',
		href: 'production-of-knives',
		catalog: 'id-cat-knife-all',
		order: 2,
	},
	// #cat
	{
		name: 'Ножи АИР',
		id: 'id-cat-production-of-knives-1-1',
		href: 'cutting-knives-190',
		parentCategory: ['id-cat-production-of-knives'],
		order: 1,
	},
	{
		name: 'Ножи ЗИК',
		id: 'id-cat-production-of-knives-2',
		href: 'cutting-knives-2',
		parentCategory: ['id-cat-production-of-knives'],
		order: 2,
	},
	{
		name: 'Ножи ЗЗОСС',
		id: 'id-cat-production-of-knives-3',
		href: 'cutting-knives-3',
		parentCategory: ['id-cat-production-of-knives'],
		order: 3,
	},
	{
		name: 'Ножи РОСоружие',
		id: 'id-cat-production-of-knives-4',
		href: 'cutting-knives-4',
		parentCategory: ['id-cat-production-of-knives'],
		order: 4,
	},
	{
		name: 'Ножи Оружейник',
		id: 'id-cat-production-of-knives-5',
		href: 'cutting-knives-5',
		parentCategory: ['id-cat-production-of-knives'],
		order: 5,
	},
	{
		name: 'Булат Сергея Баранова',
		id: 'id-cat-production-of-knives-6',
		href: 'cutting-knives-6',
		parentCategory: ['id-cat-production-of-knives'],
		order: 6,
	},
	{
		name: 'Булат Андрея Умерова',
		id: 'id-cat-production-of-knives-7',
		href: 'cutting-knives-7',
		parentCategory: ['id-cat-production-of-knives'],
		order: 7,
	},
	{
		name: 'Ножи Златко',
		id: 'id-cat-production-of-knives-1',
		href: 'cutting-knives-1-88',
		parentCategory: ['id-cat-production-of-knives'],
		order: 8,
	},
	{
		name: 'Ножи Стиль-М',
		id: 'id-cat-production-of-knives-9',
		href: 'cutting-knives-9',
		parentCategory: ['id-cat-production-of-knives'],
		order: 9,
	},
	{
		name: 'Оружейная компания',
		id: 'id-cat-production-of-knives-10',
		href: 'cutting-knives-10',
		parentCategory: ['id-cat-production-of-knives'],
		order: 10,
	},

	// #1-3 parent cat
	{
		name: 'Ножи по маркам стали',
		id: 'id-cat-knives-by-steel-grades',
		href: 'knives-by-steel-grades',
		catalog: 'id-cat-knife-all',
		order: 3,
	},
	// #cat
	{
		name: 'Ножи из стали 40х102С2М',
		id: 'id-cat-knives-by-steel-grades-1',
		href: 'knives-by-steel-grades-1',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 1,
	},
	{
		name: 'Ножи из стали 95х18',
		id: 'id-cat-knives-by-steel-grades-2',
		href: 'knives-by-steel-grades-2',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 2,
	},
	{
		name: 'Ножи из стали 100х13м',
		id: 'id-cat-knives-by-steel-grades-3',
		href: 'knives-by-steel-grades-3',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 3,
	},
	{
		name: 'Ножи из стали 110х18м-ШД',
		id: 'id-cat-knives-by-steel-grades-4',
		href: 'knives-by-steel-grades-4',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 4,
	},
	{
		name: 'Ножи из стали ЭИ-107 ТЦ',
		id: 'id-cat-knives-by-steel-grades-5',
		href: 'knives-by-steel-grades-5',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 5,
	},
	{
		name: 'Ножи из стали 50х14МФ',
		id: 'id-cat-knives-by-steel-grades-6',
		href: 'knives-by-steel-grades-6',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 6,
	},
	{
		name: 'Ножи из стали AUS-8',
		id: 'id-cat-knives-by-steel-grades-7',
		href: 'knives-by-steel-grades-7',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 7,
	},
	{
		name: 'Ножи из стали К340',
		id: 'id-cat-knives-by-steel-grades-8',
		href: 'knives-by-steel-grades-8',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 8,
	},
	{
		name: 'Ножи из стали M390',
		id: 'id-cat-knives-by-steel-grades-9',
		href: 'knives-by-steel-grades-9',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 9,
	},
	{
		name: 'Ножи из стали ЭП-766',
		id: 'id-cat-knives-by-steel-grades-10',
		href: 'knives-by-steel-grades-10',
		parentCategory: ['id-cat-knives-by-steel-grades'],
		order: 10,
	},

	// #1-4 parent cat
	{
		name: 'Заточка и полировка ножей',
		id: 'id-cat-sharpening-and-polishing-of-knives',
		href: 'sharpening-and-polishing-of-knives',
		catalog: 'id-cat-knife-all',
		order: 4,
	},
	// #cat
	{
		name: 'Паста ГОИ',
		id: 'id-cat-sharpening-and-polishing-of-knives-1',
		href: 'sharpening-and-polishing-of-knives-1',
		parentCategory: ['id-cat-sharpening-and-polishing-of-knives'],
		order: 1,
	},
	{
		name: 'Алмазная паста',
		id: 'id-cat-sharpening-and-polishing-of-knives-2',
		href: 'sharpening-and-polishing-of-knives-2',
		parentCategory: ['id-cat-sharpening-and-polishing-of-knives'],
		order: 2,
	},
	{
		name: 'Бруски и камни для заточки',
		id: 'id-cat-sharpening-and-polishing-of-knives-3',
		href: 'sharpening-and-polishing-of-knives-3',
		parentCategory: ['id-cat-sharpening-and-polishing-of-knives'],
		order: 3,
	},
	{
		name: 'Заточные системы',
		id: 'id-cat-sharpening-and-polishing-of-knives-4',
		href: 'sharpening-and-polishing-of-knives-4',
		parentCategory: ['id-cat-sharpening-and-polishing-of-knives'],
		order: 4,
	},
	// #1-5 parent cat
	{
		name: 'Ножевая мастерская',
		id: 'id-cat-knife-workshop',
		href: 'knife-workshop',
		catalog: 'id-cat-knife-all',
		order: 5,
	},
	// #cat
	{
		name: 'Ножевые клинки',
		id: 'id-cat-knife-workshop-1',
		href: 'related-products-165',
		parentCategory: ['id-cat-knife-workshop'],
		order: 1,
	},
	{
		name: 'Заготовки для ножей',
		id: 'id-cat-knife-workshop-2',
		href: 'knife-workshop-2',
		parentCategory: ['id-cat-knife-workshop'],
		order: 2,
	},
	{
		name: 'Литье для ножей',
		id: 'id-cat-knife-workshop-3',
		href: 'related-products-188',
		parentCategory: ['id-cat-knife-workshop'],
		order: 3,
	},
	{
		name: 'Материалы для рукоятей',
		id: 'id-cat-knife-workshop-4',
		href: 'knife-workshop-4',
		parentCategory: ['id-cat-knife-workshop'],
		order: 4,
	},
	{
		name: 'Уход за рукоятиями ножей',
		id: 'id-cat-knife-workshop-5',
		href: 'knife-workshop-5',
		parentCategory: ['id-cat-knife-workshop'],
		order: 5,
	},
	// #2 catalog
	{
		name: 'Сувенирные изделия',
		id: 'id-cat-souvenir-products-all',
		href: 'souvenir-products-all',
		order: 2,
	},
	// #2-1 parent cat
	{
		name: 'Сувенирные изделия',
		id: 'id-cat-related-products-2-1',
		href: 'related-products-2-1',
		catalog: 'id-cat-souvenir-products-all',
		order: 1,
	},
	// #cat
	{
		name: 'Разделочные ножи',
		id: 'id-cat-related-products-1-2-1',
		href: 'related-products-1-2-1',
		parentCategory: ['id-cat-related-products-2-1'],
		order: 1,
	},
	{
		name: 'Туристические ножи',
		id: 'id-cat-related-products-2-2-1',
		href: 'related-products-2-2-1',
		parentCategory: ['id-cat-related-products-2-1'],
		order: 2,
	},
	// #3 catalog
	{
		name: 'Клинковое оружие',
		id: 'id-cat-bladed-weapons-all',
		href: 'bladed-weapons-all',
		order: 3,
	},
	// #3-1 parent cat
	{
		name: 'Сувенирные изделия',
		id: 'id-cat-related-products-3-1',
		href: 'related-products-3-1',
		catalog: 'id-cat-bladed-weapons-all',
		order: 1,
	},
	// #cat
	{
		name: 'Разделочные ножи',
		id: 'id-cat-related-products-1-3-1',
		href: 'related-products-1-2-1',
		parentCategory: ['id-cat-related-products-3-1'],
		order: 1,
	},
	{
		name: 'Туристические ножи',
		id: 'id-cat-related-products-2-3-1',
		href: 'related-products-2-3-1',
		parentCategory: ['id-cat-related-products-3-1'],
		order: 2,
	},
	// #4 catalog
	{
		name: 'Фонари ARMYTEK',
		id: 'id-cat-ARMYTEK-flashlights-all',
		href: 'ARMYTEK-flashlights-all',
		order: 4,
	},
	// #2-1 parent cat
	{
		name: 'Сувенирные изделия',
		id: 'id-cat-related-products-4-1',
		href: 'related-products-4-1',
		catalog: 'id-cat-ARMYTEK-flashlights-all',
		order: 1,
	},
	// #cat
	{
		name: 'Разделочные ножи',
		id: 'id-cat-related-products-4-1',
		href: 'related-products-4-1',
		parentCategory: ['id-cat-related-products-4-1'],
		order: 1,
	},
	{
		name: 'Туристические ножи',
		id: 'id-cat-related-products-2-4-1',
		href: 'related-products-2-4-1',
		parentCategory: ['id-cat-related-products-4-1'],
		order: 2,
	},
	// #5 catalog
	{
		name: 'Сопуствующие товары',
		id: 'id-cat-related-products-all',
		href: 'related-products-all',
		order: 5,
	},
	// #5-1 parent cat
	{
		name: 'Сувенирные изделия',
		id: 'id-cat-related-products-5-1',
		href: 'related-products-5-1',
		catalog: 'id-cat-related-products-all',
		order: 1,
	},
	// #cat
	{
		name: 'Разделочные ножи',
		id: 'id-cat-related-products-1-5-1',
		href: 'related-products-1-5-1',
		parentCategory: ['id-cat-related-products-5-1'],
		order: 1,
	},
	{
		name: 'Туристические ножи',
		id: 'id-cat-related-products-2-5-1',
		href: 'related-products-2-5-1',
		parentCategory: ['id-cat-related-products-5-1'],
		order: 2,
	},
];
