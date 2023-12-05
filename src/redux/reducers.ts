import { combineReducers } from "@reduxjs/toolkit"
import wishlistReducer from '../redux/features/wishlistSlice';
import productReducer from '../redux/features/productSlice';
import searchReducer from '../redux/features/searchSlice';
import paginationReducer from '../redux/features/paginationSlice';

export const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    product: productReducer,
    search: searchReducer,
    pagination: paginationReducer 
});