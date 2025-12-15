import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchUpdates = createAsyncThunk('updates/fetchUpdates', async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/updates`);
    const data = await response.json();
    return data;
});

const updateSlice = createSlice({
    name: 'updates',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpdates.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUpdates.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchUpdates.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch updates';
            });
    },
});

export default updateSlice.reducer;
