import { combineReducers } from "@reduxjs/toolkit"
import wishlistReducer from '../redux/features/wishlistSlice';
import productReducer from '../redux/features/productSlice';
import searchReducer from '../redux/features/searchSlice';

export const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    product: productReducer,
    search: searchReducer 
});