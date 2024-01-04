import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ResetPasswordType } from '../../models/ForgotPasswordType';

const baseUrl = 'http://immutable858-001-site1.atempurl.com/api/ForgotPassword/';

interface ForgotPasswordState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    isSuccess: boolean,
    message: string,
    error: string
};

export const resetPassword = createAsyncThunk(
    'forgotPassword/resetPassword',
    async (forgotPasswordData: ResetPasswordType, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}ResetPassword`, forgotPasswordData);
            return (await response.data);
        } catch (error: any) {
            return rejectWithValue(error.response.data.Message);
        }
    }
);

const initialState = {
    loading: 'idle',
    isSuccess: false,
    message: '',
    error: ''
} as ForgotPasswordState;

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(resetPassword.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.message = action.payload.message;
            console.log('action in forgot password fulfilled addCase: ', action.payload);
        });
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.loading = 'failed';
            state.isSuccess = false;
            if (action.error) {
                state.error = action.payload as string;
            } else {
                state.error = 'An unknown error occurred';
            }
        });
    }
});

export default forgotPasswordSlice.reducer;