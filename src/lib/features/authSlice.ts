import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { useAppSelector } from '../hooks';

interface AuthState {
  token: string | null;
  name: string | null;
}

const initialState: AuthState = {
  token: null,
  name: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ token: string; name: string }>) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    clearUser: (state) => {
      state.token = null;
      state.name = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export const SelectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
