import React from 'react';

import styles from "../styles/visualdata.module.css";
import CapabilityMatrix from './CapabilityMatrix';
import Cards from './Cards';
import OtherCards from './OtherCards';

const VisualData = () => {
  return (
    <>
    <div className={styles.main}>
    <div className={styles.nav}></div>
    <div className={styles.outerContainer}>
      <Cards/>
      <CapabilityMatrix/>
      <OtherCards/>
    </div>
    </div>
    </>
  )
}

export default VisualData