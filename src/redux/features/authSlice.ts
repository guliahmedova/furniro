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
    userName: string,
    firstName: string,
    lastName: string,
    email: string,
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
        console.log(response.data);
        localStorage.setItem('userToken', JSON.stringify(token));
        return (await response.data);
    }
);

export const updateUser = createAsyncThunk(
    'updateUser',
    async (body: AppUserType) => {
        const response = await axios.post(`${baseurl}UpdateUser`, body)
        return (await response.data);
    }
);

const initialState = {
    error: "",
    isSuccess: false,
    message: "",
    jwtToken: '',
    refreshToken: '',
    loading: 'idle',
    userName: '',
    lastName: '',
    firstName: '',
    email: ''
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
            state.message = action.payload.message;
            state.isSuccess = true;
            state.loading = 'succeeded';
            state.firstName = action.payload.firstName;
            state.userName = action.payload.userName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.jwtToken = action.payload.jwtToken;
        });
        builder.addCase(userLogin.rejected, (state) => {
            state.isSuccess = false;
            state.loading = 'failed';
        });
    }
});

export default authSlice.reducer;