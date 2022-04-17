import { IProductReview } from '../store/reducer/product/product.model';
import { users } from './users.mock';

export const reviewsProducts: IProductReview[] = [
	{
		user: users[2],
		comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed.`,
		userStars: 1,
		date: '2022-03-23',
		id: ' reviews-id-1',
	},
	{
		user: users[0],
		comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed.`,
		userStars: 3,
		date: '2021-03-23',
		id: ' reviews-id-2',
	},
	{
		user: users[1],
		comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor luctus et consectetur augue. 
        Dolor egestas nunc pellentesque hac fringilla. Enim hac scelerisque eu tellus feugiat vel. 
        Ut ac nec eleifend fermentum dictum ullamcorper phasellus at sed.`,
		userStars: 5,
		date: '2019-03-23',
		id: ' reviews-id-3',
	},
];
