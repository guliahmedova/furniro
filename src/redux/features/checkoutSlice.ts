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
    relatedProvinces: ProvinceType[]
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

export const getRelatedProvince = createAsyncThunk(
    'checkout/getRelatedProvince',
    async (countryId: number) => {
        const response = await axios.get(`${baseUrl}Province/GetRelatedProvince/${countryId}`);
        return (await response.data);
    }
);

export const addCheckout = createAsyncThunk(
    'checkout/addCheckout',
    async (checkoutData: CheckoutType, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseUrl}Checkout`, checkoutData);
            return (await response.data);
        } catch (error: any) {
            console.log('error in checkoutslice: ', error.message);
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    loading: 'idle',
    countries: [],
    provinces: [],
    isSuccess: false,
    relatedProvinces: []
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

        builder.addCase(getRelatedProvince.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getRelatedProvince.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.relatedProvinces = action.payload;
        });
        builder.addCase(getRelatedProvince.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });
    }
});

export default checkoutSlice.reducer;