import React from "react";
import { AiOutlineAim, AiOutlineClose } from "react-icons/ai";
import {createPortal} from 'react-dom'

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
        <div className="z-50 m-auto relative min-h-[200px] max-w-[80%] bg-white p-4">
          <div className="flex justify-end">
            <AiOutlineClose onClick={onClose} className="text-2xl" />
          </div>
          {children}
        </div>
        <div onClick={onClose} className="backdrop-blur h-screen w-screen absolute top-0 z-40"/>
        </>
      )}
    </>
  ,document.getElementById("modal-root"));
    }
export default Modal;
