import React from 'react'
import styles from "../styles/contact_us.module.css";
import Footer from './Footer';
const ContactUs = () => {
  return (
    <>
    <div className={styles.outer}>
        <div className={styles.data}>
            <div className={styles.inner}>
             <div className={styles.signup_box}>
                <div className={styles.signup_box_inner}>  
                    <div className={styles.signup_form}>
                        <div className={styles.input}>
                            <h2>Sign Up to Receive Product Updates and More</h2>
                            <div className={styles.input}>
                                <input   type="text" name="" id="" />
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                </div>  
                <div className={styles.contact_outer}>
                    <div className={styles.address}>
                        <div className={styles.address_info}>
                             
                             <div className={styles.address_details}>
                             <h3>Office</h3>
                             <p className={styles.p_styles}>Monkwish PTE Ltd, Robinson Road, Business Federation Centre, Singapore</p>
                             </div>
                             
                         </div>
                      
                    </div>
  <div className={styles.contact}>
  <div className={styles.contact_info}>
                             
                             <div className={styles.contact_details}>
                             <h3>Contact</h3>
                             <div className={styles.p_style}>Monkwish PTE Ltd, </div>
                             <p className={styles.p_styles}>+91 90037 53661 </p>
                             <p className={styles.p_mail_styles}>support@yogya.ai </p>
                             </div>
                             
                         </div>

                </div>
                </div> 
              


            </div>
        </div>
     
    </div>
   
    
    </>
  )
}

export default ContactUs