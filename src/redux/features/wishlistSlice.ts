import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductTypes } from '../../models/productTypes';
import { RootState } from '../app/store';

interface ProductState {
    product: ProductTypes[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
}

const initialState: ProductState = {
    product: [],
    loading: 'idle'
};

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
    }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const selectFavProducts = (state: RootState) => state.wishlist.product;
export default wishlistSlice.reducer;