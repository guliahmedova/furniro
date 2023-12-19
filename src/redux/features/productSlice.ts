import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductTypes } from '../../models/productTypes';
import { RootState } from '../app/store';
import { DescriptionType } from '../../models/DescriptionType';

const baseurl = 'http://immutable858-001-site1.atempurl.com/api/UserProduct/';

interface ProductState {
    entities: ProductTypes[]
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    product: ProductTypes,
    totalProductCount: number,
    newProducts: ProductTypes[],
    paginationProducts: ProductTypes[],
    productDescriptions: DescriptionType,
    productID: number,
    relatedProducts: ProductTypes[]
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
    async ({ productID, sizeID }: { productID: number, sizeID: number }) => {
        const response = await axios.get(`${baseurl}getById/ProductPage?Id=${productID}&SizeId=${sizeID}`);
        return response.data;
    }
);

export const getNewProducts = createAsyncThunk(
    'getNewProducts',
    async (count: number) => {
        const response = await axios.get(`${baseurl}NewProducts?ShowMore.TakeProduct=${count}`);
        return (await response.data);
    }
);

export const getFilterProducts = createAsyncThunk(
    'getPaginationProducts',
    async ({
        page,
        take,
        categoryName = '',
        isNew = true,
        productTags = '',
        productSizes = '',
        productColors = '',
        maxPrice = 0,
        minPrice = 0,
        orderBy = ''
    }: {
        page: number,
        take: number,
        categoryName?: string,
        isNew?: boolean | null,
        productTags?: string,
        productSizes?: string,
        productColors?: string,
        maxPrice?: number,
        minPrice?: number,
        orderBy?: string
    }) => {
        const response = await axios.get(`${baseurl}Products?Page=${page}${take > 0 ? `&ShowMore.TakeProduct=${take}` : ''}${categoryName.length > 0 ? `&CategoryNames=${categoryName}` : ''}${typeof (isNew) === 'boolean' ? `&IsNew=${isNew}` : ''}${productTags.length > 0 ? `&ProductTags=${productTags}` : ''}${productSizes.length > 0 ? `&ProductSizes=${productSizes}` : ''}${productColors.length > 0 ? `&ProductColors=${productColors}` : ''}${minPrice > 0 ? `&MinPrice=${minPrice}` : ''}${maxPrice ? `&MaxPrice=${maxPrice}` : ''}${orderBy.length > 0 ? `&OrderBy=${orderBy}` : ''}`);
        return (await response.data);
    }
);

export const getProductDescriptionById = createAsyncThunk(
    'getProductDescriptionById',
    async (productId: string) => {
        const response = await axios.get(`${baseurl}getById/Description?Id=${productId}`);
        return (await response.data);
    }
);

export const getRelatedProducts = createAsyncThunk(
    'getRelatedProducts',
    async ({ productId, take }: { productId: string, take: number }) => {
        const response = await axios.get(`${baseurl}RelatedProducts?ShowMore.TakeProduct=${take}&MainProductId=${productId}`);
        return (await response.data);
    }
);

const initialState = {
    entities: [],
    loading: 'idle',
    product: {} as ProductTypes,
    totalProductCount: 0,
    newProducts: [],
    paginationProducts: [],
    productDescriptions: {} as DescriptionType,
    productID: 0,
    relatedProducts: []
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
            state.entities = action.payload[0].products;
            state.totalProductCount = action.payload[0].totalProductCount;
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

        builder.addCase(getFilterProducts.fulfilled, (state, action) => {
            state.paginationProducts = action.payload[0].products;
            state.totalProductCount = action.payload[0].totalProductCount;
            state.loading = 'succeeded';
        });
        builder.addCase(getFilterProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getFilterProducts.rejected, (state) => {
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

export const { getProductIDByCLick } = productSlice.actions;
export const selectProducts = (state: RootState) => state.product.entities;
export const selectProductById = (state: RootState) => state.product.product;
export const selectProductLoadingStatus = (state: RootState) => state.product.loading;
export default productSlice.reducer;