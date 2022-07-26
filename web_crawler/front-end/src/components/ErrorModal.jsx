import React, { useState, useRef } from "react";
import styles from "../styles/style.module.css";

const ErrorModal = ({closeModal, showHome,errorModal }) => {
    

  const handleVerify=()=>{

      errorModal(false)
      showHome(true)

    }

  return (
    <div>
      <div className={styles.errorModalBackground}>
        <div className={styles.errorModalContainer}>

          <div className={styles.errorModalTitle}>
            <h2 style={{"color":"red"}}>Attention </h2>
          </div>
          <div>
                <h5>
                    You must atleast enter url field.!
             
                </h5>
            </div>
          <div className={styles.errorModalInnerContainer}>
   
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

export default ErrorModal;
