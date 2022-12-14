import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
	reducerPath: 'contacts',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://connections-api.herokuapp.com',
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.token
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}

			return headers
		},
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
