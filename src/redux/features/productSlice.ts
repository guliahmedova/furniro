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
    searchText: string,
};

export const getProducts = createAsyncThunk(
    'OurProducts',
    async (page: number) => {
        const response = await axios.get(`http://immutable858-001-site1.atempurl.com/api/UserProduct/OurProducts?Page=${page}`);
        return (await response.data);
    }
);

export const getProductById = createAsyncThunk(
    'productGetById',
    async (productId: number) => {
        const response = await axios.get(`http://immutable858-001-site1.atempurl.com/api/UserProduct/getById/ProductPage?Id=${productId}`);
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
            state.filteredProducts = state.entities.filter((product) => product.title.toLowerCase().startsWith(state.searchText.toLocaleLowerCase()));
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