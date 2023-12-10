import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { GridImageType } from '../../models/gridImageType';

const baseurl = 'http://immutable858-001-site1.atempurl.com/api/';

export interface HomeState {
    images: GridImageType[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
};

export const getGridImages = createAsyncThunk(
    'getGridImages',
    async () => {
        const response = await axios.get(`${baseurl}Home`);
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
