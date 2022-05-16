import { createSlice } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
  name: 'player',
  initialState: {
    currentSong: '',
  },
  reducers: {
    playSong: (state, action) => {
      state.currentSong = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { playSong } = playerSlice.actions
export default playerSlice.reducer