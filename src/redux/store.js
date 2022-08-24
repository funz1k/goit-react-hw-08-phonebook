import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactSlice';

export const store = configureStore({
	reducer: {
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(contactsApi.middleware),
});