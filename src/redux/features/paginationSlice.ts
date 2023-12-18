import { createSlice } from "@reduxjs/toolkit";

interface PaginationState {
    currentPage: number;
};

const initialState: PaginationState = {
    currentPage: 1,
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        onClickCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
});

export const { onClickCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;