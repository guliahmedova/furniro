import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../models/productTypes";

export interface ProductState {
    filteredProducts: ProductTypes[],
    searchText: string
};

const initialState: ProductState = {
    filteredProducts: [],
    searchText: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        addSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload;
        }
    }
});

export const { addSearchText } = searchSlice.actions;
export default searchSlice.reducer;