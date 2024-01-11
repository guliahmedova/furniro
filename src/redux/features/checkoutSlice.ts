import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CheckoutType } from '../../models/CheckoutTypes';
import { CountryType } from '../../models/CountryType';
import { ProvinceType } from '../../models/ProvinceType';
import instance from './apiConfig';
const token = localStorage.getItem('userToken')?.replace(/['"]+/g, '');

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
        const response = await instance.get(`Country`, {
            headers: {
                "Accept": "/",
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return (await response.data);
    }
);


export const getRelatedProvince = createAsyncThunk(
    'checkout/getRelatedProvince',
    async (countryId: number) => {
        const response = await instance.get(`Province/GetRelatedProvince/${countryId}`, {
            headers: {
                "Accept": "/",
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return (await response.data);
    }
);

export const addCheckout = createAsyncThunk(
    'checkout/addCheckout',
    async (checkoutData: CheckoutType, { rejectWithValue }) => {
        try {
            const response = await instance.post(`Checkout`, checkoutData, {
                headers: {
                    "Accept": "/",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
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