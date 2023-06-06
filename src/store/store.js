import { configureStore } from '@reduxjs/toolkit';
import moderatorsReducer from './moderators/moderatorsSlice';

export const store = configureStore({
    reducer: {
        moderators: moderatorsReducer,
    },
});