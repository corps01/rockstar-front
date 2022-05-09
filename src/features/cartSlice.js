import {createSlice} from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: "cart",
    initialState:{cartItems: {name: ""}},
    reducers: {
        addToCart: (state, action) => {
            state.cartItems = action.payload;
        },
        // deleteCartItem: (state, action ) => {
        //     state.cartItems.splice(action.payload, 1)
        // },
    }
});

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer
