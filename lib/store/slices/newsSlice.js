import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/news`);
    const data = await response.json();
    return data;
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch news';
            });
    },
});

export default newsSlice.reducer;
