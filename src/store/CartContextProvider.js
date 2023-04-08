import React, { useState, useEffect } from "react"
import CartContext from "./cart-context";

function CartContextProvider(props) {
    const [cartItems, setCartItems] = useState([]);

    const [amount, setAmount] = useState(0);

    useEffect(() => {
        const total = 0;

        for (let i = 0; i < cartItems.length; i++) {
            cartItems[i].price += total;
        }

        setAmount(total);
    }, [cartItems]);

    const addItemHandler = (item) => {
        setCartItems((prev) => [item, ...prev]);
    }

    const removeItemHandler = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <CartContext.Provider value={{
            cartItems: cartItems,
            totalAmount: amount,
            onAddItem: addItemHandler,
            onRemoveItem: removeItemHandler,
        }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;