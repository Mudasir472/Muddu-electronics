import { toast } from 'react-toastify'
import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    cartItems: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
            console.log(action.payload)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
                toast.info(`${action.payload.name} Quantity increased`)
                localStorage.setItem("cartItem", JSON.stringify(state.cartItems))

            } else {
                const tempItem = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempItem);
                toast.success(`${action.payload.name} added successfully`)
                localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
            }
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => (item._id !== action.payload._id))
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
            toast.success(`${action.payload.name} Removed`)
        },
        decreaseCart(state, action) {
            const itemIndex = state.cartItems.findIndex((item) => item._id === action.payload._id)
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.info(`${action.payload.name} quantity decreased`)
            }
            else if (state.cartItems[itemIndex].cartQuantity === 1) {
                state.cartItems = state.cartItems.filter(item => (item._id !== action.payload._id))
                toast.success(`${action.payload.name} Removed`)
            }


            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItem", JSON.stringify(state.cartItems))
            toast.info(`Cart has been Cleared`)
        },
        getTotal(state, action) {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                let { currPrice, cartQuantity } = cartItem;
                const itemTotal = currPrice * cartQuantity;

                cartTotal.total += itemTotal;
                cartTotal.quantity += cartQuantity
                return cartTotal
            }, {
                total: 0,
                quantity: 0
            });

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;

        }
    }
})
export default cartSlice.reducer;
export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotal } = cartSlice.actions;

