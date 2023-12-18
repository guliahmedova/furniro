import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ContactType } from '../../models/ContactTypr';

const baseUrl = 'http://immutable858-001-site1.atempurl.com/api/';

interface ContactState {
    message: string,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};

export const sendContactMessage = createAsyncThunk(
    'sendContactMessage',
    async (contactData: ContactType) => {
        const response = await axios.post(`${baseUrl}ContactMessage`, contactData);
        console.log("response: ", response);
        return (await response.data);
    }
);

const initialState = {
    message: '',
    loading: 'idle'
} as ContactState;

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(sendContactMessage.fulfilled, (state, action) => {
            state.message = action.payload.message;
            state.loading = 'succeeded';
        });
        builder.addCase(sendContactMessage.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(sendContactMessage.rejected, (state) => {
            state.loading = 'failed'
        });
    }
});

export default contactSlice.reducer;