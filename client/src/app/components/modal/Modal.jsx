"use client"
// import React from 'react';
// import style from './style.module.css';

// const Modal = ({ children }) => {
//   return (
//     <article className="modal is-open">
//       <div className="modal-container">
//         <button className="modal-close"> X </button>
//         {children}
//       </div>
//     </article>
//   );
// };

// export default Modal;

import React from 'react';
import styles from './style.module.css'; // Import your CSS module

const Modal = ({ children }) => {
  return (
    <article className={`${styles.modal} ${styles.is-open}`}>  // Combine classes
      <div className={styles.modalContainer}>
        <button className={styles.modalClose}> X </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
