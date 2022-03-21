import { ISelectOptions } from '../../components/inputs/selsect/select.model';

export const sortMock: ISelectOptions[] = [
	{
		name: 'По популярности',
		value: 'popular',
	},
	{
		name: 'От дешевых к дорогим',
		value: 'price-asc',
	},
	{
		name: 'От дорогих к дешевым',
		value: 'price-desc',
	},
];
