import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FuniroFurnitureType } from '../../models/FuniroFurnitureType';
import instance from './apiConfig';

interface HomeState {
    images: FuniroFurnitureType[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};

export const getGridImages = createAsyncThunk(
    'home/getGridImages',
    async () => {
        const response = await instance.get(`Home`);
        return (await response.data);
    }
);

const initialState = {
    images: [],
    loading: 'idle'
} as HomeState;

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getGridImages.fulfilled, (state, action) => {
            state.images = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getGridImages.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getGridImages.rejected, (state) => {
            state.loading = 'failed'
        });
    },
});

export default homeSlice.reducer;
