import React from "react";

import classes from "./Card.module.css";
import Modal from "../UI/Modal";

function Cart(props) {

    const cartItems = (
        <ul className={classes["cart-items"]}>
            {
                [
                    {
                        id: "c1",
                        name: "Sushi",
                        amount: 2,
                        price: 12.99
                    }
                ].map(item => (
                    <li>{item.name}</li>
                ))
            }
        </ul>
    )

    return (
        <Modal closeModal={props.onClickClose}>
            <div>
                <div>{cartItems}</div>
                <div className={classes.total}>
                    <span>TotalAmount</span>
                    <span>$35.62</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes["button--alt"]} onClick={props.onClickClose}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;