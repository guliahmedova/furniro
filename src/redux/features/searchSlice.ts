import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductTypes } from "../../models/productTypes";
import instance from "./apiConfig";

interface ProductState {
    filteredProducts: ProductTypes[],
    searchText: string,
    loading: string,
    entities: ProductTypes[],
    totalCount: number
};

const initialState: ProductState = {
    filteredProducts: [],
    searchText: '',
    loading: 'idle',
    entities: [],
    totalCount: 0
};

export const searchProducts = createAsyncThunk(
    'search/searchProducts',
    async ({ prompt, take }: { prompt: string, take: number }) => {
        const response = await instance.get(`UserProduct/Products?${prompt.length ? `Prompt=${prompt}&` : ''}ShowMore.Take=${take}`);
        return (await response.data);
    }
);

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        saveSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchProducts.fulfilled, (state, action) => {
            state.entities = action.payload[0].products;
            state.totalCount = action.payload[0].totalProductCount;
            state.loading = 'succeeded';
        });
        builder.addCase(searchProducts.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(searchProducts.rejected, (state) => {
            state.loading = 'failed'
        });
    }
});

export const { saveSearchText } = searchSlice.actions;
export default searchSlice.reducer;