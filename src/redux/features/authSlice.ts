import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppUserType } from '../../models/AppUserType';
import { LoginType } from '../../models/LoginType';

const baseurl = 'http://immutable858-001-site1.atempurl.com/api/ApplicationUser/';

interface AuthState {
    error: string,
    isSuccess: boolean,
    message: string,
    jwtToken: string,
    refreshToken: string,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};

export const userRegister = createAsyncThunk(
    'userRegister',
    async (body: AppUserType) => {
        const response = await axios.post(`${baseurl}CreateUser`, body)
        return (await response.data);
    }
);

export const userLogin = createAsyncThunk(
    'userLogin',
    async (body: LoginType) => {
        const response = await axios.post(`${baseurl}Login`, body);
        const token = response.data.jwtToken;
        localStorage.setItem('userToken', JSON.stringify(token));
        return (await response.data);
    }
);

const initialState = {
    error: "",
    isSuccess: false,
    message: "",
    jwtToken: '',
    refreshToken: '',
    loading: 'idle'
} as AuthState;

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userRegister.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(userRegister.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.loading = 'succeeded';
            if (action.payload.error) {
                state.error = action.payload.error;
            } else {
                state.message = action.payload.message;
            }
        });
        builder.addCase(userRegister.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });


        builder.addCase(userLogin.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isSuccess = true;
            state.loading = 'succeeded';
            state.jwtToken = action.payload.jwtToken;
            if (action.payload.error) {
                state.error = action.payload.error;
            } else {
                state.message = action.payload.message;
            }
        });
        builder.addCase(userLogin.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });
    }
});

export default authSlice.reducer;