import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BlogType } from '../../models/BlogType';
import { CategoryType } from '../../models/CategoryType';
import instance from './apiConfig';

interface BlogState {
    blogs: BlogType[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    categories: CategoryType[],
    recentBlogs: BlogType[],
    totalCount: number
};

export const getBlogs = createAsyncThunk(
    'blogs/getBlogs',
    async ({ page, take, prompt, categoryId }: { take: number, page: number, prompt?: string, categoryId?: number }) => {
        const response = await instance.get(`Blog?Page=${page}&ShowMore.Take=${take}${prompt?.length ? `&Prompt=${prompt}` : ''}${categoryId !== 0 ? `&CategoryId=${categoryId}` : ''}`);
        return (await response.data);
    }
);

export const getBlogCategories = createAsyncThunk(
    'blogs/getBlogCategories',
    async () => {
        const response = await instance.get(`Blog/blog-categories`);
        return (await response.data);
    }
);

export const getRecentBlogs = createAsyncThunk(
    'blogs/getRecentBlogs',
    async () => {
        const response = await instance.get(`Blog/recent-posts`);
        return (await response.data);
    }
);

const initialState = {
    blogs: [],
    loading: 'idle',
    categories: [],
    recentBlogs: [],
    totalCount: 0
} as BlogState;

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload?.[0].blogs;
            state.totalCount = action.payload?.[0].totalBlogCount;
            state.loading = 'succeeded';
        });
        builder.addCase(getBlogs.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getBlogs.rejected, (state) => {
            state.loading = 'failed'
        });

        builder.addCase(getBlogCategories.fulfilled, (state, action) => {
            state.categories = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getBlogCategories.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getBlogCategories.rejected, (state) => {
            state.loading = 'failed'
        });


        builder.addCase(getRecentBlogs.fulfilled, (state, action) => {
            state.recentBlogs = action.payload;
            state.loading = 'succeeded';
        });
        builder.addCase(getRecentBlogs.pending, (state) => {
            state.loading = 'pending'
        });
        builder.addCase(getRecentBlogs.rejected, (state) => {
            state.loading = 'failed'
        });
    }
});

export default blogSlice.reducer;