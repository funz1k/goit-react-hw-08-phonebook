import { createSlice } from "@reduxjs/toolkit";
import contactsData from '../data/contacts.json'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const contactSlise = createSlice({
    name: 'contacts',
    initialState: {
        items: contactsData,
        filter: '',
    },
    reducers: {
        addItem(state, action) {
            state.items.unshift(action.payload)
        },
        removeContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload)
        },
        filterContact(state, action) {
            state.filter = action.payload
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
    whiteList: ['items'],
}


export const contactReducer = persistReducer(
    persistConfig,
    contactSlise.reducer,
)

export const { addItem, removeContact, filterContact } = contactSlise.actions;