import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CategoryType } from '../../models/CategoryType';
import { ColorType } from '../../models/ColorType';
import { Option } from '../../models/OptionType';
import { SizeType } from '../../models/SizeType';
import { TagType } from '../../models/TagType';
import { ProductTypes } from '../../models/productTypes';
import instance from './apiConfig';

interface ProductState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    filteredProducts: ProductTypes[],
    totalProductCount: number,
    sizes: SizeType[],
    colors: ColorType[],
    categories: CategoryType[],
    tags: TagType[],
};

export const getAllSizes = createAsyncThunk(
    'shop/getAllSizes',
    async () => {
        const response = await instance.get(`Size/getAll`);
        return (await response.data);
    }
);

export const getAllColors = createAsyncThunk(
    'shop/getAllColors',
    async () => {
        const response = await instance.get(`Color/getAll`);
        return (await response.data);
    }
);

export const getAllTags = createAsyncThunk(
    'shop/getAllTags',
    async () => {
        const response = await instance.get(`Tag/getAll`);
        return (await response.data);
    }
);

export const getAllCategories = createAsyncThunk(
    'shop/getAllCategories',
    async () => {
        const response = await instance.get(`Category/getAll`);
        return (await response.data);
    }
);

export const getFilteredProducts = createAsyncThunk(
    'shop/getFilteredProducts',
    async ({
        page,
        take,
        categoryName = [],
        isNew = null,
        productTags = [],
        productSizes = [],
        productColors = [],
        maxPrice = '',
        minPrice = '',
        orderBy = ''
    }: {
        page?: number,
        take: number,
        categoryName?: Option[],
        isNew?: string | null,
        productTags?: Option[],
        productSizes?: Option[],
        productColors?: String[],
        maxPrice?: string,
        minPrice?: string,
        orderBy?: string
    }) => {
       try {
        const response = await instance.get(`UserProduct/Products?${page ? `Page=${page}` : ''}${take > 0 ? `&ShowMore.Take=${take}` : ''}${categoryName?.length > 0 ? categoryName?.map((item) => `&CategoryNames=${item.value}`).join('') : ''}${isNew?.length && isNew !== 'null' ? `&IsNew=${isNew}` : ''}${productTags?.length > 0 ? productTags.map((item) => `&ProductTags=${item.value}`).join('') : ''}${productSizes?.length > 0 ? `${productSizes?.map((item) => `&ProductSizes=${item.value}`).join('')}` : ''}${productColors.length > 0 ? `${productColors.map((item) => `&ProductColors=${item.replace(/#/g, '%23')}`).join('')}` : ''}${minPrice !== '0' ? `&MinPrice=${minPrice}` : ''}${maxPrice !== '0' ? `&MaxPrice=${maxPrice}` : ''}${orderBy?.length > 0 ? `&OrderBy=${orderBy}` : ''}`);
        return (await response.data);
       } catch (error) {
            console.error(error);
       }
    }
);

const initialState = {
    loading: 'idle',
    totalProductCount: 0,
    sizes: [],
    colors: [],
    categories: [],
    tags: [],
    filteredProducts: [],
} as ProductState;

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAllSizes.fulfilled, (state, action) => {
            state.sizes = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getAllSizes.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getAllSizes.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getAllColors.fulfilled, (state, action) => {
            state.colors = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getAllColors.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getAllColors.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getAllTags.fulfilled, (state, action) => {
            state.tags = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getAllTags.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getAllTags.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getAllCategories.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getAllCategories.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getFilteredProducts.fulfilled, (state, action) => {
            state.filteredProducts = action.payload?.[0].products;
            state.totalProductCount = action.payload?.[0].totalProductCount;
            state.loading = 'succeeded';
        });
        builder.addCase(getFilteredProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getFilteredProducts.rejected, (state) => {
            state.loading = 'failed'
        });
    },
});

export default shopSlice.reducer;