import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../utils/store.utils';
import { SINGLE_NEWS_KEY } from './single-news.const';
import { ISingleNewsState } from './single-news.model';

export const singleNewsSelector =
	createFeatureSelector<ISingleNewsState>(SINGLE_NEWS_KEY);

const error = createSelector(singleNewsSelector, ({ error }) => error);
const isLoading = createSelector(
	singleNewsSelector,
	({ isLoading }) => isLoading
);
const singleNews = createSelector(
	singleNewsSelector,
	({ singleNews }) => singleNews
);

export const toSingleNewsSelector = {
	isLoading,
	singleNews,
	error,
};
