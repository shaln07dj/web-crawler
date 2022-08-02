import React from 'react';

import Scroll from "react-scroll";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import styles from "../styles/nav.module.css";
import icon from '../icon/icon.png';

const Nav = () => {
  let navigate = useNavigate()
  const handleHome = ()=>{
      navigate('/home')
  }
  const handleAbout = ()=>{
    navigate('/about')
}
const handleContact = ()=>{
  navigate('/contactus')
}
const handlePricing = ()=>{
  navigate('/pricing')
}
const handleSupport = ()=>{
  navigate('/support')
}
  return (
    <div>

    <div className={styles.main}>
      <div className={styles.outter}>

        <div class={styles.nav}> 
  <img src={icon}style={{"height":"30px"}}></img>
      <div className={styles.left}></div>

        <div className={styles.middle}>
        <div className={styles.inner}><Link onClick={handleHome} className={styles.links}to ='/home'>Home</Link></div>
        <div className={styles.inner}> <Link onClick={handleAbout} className={styles.links}to ='/about'>About</Link></div>
        <div className={styles.inner}><Link onClick={handleContact} className={styles.links}to ='/contactus'>Contact</Link></div>
        <div className={styles.inner}><Link onClick={handlePricing} className={styles.links}to ='/pricing'>Pricing</Link> </div>
        <div className={styles.inner}><Link onClick={handleSupport} className={styles.links}to ='/support'>Support</Link></div>


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