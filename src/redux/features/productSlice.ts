import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ProductState } from '../../models/productState';
import axios from 'axios';
import { RootState } from '../app/store';

export const getProducts = createAsyncThunk(
    'products',
    async () => {
        const response = await axios.get('https://65573b01bd4bcef8b6124977.mockapi.io/products');
        return (await response.data);
    }
);

const initialState = {
    entities: [],
    loading: 'idle',
} as ProductState;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.entities = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = 'failed'
        });
    },
})

export const selectProducts = (state: RootState) => state.product.entities;
export const selectProductLoadingStatus = (state: RootState) => state.product.loading;
export default productSlice.reducer;
