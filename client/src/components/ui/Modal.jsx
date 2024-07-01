import React from "react";
import { IoIosClose } from "react-icons/io";
import "./modal.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div className='modal-overlay' onClick={onClose}>
        <div className='modal' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <IoIosClose size={30} className='close-icon' onClick={onClose} />
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
