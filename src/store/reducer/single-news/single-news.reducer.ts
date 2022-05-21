import { createSlice } from '@reduxjs/toolkit';
import { IPostData } from '../../../components/ cards/card-post/card-post.model';

import { SINGLE_NEWS_KEY } from './single-news.const';
import { singleNewsStateMock } from './single-news.mock';
import { ISingleNewsState } from './single-news.model';

const setSingleNews = (
	state: ISingleNewsState,
	{ payload }: { payload: IPostData | undefined }
) => {
	state.singleNews = payload;
};

const singleNewsRequest = (state: ISingleNewsState) => {
	state.isLoading = true;
	state.error = '';
};

const singleNewsRequestSuccess = (
	state: ISingleNewsState,
	{ payload }: { payload: IPostData }
) => {
	state.singleNews = payload;
	state.isLoading = false;
	state.error = '';
};

const singleNewsRequestFailed = (
	state: ISingleNewsState,
	{ payload }: { payload: string }
) => {
	state.isLoading = false;
	state.error = payload;
};

export const singleNewsSlice = createSlice({
	name: SINGLE_NEWS_KEY,
	initialState: singleNewsStateMock,
	reducers: {
		setSingleNews,
		singleNewsRequest,
		singleNewsRequestSuccess,
		singleNewsRequestFailed,
	},
});

export const toSingleNewsAction = singleNewsSlice.actions;
