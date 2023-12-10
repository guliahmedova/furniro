import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../models/productTypes";
import axios from "axios";

export interface ProductState {
    filteredProducts: ProductTypes[],
    searchText: string,
    loading: string,
    entities: ProductTypes[]
};

const initialState: ProductState = {
    filteredProducts: [],
    searchText: '',
    loading: 'idle',
    entities: []
};

export const searchProducts = createAsyncThunk(
    'searchProducts',
    async (prompt: string) => {
        const response = await axios.get(`http://immutable858-001-site1.atempurl.com/api/SearchProduct?prompt=${prompt}`);
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
            state.entities = action.payload;
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