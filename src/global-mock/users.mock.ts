import userP1 from '../assets/images/user/user-p1-min.jpg';
import userP2 from '../assets/images/user/user-p2-min.jpg';
import { IUserData } from '../store/model/models';

export const users: IUserData[] = [
	{
		preview: userP1,
		name: 'Никита Панков',
		usName: 'nikita_pankov',
		id: 'user-id-1',
	},
	{
		preview: userP2,
		name: 'Мария Иванова',
		usName: 'maria_ivanova',
		id: 'user-id-2',
	},
	{
		preview: userP1,
		name: 'Артур Пиражков',
		usName: 'artur',
		id: 'user-id-3',
	},
	{
		preview: userP2,
		name: 'Вано',
		usName: 'vano',
		id: 'user-id-4',
	},
	{
		preview: userP1,
		name: 'Никита Павлоа',
		usName: 'nikita_pavlow',
		id: 'user-id-5',
	},
];
