import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { ReviewDeleteBody, ReviewType } from '../../models/ReviewType';
import { ReviewResponseBodyType } from '../../models/ReviewResponseBodyType';

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
    reviews: ReviewResponseBodyType[],
    isReviewAdded: boolean,
    isReviewEdit: boolean,
    totalReviewCount: number
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
            const response = await axios.put(`${baseurl}`, reviewBody);
            return (await response.data);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getReviewsByProductId = createAsyncThunk(
    'review/getReviewsByUserId',
    async ({productId, take} : {productId: number, take: number}) => {
        const response = await axios.get(`${baseurl}/ProductReviews?ProductId=${productId}&ShowMore.Take=${take}`);
        return (await response.data);
    }
);

export const deletReviewById = createAsyncThunk(
    'review/getReviewsById',
    async (reviewBody : ReviewDeleteBody, { rejectWithValue }) => {
        try {
            await axios.delete(`${baseurl}`, {
                data: reviewBody
            });
            return reviewBody.id;
        } catch (error : any) {
            return rejectWithValue(error.message);
        }
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
    reviews: [],
    isReviewAdded: false,
    totalReviewCount: 0,
    isReviewEdit: false
} as ReviewState;

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addReview.pending, (state) => {
            state.loading = 'pending';
            state.isReviewAdded = false;
        });
        builder.addCase(addReview.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.isReviewAdded = true;
        });
        builder.addCase(addReview.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
            state.isReviewAdded = false;
        });

        builder.addCase(updateReview.pending, (state) => {
            state.loading = 'pending';
            state.isReviewEdit = false;
        });
        builder.addCase(updateReview.fulfilled, (state) => {
            state.loading = 'succeeded';
            state.isReviewAdded = true;
            state.isSuccess = true;
        });
        builder.addCase(updateReview.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
            state.isReviewEdit = false;
        });

        builder.addCase(getReviewsByProductId.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getReviewsByProductId.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.reviews  = action.payload.productReviews;
            state.totalReviewCount = action.payload.totalReviewCount;
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
            const itemsAfterDelete = state.reviews.filter(
                (item) => item.id !== action.payload
            );
            state.reviews = itemsAfterDelete;
        });
        builder.addCase(deletReviewById.rejected, (state, action) => {
            state.loading = 'failed';
            if (action.error) {
                state.error = action.payload as string;
            } else {
                state.error = 'An unknown error occurred';
            }
        });
    },
});

export default reviewSlice.reducer;