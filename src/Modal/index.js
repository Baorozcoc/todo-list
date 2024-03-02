import React from "react";
import './Modal.css';
import { createPortal } from "react-dom";

function Modal({children}){
    return createPortal(
        <div className="back-modal">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {Modal};