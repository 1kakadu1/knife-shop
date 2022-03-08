import { ICardInfoProps } from '../../ cards/card-info/card-info.model';
import cat1 from '../../../assets/images/catalog/cat-1.png';
import cat1Small from '../../../assets/images/catalog/cat-1-small.png';
import cat2 from '../../../assets/images/catalog/cat-2.png';
import cat2Small from '../../../assets/images/catalog/cat-2-small.png';
import cat3 from '../../../assets/images/catalog/cat-3.png';
import cat4 from '../../../assets/images/catalog/cat-4.png';
import cat5 from '../../../assets/images/catalog/cat-5.png';
import cat6 from '../../../assets/images/catalog/cat-6.png';
import cat7 from '../../../assets/images/catalog/cat-7.png';
import cat7Small from '../../../assets/images/catalog/cat-7-small.png';
import cat8 from '../../../assets/images/catalog/cat-8.png';

export const mockCatalogTop: ICardInfoProps[] = [
	{
		title: 'Тактические фонари',
		preview: [
			{
				media: '(max-width: 420px)',
				src: cat7Small,
			},
			{
				src: cat7,
			},
		],
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		link: '#',
	},
	{
		title: 'Палобные',
		preview: cat8,
		desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		link: '#',
	},
];

export const mockCatalogPopular: ICardInfoProps[] = [
	{
		title: 'Каталог ножей',
		list: ['Разделочные', 'Туристические', 'Охотничьи'],
		preview: [
			{
				media: '(max-width: 420px)',
				src: cat1Small,
			},
			{
				src: cat1,
			},
		],
	},
	{
		title: 'Среднеклинковое',
		list: ['Разделочные', 'Туристические', 'Охотничьи'],
		preview: [
			{
				media: '(max-width: 420px)',
				src: cat2Small,
			},
			{
				src: cat2,
			},
		],
	},
	{
		title: 'Длинноклинковое оружие',
		list: ['Разделочные', 'Туристические', 'Охотничьи'],
		preview: cat3,
	},
	{
		title: 'Сувенирные изделия',
		list: ['Разделочные', 'Туристические', 'Охотничьи'],
		preview: cat4,
	},
	{
		title: 'Сопутствующие',
		list: ['Разделочные', 'Туристические', 'Охотничьи'],
		preview: cat5,
	},
	{
		title: 'Ножевая мастерская',
		list: ['Разделочные', 'Туристические', 'Охотничьи'],
		preview: cat6,
	},
];
