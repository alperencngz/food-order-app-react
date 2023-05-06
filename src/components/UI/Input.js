import React, { useRef } from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}> {props.label} </label>
            <input {...props.input} />
        </div>
    );
});


// This is one of the few examples where I couldn't create a component using both approaches,
// How to wrap function with forwardRef ?
// function Input(props) {

//     return (
//         <div className={classes.input}>
//             <label htmlFor={props.input.id}> {props.label} </label>
//             <input {...props.input} />
//         </div>
//     )
// }

export default Input;