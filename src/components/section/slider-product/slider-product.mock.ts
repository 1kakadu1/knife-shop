import productPreview1 from '../../../assets/images/products/product-1.png';
import productPreview2 from '../../../assets/images/products/product-2.png';
import { mockCategory } from '../../../store/reducer/category/category.mock';
import {
	IProductCharacteristic,
	IProductData,
} from '../../../store/reducer/product/product.model';

const fakeGallery = [
	{
		original:
			'https://www.seriouseats.com/thmb/TcGD1n1LAplWl790peXJPCQA6s0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__09__20150921-misen-knife-review-1-a4f5f8aa45db4e509f82494679cb61fa.jpg',
		thumbnail:
			'https://www.seriouseats.com/thmb/TcGD1n1LAplWl790peXJPCQA6s0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__09__20150921-misen-knife-review-1-a4f5f8aa45db4e509f82494679cb61fa.jpg',
	},
	{
		original:
			'https://www.tescomaonline.com/media/images/catalog/item/zoom/c15_884529__2.jpg',
		thumbnail:
			'https://www.tescomaonline.com/media/images/catalog/item/zoom/c15_884529__2.jpg',
	},
	{
		original:
			'https://static.onecms.io/wp-content/uploads/sites/9/2021/11/08/Henckels-Classic-Chef-Knife-FT-BLOG1121.jpg',
		thumbnail:
			'https://static.onecms.io/wp-content/uploads/sites/9/2021/11/08/Henckels-Classic-Chef-Knife-FT-BLOG1121.jpg',
	},
	{
		original:
			'https://www.cnet.com/a/img/resize/7429cecd3a94633f272e43d3cbed2c624a5908d5/2021/08/05/d4dfbaf8-34ed-47ef-ab62-63294b04927a/aura-knife.jpg?auto=webp&fit=crop&height=528&width=940',
		thumbnail:
			'https://www.cnet.com/a/img/resize/7429cecd3a94633f272e43d3cbed2c624a5908d5/2021/08/05/d4dfbaf8-34ed-47ef-ab62-63294b04927a/aura-knife.jpg?auto=webp&fit=crop&height=528&width=940',
	},
	{
		original:
			'https://www.oldfieldforge.co.uk/app/uploads/2020/03/Damascus-Knife-2-scaled.jpg',
		thumbnail:
			'https://www.oldfieldforge.co.uk/app/uploads/2020/03/Damascus-Knife-2-scaled.jpg',
	},
];

const lorem = `Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.`;
const сharacteristic: IProductCharacteristic[] = [
	{
		label: 'Технические характеристики',
		items: [
			{
				label: 'Общая длина, мм:',
				value: 227,
			},
			{
				label: 'Длина клинка, мм:',
				value: 112,
			},
			{
				label: 'Ширина клинка, мм:',
				value: 24,
			},
			{
				label: 'Толщина обуха, мм:',
				value: 2.9,
			},
		],
	},
	{
		label: 'Используемые материалы',
		items: [
			{
				label: 'Сталь:',
				value: 227,
			},
			{
				label: 'Рукоять:',
				value: 112,
			},
		],
	},
	{
		label: 'Производство',
		items: [
			{
				label: 'Производство:',
				value: 'АиР',
			},
		],
	},
];
export const sliderProductsMock: IProductData[] = [
	{
		id: 'id-1',
		preview: productPreview1,
		name: 'Нож ножа  Лиса для ножа',
		price: 25,
		href: 'flashlight-23',
		desc: lorem,
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 5,
		gallery: fakeGallery,
		сharacteristic: сharacteristic,
	},
	{
		id: 'id-2',
		preview: productPreview2,
		name: 'Нож Лиса',
		price: 143,
		href: 'flashlight-2',
		desc: '',
		category: [mockCategory[4]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 3,
		gallery: fakeGallery,
		сharacteristic: сharacteristic,
	},
	{
		id: 'id-3',
		preview: productPreview1,
		name: 'Проект №1',
		price: 180,
		href: 'flashlight-proj-1',
		desc: lorem,
		category: [mockCategory[2]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 1,
		gallery: fakeGallery,
		сharacteristic: сharacteristic,
	},
	{
		id: 'id-4',
		preview: productPreview2,
		name: 'Фонарик',
		price: 2000,
		href: 'flashlight',
		desc: '',
		category: [mockCategory[5]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 2,
		gallery: fakeGallery,
	},
	{
		id: 'id-5',
		preview: productPreview1,
		name: 'Треска нож',
		price: 999,
		href: 'knife-tesak',
		desc: lorem,
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 2,
		gallery: fakeGallery,
	},
	{
		id: 'id-6',
		preview: productPreview2,
		name: 'Нож Тест',
		price: 1500,
		href: 'product-knife-test',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 3,
		gallery: fakeGallery,
	},
	{
		id: 'id-11',
		preview: productPreview1,
		name: 'Нож Лиса № 11',
		price: 200,
		href: 'knife-fox-number-11',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 1,
		сharacteristic: сharacteristic,
	},
	{
		id: 'id-22',
		preview: productPreview2,
		name: 'flashlight-lucky',
		price: 50,
		href: '#',
		desc: lorem,
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
		href: 'product-knife-lucky',
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
		href: 'flashlight-product-project',
		desc: '',
		category: [mockCategory[3]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 5,
		сharacteristic: сharacteristic,
	},
	{
		id: 'id-55',
		preview: productPreview1,
		name: 'Нож Лиса (дерево)',
		price: 1200,
		href: 'product-knife-fox-55',
		desc: lorem,
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
		href: 'product-knife-fox-66',
		desc: '',
		category: [mockCategory[2]],
		material: ['Орех', 'Алюминий'],
		countComments: 12,
		size: '95х18',
		usersStars: 4,
		сharacteristic: сharacteristic,
	},
];
