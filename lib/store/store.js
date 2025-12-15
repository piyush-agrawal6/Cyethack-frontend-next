import { configureStore } from '@reduxjs/toolkit';
import faqReducer from './slices/faqSlice';
import careerReducer from './slices/careerSlice';
import reviewReducer from './slices/reviewSlice';
import pricingReducer from './slices/pricingSlice';
import newsReducer from './slices/newsSlice';
import updateReducer from './slices/updateSlice';
import trafficReducer from './slices/trafficSlice';

export const store = configureStore({
  reducer: {
    faqs: faqReducer,
    careers: careerReducer,
    reviews: reviewReducer,
    pricing: pricingReducer,
    news: newsReducer,
    updates: updateReducer,
    traffic: trafficReducer,
  },
});