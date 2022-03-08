import {
	combineReducers,
	configureStore,
	getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { slices } from './slice';
import logger from 'redux-logger';

const middlewareArr: any = [];

if (process.env.NODE_ENV === `development`) {
	middlewareArr.push(logger);
}

const createRootReducer = () =>
	combineReducers({
		...slices,
	});

export const store = configureStore({
	reducer: createRootReducer(),
	middleware: [...middlewareArr, ...getDefaultMiddleware()],
});
