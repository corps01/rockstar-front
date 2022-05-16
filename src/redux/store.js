import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./cartSlice"
import playerReducer from "./playerSlice"

export default configureStore({
reducer: {
    cart: cartReducer,
    player: playerReducer
 },
 });