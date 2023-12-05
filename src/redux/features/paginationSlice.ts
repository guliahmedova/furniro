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
        onNavigateNext: (state) => {
            state.currentPage++;
        },
        onNavigatePrev: (state) => {
            if (state.currentPage > 0) {
                state.currentPage--;
            }
        },
        onClickCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
});

export const { onNavigateNext, onNavigatePrev, onClickCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;