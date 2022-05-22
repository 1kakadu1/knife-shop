import { IPostData } from '../components/ cards/card-post/card-post.model';
import post1 from '../assets/images/posts/post-1-min.png';
import post2 from '../assets/images/posts/post-1-min.png';
import post3 from '../assets/images/posts/post-3-min.png';
import post4 from '../assets/images/posts/post-4-min.png';
import { reviewsProducts } from './reviews.mock';

export const cardPostsMock: IPostData[] = [
	{
		title: 'Все о ножах: как правильно выбрать',
		desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed.`,
		date: '21.03.2022',
		preview: post1,
		id: 'post-1',
		href: 'all-about-knives-how-to-choose-the-right-one',
		reviews: [reviewsProducts[2]],
	},
	{
		title: 'Как правильно выбрать фонарь',
		desc: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br/><h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed.</p>`,
		date: '21.03.2022',
		preview: post2,
		id: 'post-2',
		href: 'how-to-choose-the-right-lantern',
		reviews: [reviewsProducts[0], reviewsProducts[2]],
	},
	{
		title: 'Кухонные ножи для хозяек',
		desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla.`,
		date: '21.03.2022',
		preview: post3,
		id: 'post-3',
		href: 'kitchen-knives-for-housewives-2',
		reviews: [reviewsProducts[0], reviewsProducts[2]],
	},
	{
		title: 'Кухонные ножи для хозяек',
		desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel.`,
		date: '21.03.2022',
		preview: post4,
		id: 'post-4',
		href: 'kitchen-knives-for-housewives',
		reviews: [reviewsProducts[0]],
	},
];
