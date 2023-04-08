import React from "react";

//CartContext is an object that contains component
const CartContext = React.createContext({
    cartItems: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

export default CartContext;