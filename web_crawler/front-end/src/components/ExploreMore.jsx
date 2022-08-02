import React from 'react'

import styles from "../styles/explore_more.module.css";

import icon1 from '../images/background_img.jpg';


const ExploreMore = () => {
  return (
    <>
    <div className={styles.outer} >
        <div className={styles.data} style={{ "backgroundImage": `url(${icon1})`,"backgroundPosition": "center", "backgroundSize": "cover",
    "backgroundRepeat": "no-repeat"}}>
          <div className={styles.grad}>
          <div className={styles.content}>
            Act Before it's too late!
          </div>
          </div>
        
         

        </div>

    </div>
    </>
  )
}

export default ExploreMore