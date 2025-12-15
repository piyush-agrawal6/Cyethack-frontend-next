import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchPricing = createAsyncThunk('pricing/fetchPricing', async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/pricing`);
    const data = await response.json();
    return data;
});

const pricingSlice = createSlice({
    name: 'pricing',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPricing.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPricing.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchPricing.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch pricing';
            });
    },
});

export default pricingSlice.reducer;
