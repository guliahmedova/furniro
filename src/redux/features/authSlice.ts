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
    userId: number ,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};

export const userRegister = createAsyncThunk('userRegister', async (body: AppUserType, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseurl}CreateUser`, body);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data && error.response.data.Message) {
            return rejectWithValue(error.response.data.Message);
        } else {
            return rejectWithValue('An unknown error occurred');
        }
    }
});

export const userLogin = createAsyncThunk(
    'userLogin',
    async (body: LoginType) => {
        const response = await axios.post(`${baseurl}Login`, body);
        const token = response.data.jwtToken;
        const userId = response.data.userId;
        localStorage.setItem('UserId', JSON.stringify(userId));
        localStorage.setItem('userToken', JSON.stringify(token));
        return (await response.data);
    }
);

export const updateUser = createAsyncThunk(
    'updateUser',
    async (body: AppUserType) => {
        const response = await axios.put(`${baseurl}UpdateUser`, body);
        return (await response.data);
    }
);

export const getUserById = createAsyncThunk(
    'getUserById',
    async (userId: number) => {
        const response = await axios.get(`${baseurl}${userId}`);
        return (await response.data);
    }
);

const initialState = {
    error: '',
    isSuccess: false,
    message: "",
    jwtToken: '',
    refreshToken: '',
    loading: 'idle',
    userName: '',
    lastName: '',
    firstName: '',
    email: '',
    userId: 0
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
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.message = action.payload.message;
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
            state.userId = action.payload.userId;
            state.message = action.payload.message;
            state.jwtToken = action.payload.jwtToken;
        });
        builder.addCase(userLogin.rejected, (state) => {
            state.isSuccess = false;
            state.loading = 'failed';
        });

        builder.addCase(updateUser.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(updateUser.fulfilled, (state) => {
            state.loading = 'succeeded';
        });
        builder.addCase(updateUser.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });

        builder.addCase(getUserById.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getUserById.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
        });
        builder.addCase(getUserById.rejected, (state) => {
            state.loading = 'failed';
        });
    }
});

export default authSlice.reducer;