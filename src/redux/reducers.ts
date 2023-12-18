import { combineReducers } from "@reduxjs/toolkit"
import wishlistReducer from '../redux/features/wishlistSlice';
import productReducer from '../redux/features/productSlice';
import searchReducer from '../redux/features/searchSlice';
import paginationReducer from '../redux/features/paginationSlice';
import homeReducer from '../redux/features/homeSlice';
import blogReducer from '../redux/features/blogSlice';
import contactReducer from '../redux/features/contactSlice';
import authReducer from '../redux/features/authSlice';

export const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    product: productReducer,
    search: searchReducer,
    pagination: paginationReducer,
    home: homeReducer,
    blog: blogReducer,
    contact: contactReducer,
    auth: authReducer
});