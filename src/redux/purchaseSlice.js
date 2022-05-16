import { createSlice } from '@reduxjs/toolkit'

export const purchaseSlice = createSlice({
  name: 'purchase',
  initialState: {
    items: [{album: '', purchasedSongs: ''}],
    total: 0
  },
  reducers: {
    addToPurchase: (state, action) => {
      state.items = state.items.concat(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPurchase } = purchaseSlice.actions
export const { removeFromPurchase } = purchaseSlice.actions

export default purchaseSlice.reducer