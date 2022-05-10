import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addToCart: (state, action) => {
      state.items = state.items.concat(action.payload)
    },
    removeFromCart: (state, action) => {
      state.items.splice(action.payload, 1);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions
export const { removeFromCart } = cartSlice.actions

export default cartSlice.reducer