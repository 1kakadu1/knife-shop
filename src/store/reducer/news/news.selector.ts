import { createSelector } from '@reduxjs/toolkit';
import { createFeatureSelector } from '../../../utils/store.utils';
import { NEWS_KEY } from './news.const';
import { INewsState } from './news.model';

export const newsSelector = createFeatureSelector<INewsState>(NEWS_KEY);

const error = createSelector(newsSelector, ({ error }) => error);
const isLoading = createSelector(newsSelector, ({ isLoading }) => isLoading);
const news = createSelector(newsSelector, ({ news }) => news);
const total = createSelector(newsSelector, ({ news }) => news.length);

const newsLimit = (start: number, end: number) =>
	createSelector(newsSelector, ({ news }) => news.slice(start, end));
const getNewsBySlug = (slug: string) =>
	createSelector(newsSelector, ({ news }) => news.find((x) => x.href === slug));

export const toNewsSelector = {
	isLoading,
	news,
	error,
	newsLimit,
	total,
	getNewsBySlug,
};
