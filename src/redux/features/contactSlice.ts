import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ContactType } from '../../models/ContactTypr';
import instance from './apiConfig';
const token = localStorage.getItem('userToken')?.replace(/['"]+/g, '');

interface ContactState {
    message: string,
    error: string,
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
    async (contactData: ContactType, { rejectWithValue }) => {
        try {
            const response = await instance.post(`ContactMessage`,
                contactData,
                {
                    headers: {
                        "Accept": "/",
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
            return (await response.data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getContactDatas = createAsyncThunk(
    'contact/getContactDatas',
    async () => {
        const response = await instance.get(`Contact`);
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
    weekendWorkingTime: '',
    error: ''
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
            state.loading = 'pending';
        });
        builder.addCase(sendContactMessage.rejected, (state, action) => {
            state.loading = 'failed';
            if (action.error) {
                state.error = action.payload as string;
            } else {
                state.error = 'An unknown error occurred';
            }
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