import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductTypes } from '../../models/productTypes';

interface ProductState {
    product: ProductTypes[];
}

const initialState: ProductState = {
    product: [],
};

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist: (state, action: PayloadAction<ProductTypes>) => {
            const item = state.product.find((i) => i.id === action.payload.id);
            if (item) {
                state.product.push(action.payload);
            }
            console.log("item: ", item);
            console.log("state.product: ", state.product);
            console.log("action.payload: ", action.payload);
            return state;
        }
    }
});

export const { addToWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;