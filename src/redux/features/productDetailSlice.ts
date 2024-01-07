import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductTypes } from '../../models/productTypes';
import { DescriptionType } from '../../models/DescriptionType';

const baseurl = 'http://immutable858-001-site1.atempurl.com/api/';

interface ProductDetail {
    product: ProductTypes,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    relatedProducts: ProductTypes[],
    productDescriptions: DescriptionType,
};

export const getProductById = createAsyncThunk(
    'productDetail/getProductById',
    async ({ productID, sizeID }: { productID: number, sizeID: number }) => {
        const response = await axios.get(`${baseurl}UserProduct/getById/ProductPage?Id=${productID}&SizeId=${sizeID}`);
        return response.data;
    }
);

export const getProductDescriptionById = createAsyncThunk(
    'productDetail/getProductDescriptionById',
    async (productId: number) => {
        const response = await axios.get(`${baseurl}UserProduct/getById/Description?Id=${productId}`);
        return (await response.data);
    }
);

export const getRelatedProducts = createAsyncThunk(
    'productDetail/getRelatedProducts',
    async ({ productId, take }: { productId: string, take: number }) => {
        const response = await axios.get(`${baseurl}UserProduct/RelatedProducts?ShowMore.Take=${take}&MainProductId=${productId}`);
        return (await response.data);
    }
);

const initialState = {
    loading: 'idle',
    product: {} as ProductTypes,
    productDescriptions: {} as DescriptionType,
    relatedProducts: [],
} as ProductDetail;

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
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

        builder.addCase(getProductDescriptionById.fulfilled, (state, action) => {
            state.productDescriptions = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getProductDescriptionById.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getProductDescriptionById.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getRelatedProducts.fulfilled, (state, action) => {
            state.relatedProducts = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getRelatedProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getRelatedProducts.rejected, (state) => {
            state.loading = 'failed'
        });
    },
});

export default productDetailSlice.reducer;