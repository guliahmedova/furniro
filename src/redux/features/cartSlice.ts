import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CartItemType, GetCartItemsType } from '../../models/CartItemType';
import instance from './apiConfig';
const token = localStorage.getItem('userToken')?.replace(/['"]+/g, '');

interface CartRequestBody {
    productId: number,
    colorId: number,
    userId: number,
    count?: number
};

interface CartState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    success: boolean,
    message: string,
    userId: number,
    cartItems: CartItemType[],
    getAllCartItems: GetCartItemsType[],
    error: string,
    isDelete: boolean,
    subTotal: number,
};

export const addToCart = createAsyncThunk(
    'cart/addToCart',
    async (cartItemBody: CartRequestBody, { rejectWithValue }) => {
        try {
            const response = await instance.post(`Cart/addToCart`, cartItemBody, {
                headers: {
                    "Accept": "/",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            return (await response.data);
        } catch (error: any) {
            return rejectWithValue(error.response.data.Message);
        }
    }
);

export const getAllCartItemsByUserId = createAsyncThunk(
    'cart/getAllCartItemsByUserId',
    async (userId: number) => {
        const response = await instance.get(`Cart/getAllCartItems/${userId}`, {
            headers: {
                "Accept": "/",
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return (await response.data);
    }
);

export const removeCartItem = createAsyncThunk(
    'cart/removeCartItem',
    async (cartItemBody: CartRequestBody, { rejectWithValue }) => {
        try {
            await instance.delete(`Cart/remove`, {
                data: cartItemBody,
                headers: {
                    "Accept": "/",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },

            });
            return cartItemBody.productId;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const clearCart = createAsyncThunk(
    'checkout/clearCart',
    async (appUserId: number, { rejectWithValue }) => {
        try {
            const response = await instance.post(`Cart/ClearCart`, {
                appUserId: appUserId
            }, {
                headers: {
                    "Accept": "/",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            return (await response.data);
        } catch (error: any) {
            return rejectWithValue(error?.response?.data?.title);
        }
    }
);

const initialState = {
    loading: 'idle',
    success: false,
    isDelete: false,
    message: '',
    userId: 0,
    cartItems: [],
    getAllCartItems: [],
    error: '',
    subTotal: 0,
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
            state.loading = 'failed';
        });

        builder.addCase(getAllCartItemsByUserId.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getAllCartItemsByUserId.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.getAllCartItems = action.payload;
            state.subTotal = action.payload.reduce((total: number, cart: any) => {
                cart.cartItems.forEach((item: CartItemType) => {
                    total += item.subtotal;
                });
                return total;
            }, 0);
        });
        builder.addCase(getAllCartItemsByUserId.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(removeCartItem.pending, (state) => {
            state.loading = 'pending';
            state.isDelete = false;
        });
        builder.addCase(removeCartItem.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isDelete = true;
            const itemsAfterDelete = state.getAllCartItems.filter(
                (item) => item.cartItems?.map((cartItem) => (
                    cartItem.productId === action.payload
                ))
            );
            state.getAllCartItems = itemsAfterDelete;
        });
        builder.addCase(removeCartItem.rejected, (state) => {
            state.loading = 'failed';
            state.isDelete = false;
        });

        builder.addCase(clearCart.pending, (state) => {
            state.loading = 'pending';
            state.message = '';
        });
        builder.addCase(clearCart.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.message = action.payload;
            state.getAllCartItems = [];
        });
        builder.addCase(clearCart.rejected, (state, action) => {
            state.loading = 'failed';
            state.message = '';
            if (action.error) {
                state.error = action.payload as string;
            } else {
                state.error = 'An unknown error occurred';
            }
        });
    }
});

export default cartSlice.reducer;