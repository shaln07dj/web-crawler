import React from 'react';

import styles from "../styles/dataModal.module.css";


import { useSelector, useDispatch } from "react-redux";



import icon1 from '../icon/imageee.webp';
import icon2 from '../icon/browser.png';
import icon3 from '../icon/pre-icon.png';
import icon4 from '../icon/next-icon.png';

const DataModal = ({showHome,closeModal}) => {
  const siteInfo = useSelector(state=> state.info);

  console.log(siteInfo.siteInfo)
  
  
   
    const handleVerify=()=>{
  
        closeModal(false)
        showHome(true)
  
      }
   const handleClick=()=>{
    // closeModal(false)
    showHome(false)
   }
   const parser = new DOMParser();
   const xmlDoc = parser.parseFromString(siteInfo.siteInfo.data, "application/xml");
   console.log(xmlDoc)
  return (
    <>

    
<div className={styles.data1}>
<div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
           
              
          <div className={styles.modalTitle}>
            <h2>{siteInfo.siteInfo.name} </h2>
          </div>
          <div className={styles.content_container}>
          <div className={styles.content}>
            
                <p className={styles.p_styles}>
                    {siteInfo.siteInfo.data}
             
                </p>
           
            </div></div>
         
        </div>
      </div>



</div> 
    </>
  )
}

export default DataModal