import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './ContactSlice';

export const store = configureStore({
	reducer: {
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(contactsApi.middleware),
});