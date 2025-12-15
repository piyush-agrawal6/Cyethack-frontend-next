import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    stats: null,
    status: 'idle',
    error: null,
};

export const fetchTraffic = createAsyncThunk('traffic/fetchTraffic', async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/traffic`);
    const data = await response.json();
    return data;
});

const trafficSlice = createSlice({
    name: 'traffic',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTraffic.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTraffic.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.stats = action.payload;
            })
            .addCase(fetchTraffic.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch traffic stats';
            });
    },
});

export default trafficSlice.reducer;
