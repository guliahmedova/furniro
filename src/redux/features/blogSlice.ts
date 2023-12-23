import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BlogType } from '../../models/BlogType';
import { CategoryType } from '../../models/CategoryType';

const baseurl = 'http://immutable858-001-site1.atempurl.com/api/Blog';

interface BlogState {
    blogs: BlogType[],
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    categories: CategoryType[],
    recentBlogs: BlogType[],
    totalCount: number
};

export const getBlogs = createAsyncThunk(
    'getBlogs',
    async ({ page, take, prompt, categoryId }: { take: number, page: number, prompt?: string, categoryId?: number }) => {
        const response = await axios.get(`${baseurl}?Page=${page}&ShowMore.TakeProduct=${take}${prompt?.length ? `&Prompt=${prompt}` : ''}${categoryId !== 0 ? `&CategoryId=${categoryId}` : ''}`);
        return (await response.data);
    }
);

export const getBlogCategories = createAsyncThunk(
    'getBlogCategories',
    async () => {
        const response = await axios.get(`${baseurl}/categories`);
        return (await response.data);
    }
);

export const getRecentBlogs = createAsyncThunk(
    'getRecentBlogs',
    async () => {
        const response = await axios.get(`${baseurl}/recent-posts`);
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