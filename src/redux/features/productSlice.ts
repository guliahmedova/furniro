import { PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../app/store';
import { ProductTypes } from '../../models/productTypes';

export interface ProductState {
    entities: ProductTypes[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    product: ProductTypes,
    filteredProducts: ProductTypes[],
    searchText: string
};

export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        const response = await axios.get('https://65573b01bd4bcef8b6124977.mockapi.io/products');
        return (await response.data);
    }
);

export const getProductById = createAsyncThunk(
    'getProductById',
    async (productId: string) => {
        const response = await axios.get(`https://65573b01bd4bcef8b6124977.mockapi.io/products/${productId}`);
        return (await response.data);
    }
);

const initialState = {
    entities: [],
    loading: 'idle',
    product: {} as ProductTypes,
    searchText: "",
    filteredProducts: [],
} as ProductState;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
            state.filteredProducts = state.entities.filter((product) => product.Title.toLowerCase().startsWith(state.searchText.toLocaleLowerCase()));
        }
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

        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getProductById.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProductById.rejected, (state) => {
            state.loading = 'failed'
        });
    },
})

export const selectProducts = (state: RootState) => state.product.entities;
export const selectProductById = (state: RootState) => state.product.product;
export const selectProductLoadingStatus = (state: RootState) => state.product.loading;
export const { addSearchText } = productSlice.actions;
export default productSlice.reducer;