import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./cartSlice"

export default configureStore({
reducer: {
    counter: counterReducer
 },
 });