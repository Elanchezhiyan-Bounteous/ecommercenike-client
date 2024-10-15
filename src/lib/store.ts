import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../lib/features/authSlice'
import cartReducer from '../lib/features/cartSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      cart: cartReducer,
     } 
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']