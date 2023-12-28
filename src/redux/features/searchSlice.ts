import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../models/productTypes";
import axios from "axios";

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
        const response = await axios.get(`http://immutable858-001-site1.atempurl.com/api/UserProduct/Products?Prompt=${prompt}&ShowMore.TakeProduct=${take}`);
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