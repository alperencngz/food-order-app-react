import React, { useContext, useState } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

function Cart(props) {

    const [isOrdering, setIsOrdering] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    console.log(cartCtx.items);

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    };

    const orderButtonHandler = () => {
        setIsOrdering(true);
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch("https://food-order-app-1f0b9-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    };

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {
                cartCtx.items.map((item) => (
                    <CartItem
                        name={item.name}
                        key={item.id}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
            {hasItems && <button
                className={classes.button}
                onClick={orderButtonHandler}>
                Order
            </button>}
        </div>
    );

    const cartModalContent = (
        <>
            <div>{cartItems}</div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isOrdering && <CheckoutForm onConfirm={submitOrderHandler} onCancel={props.onClose} />}
            {!isOrdering && modalActions}
        </>
    )

    const isSubmittingModalContent = (
        <p> Sending order data...</p>
    )

    const didSubmitModalContent = (
        <>
            <p>Succesfully sent the order.</p>
            <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        </>
    )

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    )
}

export default Cart;