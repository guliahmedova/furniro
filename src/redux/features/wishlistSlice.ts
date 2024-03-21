import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ProductTypes } from '../../models/productTypes';
import { RootState } from '../app/store';
import instance from './apiConfig';

const token = localStorage.getItem('userToken')?.replace(/['"]+/g, '');

interface ProductState {
    favorites: ProductTypes[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    product: ProductTypes[]
};

const initialState: ProductState = {
    favorites: [],
    loading: 'idle',
    product: []
};

interface WishlistBody {
    userId: number,
    productId: number,
    colorId: number
};

export const getWishlist = createAsyncThunk(
    'wishlist/getWishlist',
    async (userId: number) => {
        const response = await instance.get(`Favorite?UserId=${userId}`, {
            headers: {
                "Accept": "/",
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return (await response.data[0]);
    }
);

export const createWishlist = createAsyncThunk(
    'wishlist/createWishlist',
    async ({ appUserId, productId }: { appUserId: number, productId: number }, { rejectWithValue }) => {
        try {
            const response = await instance.post(`Favorite`, {
                userId: appUserId,
                productId: productId
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

export const deleteWishlist = createAsyncThunk(
    'wishlist/deleteWishlist',
    async (data: WishlistBody, { rejectWithValue }) => {
        try {
            await instance.delete('Favorite', {
                data: data,
                headers: {
                    "Accept": "/",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            return data.productId;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<ProductTypes>) => {
            const item = state.product.find((i) => i.id === action.payload.id);
            if (!item) {
                state.product.push(action.payload);
            }
            return state;
        },
        removeFromWishlist: (state, action: PayloadAction<ProductTypes>) => {
            state.product = state.product.filter((p) => p.id !== action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getWishlist.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getWishlist.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.favorites = action.payload.favorites;
        });
        builder.addCase(getWishlist.rejected, (state) => {
            state.loading = 'failed';
        });

        builder.addCase(createWishlist.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(createWishlist.fulfilled, (state) => {
            state.loading = 'succeeded';
        });
        builder.addCase(createWishlist.rejected, (state) => {
            state.loading = 'failed';
        });

        builder.addCase(deleteWishlist.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(deleteWishlist.fulfilled, (state) => {
            state.loading = 'succeeded';
        });
        builder.addCase(deleteWishlist.rejected, (state) => {
            state.loading = 'failed';
        });
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectFavProducts = (state: RootState) => state.wishlist.favorites;
export default wishlistSlice.reducer;