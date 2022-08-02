import React from 'react';

import styles from "../styles/nav.module.css";
import icon from '../icon/icon.png';

const Nav = () => {
  return (
    <div>

    <div className={styles.main}>
      <div className={styles.outter}>

        <div class={styles.nav}> 
  <img src={icon}style={{"height":"30px"}}></img>
      <div className={styles.left}></div>

        <div className={styles.middle}>
        <div className={styles.inner}>Home</div>
        <div className={styles.inner}>About</div>
        <div className={styles.inner}>Contact</div>
        <div className={styles.inner}>Pricing</div>
        <div className={styles.inner}>Support</div>


        </div>
        <div className={styles.right}>
           <button >Login <i class="far fa-arrow-right"></i></button> 
        </div>
        
        {/* <div className={styles.left}>Login</div> */}
        </div>
 
       
              </div>
    </div>
  
    
    
    </div>
   
  )
}

export default Nav