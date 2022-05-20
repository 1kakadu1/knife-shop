import { RoutsPath } from '../../routes/routes.model';

export const footerMenuTopMock = [
	{
		title: 'ИНФОРМАЦИЯ',
		menu: [
			{
				href: RoutsPath.products,
				name: 'Городские ножи в Городе и области',
			},
			{
				href: RoutsPath.products,
				name: 'Ножевые стали',
			},
			{
				href: RoutsPath.about,
				name: 'О нас',
			},
			{
				href: '#',
				name: 'Условия оплаты и доставки',
			},
			{
				href: RoutsPath.not_found,
				name: 'Политика конфиденциальности',
			},
		],
	},
	{
		title: 'СЛУЖБА ПОДДЕРЖКИ',
		menu: [
			{
				href: RoutsPath.contact,
				name: 'Контактная информация',
			},
			{
				href: RoutsPath.not_found,
				name: 'Возврат товара',
			},
			{
				href: RoutsPath.not_found,
				name: 'Карта сайта',
			},
		],
	},

	{
		title: 'ДОПОЛНИТЕЛЬНО',
		menu: [
			{
				href: RoutsPath.not_found,
				name: 'Подарочные сертификаты',
			},
			{
				href: RoutsPath.not_found,
				name: 'Партнеры',
			},
			{
				href: RoutsPath.products,
				name: 'Товары со скидкой',
			},
		],
	},
	/*
	//TODO: private route
	{
		title: 'ЛИЧНЫЙ КАБИНЕТ',
		menu: [
			{
				href: '#',
				name: 'Личный кабинет',
			},
			{
				href: '#',
				name: 'История заказов',
			},
			{
				href: '#',
				name: 'Мои закладки',
			},
			{
				href: '#',
				name: 'Рассылка новостей',
			},
		],
	},
	*/
];
