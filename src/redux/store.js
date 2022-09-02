import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/contacts/ContactSlice';
import { authReducer } from './auth/auth-slice';
import {
	persistStore,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		[contactsApi.reducerPath]: contactsApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(contactsApi.middleware),

});

export const persistor = persistStore(store);