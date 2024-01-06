import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReviewType } from '../../models/ReviewType';

const baseurl = "http://immutable858-001-site1.atempurl.com/api/Review";

interface ReviewState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    isSuccess: boolean,
    id: number,
    productId: number,
    appUserId: number,
    rate: number,
    text: string,
    error: string,
    message: string,
    reviews: ReviewType[]
};

export const addReview = createAsyncThunk(
    'review/addReview',
    async (reviewBody: ReviewType, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseurl}`, reviewBody);
            return (await response.data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const updateReview = createAsyncThunk(
    'review/updateReview',
    async (reviewBody: ReviewType, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${baseurl}`, reviewBody);
            return (await response.data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getReviewsByProductId = createAsyncThunk(
    'review/getReviewsByUserId',
    async (productId) => {
        const response = await axios.get(`${baseurl}/${productId}`);
        return (await response.data);
    }
);

// bu silinecek !!!!!!!!!!!!!
export const getallreviews = createAsyncThunk(
    'review/getallreviews',
    async () => {
        const response = await axios.get(`${baseurl}`);
        return (await response.data);
    }
);

export const deletReviewById = createAsyncThunk(
    'review/getReviewsById',
    async (reviewId:number) => {
        const response = await axios.delete(`${baseurl}/${reviewId}`);
        return (await response.data);
    }
);

const initialState = {
    loading: 'idle',
    isSuccess: false,
    id: 0,
    productId: 0,
    appUserId: 0,
    rate: 0,
    text: '',
    error: '',
    message: '',
    reviews: []
} as ReviewState;

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addReview.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(addReview.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
        });
        builder.addCase(addReview.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });

        builder.addCase(updateReview.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(updateReview.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
        });
        builder.addCase(updateReview.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });

        builder.addCase(getReviewsByProductId.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getReviewsByProductId.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
        });
        builder.addCase(getReviewsByProductId.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });

        builder.addCase(deletReviewById.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(deletReviewById.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.message = action.payload.message;
        });
        builder.addCase(deletReviewById.rejected, (state) => {
            state.loading = 'failed';
        });
        
        builder.addCase(getallreviews.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getallreviews.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.reviews = action.payload;
        });
        builder.addCase(getallreviews.rejected, (state) => {
            state.loading = 'failed';
        });
    },
});

export default reviewSlice.reducer;