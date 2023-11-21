import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filteredProducts: [],
    productList: [],
    searchQuery: ''
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            console.log("state.productList: ", state.productList);
            state.filteredProducts = state.productList.filter(
                (product) =>
                    product?.Title.toLowerCase().includes(action.payload.toLowerCase()) || 
                    product?.SubTitle.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        setProducts: (state, action) => {
            state.productList = action.payload;
            state.filteredProducts = action.payload; 
            console.log(action.payload);
        }
    }
});

export const { updateSearchQuery, setProducts } = searchSlice.actions;
export default searchSlice.reducer;