import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface CartItem {
  id: string | undefined;
  name: string;
  price: number;
  quantity: number;
  size: string | null;
  color: string | null;
}

interface CartState {
  items: CartItem[];
  isCartVisible: boolean;
}

const initialState: CartState = {
  items: [],
  isCartVisible: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.isCartVisible = true
    },
    closeCart(state) {
      state.isCartVisible = false
    }
  },
});

export const { addToCart, removeFromCart, clearCart, openCart, closeCart } = cartSlice.actions;

export const cartInfo = (state: RootState) => state.cart;

export default cartSlice.reducer;
