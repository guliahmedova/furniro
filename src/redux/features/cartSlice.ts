import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CartItemType, GetCartItemsType } from '../../models/CartItemType';

const baseurl = 'http://immutable858-001-site1.atempurl.com/api/';

interface CartRequestBody {
    productId: number,
    colorId: number,
    userId: number
}

interface CartState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    success: boolean,
    message: string,
    userId: number,
    cartItems: CartItemType[],
    getAllCartItems: GetCartItemsType[],
};

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (cartItemBody: CartRequestBody) => {
        const response = await axios.post(`${baseurl}Cart/addToCart`, cartItemBody);
        return (await response.data);
    }
);

export const getAllCartItemsByUserId = createAsyncThunk(
    'cart/getAllCartItemsByUserId',
    async (userId: number) => {
        const response = await axios.get(`${baseurl}Cart/getAllCartItems/${userId}`);
        return (await response.data);
    }
);

export const removeCartItem = createAsyncThunk(
    'cart/removeCartItem',
    async (cartItemBody: CartRequestBody) => {
        const response = await axios.delete(`${baseurl}Cart/remove`, {
            data: cartItemBody
        });
        return (await response.data);
    }
);

export const clearCart = createAsyncThunk(
    'checkout/clearCart',
    async (appUserId: number) => {
        const response = await axios.post(`${baseurl}ClearCart`, appUserId);
        return (await response.data);
    }
);

const initialState = {
    loading: 'idle',
    success: false,
    message: '',
    userId: 0,
    cartItems: [],
    getAllCartItems: []
} as CartState

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addToCart.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.success = true;
            state.message = action.payload.message;
            state.userId = action.payload.cart.userId;
            state.cartItems = action.payload.cart.cartItems;
        });
        builder.addCase(addToCart.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getAllCartItemsByUserId.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getAllCartItemsByUserId.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.getAllCartItems = action.payload;
        });
        builder.addCase(getAllCartItemsByUserId.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(removeCartItem.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(removeCartItem.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.success = true;
            state.message = action.payload.message;
        });
        builder.addCase(removeCartItem.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(clearCart.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(clearCart.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.message = action.payload;
        });
        builder.addCase(clearCart.rejected, (state) => {
            state.loading = 'failed';
        });
    }
});

export default cartSlice.reducer;