import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.closeModal}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <Card className={classes.modal}>
            {props.children}
        </Card>
    )
}

function Modal(props){
    return (
        <>
            {ReactDOM.createPortal(<Backdrop closeModal={props.closeModal}/>,
             document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
             document.getElementById("overlay-root"))}
        </>
    )
}

export default Modal;