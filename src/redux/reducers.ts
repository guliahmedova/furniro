import { combineReducers } from "@reduxjs/toolkit"
import wishlistReducer from '../redux/features/wishlistSlice';
import productReducer from '../redux/features/productSlice';
import searchReducer from '../redux/features/searchSlice';
import paginationReducer from '../redux/features/paginationSlice';
import homeReducer from '../redux/features/homeSlice';
import blogReducer from '../redux/features/blogSlice';
import contactReducer from '../redux/features/contactSlice';
import authReducer from '../redux/features/authSlice';
import shopReducer from '../redux/features/shopSlice';
import checkoutReducer from '../redux/features/checkoutSlice';
import productDetailReducer from '../redux/features/productDetailSlice';
import cartReducer from '../redux/features/cartSlice';
import forgotPasswordReducer from '../redux/features/forgotPasswordSlice';
import reviewReducer from '../redux/features/reviewSlice';

export const rootReducer = combineReducers({
    wishlist: wishlistReducer,
    product: productReducer,
    search: searchReducer,
    pagination: paginationReducer,
    home: homeReducer,
    blog: blogReducer,
    contact: contactReducer,
    auth: authReducer,
    shop: shopReducer,
    checkout: checkoutReducer,
    productDetail: productDetailReducer,
    cart: cartReducer,
    forgotPassword: forgotPasswordReducer,
    review: reviewReducer
});