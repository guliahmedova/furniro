import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ResetPasswordType } from '../../models/ForgotPasswordType';
import instance from './apiConfig';

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
            const response = await instance.post(`ForgotPassword/ResetPassword`, forgotPasswordData);
            return (await response.data);
        } catch (error: any) {
            return rejectWithValue(error.response.data.Message);
        }
    }
);

export const sendOtpEmail = createAsyncThunk(
    'forgotPassword/sendOtpEmail',
    async (email: string, { rejectWithValue }) => {
        try {
            const response = await instance.post(`ForgotPassword/SendOTPEmail`, {
                email: email
            });
            return (await response.data);
        } catch (error: any) {
            return rejectWithValue(error.response.data.Message);
        }
    }
);

export const otpConfirmation = createAsyncThunk(
    'forgotPassword/otpConfirmation',
    async ({ email, otpToken }: { email: string, otpToken: string }, { rejectWithValue }) => {
        try {
            const response = await instance.post(`ForgotPassword/OtpConfirmation`, {
                email: email,
                otpToken: otpToken
            });
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
    reducers: {
    },
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

        builder.addCase(sendOtpEmail.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(sendOtpEmail.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.message = action.payload;
        });
        builder.addCase(sendOtpEmail.rejected, (state, action) => {
            state.loading = 'failed';
            state.isSuccess = false;
            if (action.error) {
                state.error = action.payload as string;
            } else {
                state.error = 'An unknown error occurred';
            }
        });

        builder.addCase(otpConfirmation.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(otpConfirmation.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
        });
        builder.addCase(otpConfirmation.rejected, (state, action) => {
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