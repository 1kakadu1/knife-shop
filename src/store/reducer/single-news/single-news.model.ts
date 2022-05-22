import { IPostData } from '../../../components/ cards/card-post/card-post.model';

export interface ISingleNewsState {
	isLoading: boolean;
	error: string;
	singleNews?: IPostData;
}

export interface IGalleryNewsData {
	original: string;
	thumbnail: string;
}
