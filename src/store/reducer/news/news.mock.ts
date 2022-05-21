import { cardPostsMock } from '../../../global-mock/card-post.mock';
import { INewsState } from './news.model';

export const newsStateMock: INewsState = {
	isLoading: false,
	error: '',
	news: cardPostsMock,
	filter: {},
};
