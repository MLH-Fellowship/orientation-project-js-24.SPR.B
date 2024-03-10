import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="close-icon" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
