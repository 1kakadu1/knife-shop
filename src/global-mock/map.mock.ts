import { IMarkShop } from '../pages/contact/contact.model';
import c1 from '../assets/images/c1.png';

export const contactInitMap = {
	longitude: -122.42243408094265,
	latitude: 37.791834075059555,
	zoom: 12,
};

export const contactMarksMap: IMarkShop[] = [
	{
		id: '1',
		name: 'Магазин №1',
		desc: 'Работаем с 9.00 - 18.00',
		point: {
			latitude: 37.8,
			longitude: -122.4,
		},
		address: 'Address №1',
		emails: ['shop@mail.sh'],
		phones: ['+5-900-999-99-99'],
	},
	{
		id: '2',
		name: 'Пункт выдачи №1',
		preview: c1,
		desc: 'Работаем круглосуточно',
		point: {
			latitude: 37.79708063296127,
			longitude: -122.44256399934554,
		},
		address: 'Address №2',
		emails: ['shop@mail.sh', 'shop-location@mail.sh'],
		phones: ['+4-900-999-99-99'],
	},
	{
		id: '3',
		name: 'Магазин №2',
		desc: 'Работаем с 7.00 - 20.00. Перерыв 12.00 - 14.00',
		point: {
			latitude: 37.77911188697223,
			longitude: -122.42012923226449,
		},
		address: 'Address №3',
		emails: ['shop-3@mail.sh'],
		phones: ['+1-900-999-99-99', '+2-900-999-99-99', '+3-900-999-99-99'],
	},
];
