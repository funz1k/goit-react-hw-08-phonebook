import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
	reducerPath: 'contacts',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://6304abbc761a3bce77ed0518.mockapi.io',
	}),
	tagTypes: ['Contact'],
	endpoints: builder => ({
		getContacts: builder.query({
			query: () => '/contacts',
			providesTags: ['Contact'],
		}),
		deleteContact: builder.mutation({
			query: contactId => ({
				url: `/contacts/${contactId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Contact'],
		}),
		createContact: builder.mutation({
			query: ({ name, number }) => ({
				url: '/contacts',
				method: 'POST',
				body: {
					name,
					number,
				},
			}),
			invalidatesTags: ['Contact'],
		}),
	}),
});

export const {
	useGetContactsQuery,
	useDeleteContactMutation,
	useCreateContactMutation,
} = contactsApi;


// import { createSlice } from "@reduxjs/toolkit";
// import contactsData from '../data/contacts.json'
// import storage from 'redux-persist/lib/storage'
// import { persistReducer } from 'redux-persist'

// const contactSlise = createSlice({
//     name: 'contacts',
//     initialState: {
//         items: contactsData,
//         filter: '',
//     },
//     reducers: {
//         addItem(state, action) {
//             state.items.unshift(action.payload)
//         },
//         removeContact(state, action) {
//             state.items = state.items.filter(contact => contact.id !== action.payload)
//         },
//         filterContact(state, action) {
//             state.filter = action.payload
//         }
//     }
// });

// const persistConfig = {
//     key: 'contacts',
//     storage,
//     whiteList: ['items'],
// }


// export const contactReducer = persistReducer(
//     persistConfig,
//     contactSlise.reducer,
// )

// export const { addItem, removeContact, filterContact } = contactSlise.actions;