import React, { useState, useRef } from "react";
import styles from "../styles/style.module.css";

import { useSelector, useDispatch } from "react-redux";


const Modal = ({closeModal, showHome }) => {
    const siteInfo = useSelector(state=> state.info);

console.log(siteInfo.siteInfo)


 
  const handleVerify=()=>{

      closeModal(false)
      showHome(true)

    }

  return (
    <div>
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>

          <div className={styles.modalTitle}>
            <h2>{siteInfo.siteInfo.name} </h2>
          </div>
          <div>
                <p>
                    {siteInfo.siteInfo.data}
             
                </p>
            </div>
          <div className={styles.modalInnerContainer}>
   
            <div className={styles.verifyBtn_div}>
              <button
                className={styles.verifyBtn}
                // onClick={() => closeModal(false)}
                onClick={handleVerify}
              >
               X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
