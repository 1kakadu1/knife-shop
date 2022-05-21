import { IPostData } from '../../../components/ cards/card-post/card-post.model';
import { IUserData } from '../product/product.model';

export interface ISingleNewsState {
	isLoading: boolean;
	error: string;
	singleNews?: IPostData;
}

export interface ISingleNewsReview {
	user: IUserData;
	comment: string;
	userStars?: number;
	date: string;
	id: string;
}

export interface IGalleryNewsData {
	original: string;
	thumbnail: string;
}
