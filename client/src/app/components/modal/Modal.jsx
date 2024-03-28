"use client"
import React from 'react';

//const Modal = ({children }) => {
  // if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-8 max-w-md w-full">
//         <span className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none">&times;</span>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;


const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed top-0 inset-0 flex  justify-center  bg-black bg-opacity-50 border-8">
      <div className="bg-white rounded-lg p-8 max-w-md w-full relative border-8">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none border-8"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;