import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ContactType } from '../../models/ContactTypr';

const baseUrl = 'http://immutable858-001-site1.atempurl.com/api/';

interface ContactState {
    message: string,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    id: number,
    mobile: string,
    hotline: string,
    address: string,
    weekdayWorkingTime: string,
    weekendWorkingTime: string
};

export const sendContactMessage = createAsyncThunk(
    'contact/sendContactMessage',
    async (contactData: ContactType) => {
        const response = await axios.post(`${baseUrl}ContactMessage`, contactData);
        return (await response.data);
    }
);

export const getContactDatas = createAsyncThunk(
    'contact/getContactDatas',
    async () => {
        const response = await axios.get(`${baseUrl}Contact`);
        return (await response.data);
    }
);

const initialState = {
    message: '',
    loading: 'idle', 
    id: 0,
    mobile: '',
    hotline: '',
    address: '',
    weekdayWorkingTime: '',
    weekendWorkingTime: ''
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


        builder.addCase(getContactDatas.fulfilled, (state, action) => {
            state.id = action.payload?.[0].id;
            state.mobile = action.payload?.[0].mobile;
            state.hotline = action.payload?.[0].hotline;
            state.address = action.payload?.[0].address;
            state.weekdayWorkingTime = action.payload?.[0].weekdayWorkingTime;
            state.weekendWorkingTime = action.payload?.[0].weekendWorkingTime;
            state.loading = 'succeeded';
        });
        builder.addCase(getContactDatas.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getContactDatas.rejected, (state) => {
            state.loading = 'failed'
        });
    }
});

export default contactSlice.reducer;