import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DescriptionType } from '../../models/DescriptionType';
import { ProductTypes } from '../../models/productTypes';
import instance from './apiConfig';

interface ProductState {
    products: ProductTypes[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    totalProductCount: number,
    productID: number
};

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (take: number) => {
        const response = await instance.get(`UserProduct/Products?ShowMore.Take=${take}`);
        return (await response.data);
    }
);

const initialState = {
    products: [],
    loading: 'idle',
    product: {} as ProductTypes,
    totalProductCount: 0,
    productDescriptions: {} as DescriptionType,
    productID: 0,
    relatedProducts: [],
} as ProductState;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductIDByCLick(state, action) {
            state.productID = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload[0].products;
            state.totalProductCount = action.payload[0].totalProductCount;
            state.loading = 'succeeded';
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = 'failed'
        });
    },
});

export const { getProductIDByCLick } = productSlice.actions;
export default productSlice.reducer;