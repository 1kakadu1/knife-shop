import productPreview1 from '../../../assets/images/products/product-1.png';
import productPreview2 from '../../../assets/images/products/product-2.png';
import { mockCategory } from '../../../store/reducer/category/category.mock';
import { IProductData } from '../../../store/reducer/product/product.model';

export const sliderProductsMock: IProductData[] = [
	{
		id: 'id-1',
		preview: productPreview1,
		name: 'Нож ножа  Лиса для ножа',
		price: 25,
		href: '#',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 5,
	},
	{
		id: 'id-2',
		preview: productPreview2,
		name: 'Нож Лиса',
		price: 143,
		href: '#',
		desc: '',
		category: [mockCategory[4]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 3,
	},
	{
		id: 'id-3',
		preview: productPreview1,
		name: 'Проект №1',
		price: 180,
		href: '#',
		desc: '',
		category: [mockCategory[2]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 1,
	},
	{
		id: 'id-4',
		preview: productPreview2,
		name: 'Фонарик',
		price: 2000,
		href: '#',
		desc: '',
		category: [mockCategory[5]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 2,
	},
	{
		id: 'id-5',
		preview: productPreview1,
		name: 'Треска нож',
		price: 999,
		href: '#',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 2,
	},
	{
		id: 'id-6',
		preview: productPreview2,
		name: 'Нож Тест',
		price: 1500,
		href: '#',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 3,
	},
	{
		id: 'id-11',
		preview: productPreview1,
		name: 'Нож Лиса № 11',
		price: 200,
		href: '#',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 1,
	},
	{
		id: 'id-22',
		preview: productPreview2,
		name: 'Фонарь фортуна',
		price: 50,
		href: '#',
		desc: '',
		category: [mockCategory[4]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 5,
	},
	{
		id: 'id-33',
		preview: productPreview1,
		name: 'Нож Фортуна',
		price: 750,
		href: '#',
		desc: '',
		category: [mockCategory[2]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 1,
	},
	{
		id: 'id-44',
		preview: productPreview2,
		name: 'Фонарь project',
		price: 300,
		href: '#',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 5,
	},
	{
		id: 'id-55',
		preview: productPreview1,
		name: 'Нож Лиса (дерево)',
		price: 1200,
		href: '#',
		desc: '',
		category: [mockCategory[2]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 4,
	},
	{
		id: 'id-66',
		preview: productPreview2,
		name: 'Нож Лиса (Орех,Алюминий)',
		price: 10,
		href: '#',
		desc: '',
		category: [mockCategory[2]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 4,
	},
];
