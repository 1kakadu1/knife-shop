import { createSlice } from '@reduxjs/toolkit';
import { IPostData } from '../../../components/ cards/card-post/card-post.model';
import { NEWS_KEY } from './news.const';
import { newsStateMock } from './news.mock';
import { INewsState } from './news.model';

const setNews = (state: INewsState, { payload }: { payload: IPostData[] }) => {
	state.news = payload;
};

const newsRequest = (state: INewsState) => {
	state.isLoading = true;
	state.error = '';
};

const newsRequestSuccess = (
	state: INewsState,
	{ payload }: { payload: IPostData[] }
) => {
	state.news = payload;
	state.isLoading = false;
	state.error = '';
};

const newsRequestFailed = (
	state: INewsState,
	{ payload }: { payload: string }
) => {
	state.isLoading = false;
	state.error = payload;
};

export const newsSlice = createSlice({
	name: NEWS_KEY,
	initialState: newsStateMock,
	reducers: {
		newsRequestFailed,
		setNews,
		newsRequest,
		newsRequestSuccess,
	},
});

export const toNewsAction = newsSlice.actions;
