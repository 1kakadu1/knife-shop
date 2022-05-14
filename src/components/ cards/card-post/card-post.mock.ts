import { IPostData } from './card-post.model';
import post1 from '../../../assets/images/posts/post-1-min.png';
import post2 from '../../../assets/images/posts/post-1-min.png';
import post3 from '../../../assets/images/posts/post-3-min.png';
import post4 from '../../../assets/images/posts/post-4-min.png';

export const cardPostsMock: IPostData[] = [
	{
		title: 'Все о ножах: как правильно выбрать',
		desc: '',
		date: '21.03.2022',
		preview: post1,
		id: 'post-1',
	},
	{
		title: 'Как правильно выбрать фонарь',
		desc: '',
		date: '21.03.2022',
		preview: post2,
		id: 'post-2',
	},
	{
		title: 'Кухонные ножи для хозяек',
		desc: '',
		date: '21.03.2022',
		preview: post3,
		id: 'post-3',
	},
	{
		title: 'Кухонные ножи для хозяек',
		desc: '',
		date: '21.03.2022',
		preview: post4,
		id: 'post-4',
	},
];
