import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import latestProductSlice from './slices/latestProductSlice';

export const store = configureStore({
  reducer: {
    latestProduct:latestProductSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
