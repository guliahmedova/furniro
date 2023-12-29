import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CountryType } from '../../models/CountryType';
import { ProvinceType } from '../../models/ProvinceType';
import { CheckoutType } from '../../models/CheckoutTypes';

const baseUrl = "http://immutable858-001-site1.atempurl.com/api/";

interface CheckoutState {
    countries: CountryType[],
    provinces: ProvinceType[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    isSuccess: boolean,
    message: string
};

export const getAllCountries = createAsyncThunk(
    'checkout/getAllCountries',
    async () => {
        const response = await axios.get(`${baseUrl}Country`);
        return (await response.data);
    }
);

export const getAllProvinces = createAsyncThunk(
    'checkout/getAllProvinces',
    async () => {
        const response = await axios.get(`${baseUrl}Province`);
        return (await response.data);
    }
);

export const addCheckout = createAsyncThunk(
    'checkout/addCheckout',
    async (checkoutData: CheckoutType) => {
        const response = await axios.post(`${baseUrl}Checkout/ClearCart`, checkoutData);
        return (await response.data);
    }
);

export const clearCart = createAsyncThunk(
    'checkout/clearCart',
    async (appUserId: number) => {
        const response = await axios.post(`${baseUrl}ClearCart`, appUserId);
        return (await response.data);
    }
);

const initialState = {
    loading: 'idle',
    countries: [],
    provinces: [],
    isSuccess: false,
    message: ''
} as CheckoutState;

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCountries.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getAllCountries.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.countries = action.payload;
        });
        builder.addCase(getAllCountries.rejected, (state) => {
            state.loading = 'failed';
        });

        builder.addCase(getAllProvinces.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getAllProvinces.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.provinces = action.payload;
        });
        builder.addCase(getAllProvinces.rejected, (state) => {
            state.loading = 'failed';
        });

        builder.addCase(addCheckout.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(addCheckout.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
        });
        builder.addCase(addCheckout.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });

        builder.addCase(clearCart.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(clearCart.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.message = action.payload;
        });
        builder.addCase(clearCart.rejected, (state) => {
            state.loading = 'failed';
        });
    }
});

export default checkoutSlice.reducer;