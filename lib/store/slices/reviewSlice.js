import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchReviews = createAsyncThunk('reviews/fetchReviews', async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/reviews`);
    const data = await response.json();
    return data;
});

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch reviews';
            });
    },
});

export default reviewSlice.reducer;
