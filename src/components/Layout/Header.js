import {React, useState} from "react";
import HeaderCartButton from "./HeaderCartButton";

import Cart from "../Cart/Cart";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

function Header() {
    const [cartModal, setCartModal] = useState(false);

    const openCart = () => {
        setCartModal(true);
    }

    const closeCart = () => {
        setCartModal(false);
    }

    return (
        <>
            {cartModal? <Cart onClickClose={closeCart}/>: ""}
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={openCart}/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="Table full of food" />
            </div>
        </>
    )
};

export default Header;