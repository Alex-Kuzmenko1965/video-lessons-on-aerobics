import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const pendingReducer = state => {
  state.isLoading = true;
};

const rejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
      isLoading: false,
      error: null
  },   
  extraReducers: {
    [fetchContacts.pending]: pendingReducer,
    [addContact.pending]: pendingReducer,
    [deleteContact.pending]: pendingReducer,    

    [fetchContacts.rejected]: rejectedReducer,
    [addContact.rejected]: rejectedReducer,
    [deleteContact.rejected]: rejectedReducer,

    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [addContact.fulfilled](state, action) {
      state.contacts.unshift(action.payload);
      state.isLoading = false;
      state.error = null;
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
		);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;