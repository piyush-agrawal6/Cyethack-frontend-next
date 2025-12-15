import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  filters: {
    department: null,
    type: null,
    location: null,
  },
};

export const fetchCareers = createAsyncThunk('careers/fetchCareers', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/jobs`);
  const data = await response.json();
  return data;
});

const careerSlice = createSlice({
  name: 'careers',
  initialState,
  reducers: {
    setDepartmentFilter: (state, action) => {
      state.filters.department = action.payload;
    },
    setTypeFilter: (state, action) => {
      state.filters.type = action.payload;
    },
    setLocationFilter: (state, action) => {
      state.filters.location = action.payload;
    },
    clearFilters: (state) => {
      state.filters = {
        department: null,
        type: null,
        location: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCareers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCareers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCareers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch careers';
      });
  },
});

export const {
  setDepartmentFilter,
  setTypeFilter,
  setLocationFilter,
  clearFilters,
} = careerSlice.actions;

export default careerSlice.reducer;