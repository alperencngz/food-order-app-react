import React, { useContext } from "react";

import classes from "./Card.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

function Cart(props) {

    const cartCtx = useContext(CartContext);

    const cartItemsList = cartCtx.cartItems;
    const totalAmount = cartCtx.totalAmount;

    const cartItemsRender = (
        <ul className={classes["cart-items"]}>
            {
                cartItemsList.map(item => (
                    <li>{item.name}</li>
                ))
            }
        </ul>
    )

    return (
        <Modal onClose={props.onClose}>
            <div>{cartItemsRender}</div>
            <div className={classes.total}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;