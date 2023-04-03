import React from "react";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";

function Header () {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="Table full of food"/>
            </div>
        </>
    )
};

export default Header;