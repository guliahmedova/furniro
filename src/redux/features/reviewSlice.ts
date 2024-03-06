import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ReviewResponseBodyType } from '../../models/ReviewResponseBodyType';
import { ReviewDeleteBody, ReviewType } from '../../models/ReviewType';
import instance from './apiConfig';
const token = localStorage.getItem('userToken')?.replace(/['"]+/g, '');

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
    totalReviewCount: number,
    reviewRating: number
};

export const addReview = createAsyncThunk(
    'review/addReview',
    async (reviewBody: ReviewType, { rejectWithValue }) => {
        try {
            const response = await instance.post(`Review`, reviewBody,
                {
                    headers: {
                        "Accept": "/",
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
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
            await instance.put(`Review`, reviewBody, {
                headers: {
                    "Accept": "/",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (reviewBody.id) {
                return reviewBody.id;
            }
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getReviewsByProductId = createAsyncThunk(
    'review/getReviewsByUserId',
    async ({ productId, take }: { productId: number, take: number }) => {
        const response = await instance.get(`Review/ProductReviews?ProductId=${productId}&ShowMore.Take=${take}`);
        return (await response.data);
    }
);

export const deletReviewById = createAsyncThunk(
    'review/getReviewsById',
    async (reviewBody: ReviewDeleteBody, { rejectWithValue }) => {
        try {
            await instance.delete(`Review`, {
                data: reviewBody,
                headers: {
                    "Accept": "/",
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            return reviewBody.id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const getProductRating = createAsyncThunk(
    'review/getProductRating',
    async (productId: number) => {
        const response = await instance.get(`Review/ProductRating?ProductId=${productId}`);
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
    reviews: [],
    totalReviewCount: 0,
    reviewRating: 0
} as ReviewState;

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addReview.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(addReview.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.message = action.payload
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
        builder.addCase(getReviewsByProductId.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.reviews = action.payload.productReviews;
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

        builder.addCase(getProductRating.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(getProductRating.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.isSuccess = true;
            state.reviewRating = action.payload;
        });
        builder.addCase(getProductRating.rejected, (state) => {
            state.loading = 'failed';
            state.isSuccess = false;
        });
    },
});

export default reviewSlice.reducer;