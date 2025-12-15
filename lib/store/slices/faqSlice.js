import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchFAQs = createAsyncThunk('faqs/fetchFAQs', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/faqs`);
  const data = await response.json();
  return data;
});

const faqSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFAQs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFAQs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchFAQs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch FAQs';
      });
  },
});

export default faqSlice.reducer;