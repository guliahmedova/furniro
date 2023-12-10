import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductTypes } from '../../models/productTypes';
import { RootState } from '../app/store';

const baseurl = 'http://immutable858-001-site1.atempurl.com/api/UserProduct/';

export interface ProductState {
    entities: ProductTypes[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    product: ProductTypes,
    totalProductCount: number,
    newProducts: ProductTypes[],
    paginationProducts: ProductTypes[]
};

export const getProducts = createAsyncThunk(
    'getProducts',
    async (page: number) => {
        const response = await axios.get(`${baseurl}Products?ShowMore.TakeProduct=${page}`);
        return (await response.data);
    }
);

export const getProductById = createAsyncThunk(
    'productGetById',
    async (productId: number) => {
        const response = await axios.get(`${baseurl}getById/ProductPage?Id=${productId}`);
        return (await response.data);
    }
);

export const getNewProducts = createAsyncThunk(
    'getNewProducts',
    async (count: number) => {
        const response = await axios.get(`${baseurl}NewProducts?ShowMore.TakeProduct=${count}`);
        return (await response.data);
    }
);

export const getPaginationProducts = createAsyncThunk(
    'getPaginationProducts',
    async ({
        page,
        take,
        prompt= '',
        categoryName = '',
        isNew = true,
        productTags = '',
        productSizes='',
        productColors='',
        maxPrice ='',  
        minPrice = 0, 
        orderBy = ''
    }: {
        page: number,
        take: number,
        prompt?: string,
        categoryName?: string,
        isNew?: boolean,
        productTags?: string,
        productSizes?: string,
        productColors?: string,
        maxPrice?: number | string,
        minPrice?: number,
        orderBy?: string
    }) => {
        const response = await axios.get(`${baseurl}Products?Page=${page}&Prompt=${prompt}&ShowMore.TakeProduct=${take}&CategoryNames=${categoryName}&IsNew=${isNew}&ProductTags=${productTags}&ProductSizes=${productSizes}&ProductColors=${productColors}&MinPrice=${minPrice}&MaxPrice=${maxPrice}&OrderBy=${orderBy}`);
        return (await response.data);
    }
);

const initialState = {
    entities: [],
    loading: 'idle',
    product: {} as ProductTypes,
    totalProductCount: 0,
    newProducts: [],
    paginationProducts: []
} as ProductState;

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.entities = action.payload[0].products;
            state.loading = 'succeeded';
        });
        builder.addCase(getProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getNewProducts.fulfilled, (state, action) => {
            state.newProducts = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getNewProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getNewProducts.rejected, (state) => {
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

        builder.addCase(getPaginationProducts.fulfilled, (state, action) => {
            state.paginationProducts = action.payload[0].products;
            state.totalProductCount = action.payload[0].totalProductCount;
            state.loading = 'succeeded';
        });
        builder.addCase(getPaginationProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getPaginationProducts.rejected, (state) => {
            state.loading = 'failed'
        });
    },
});

export const selectProducts = (state: RootState) => state.product.entities;
export const selectProductById = (state: RootState) => state.product.product;
export const selectProductLoadingStatus = (state: RootState) => state.product.loading;
export default productSlice.reducer;