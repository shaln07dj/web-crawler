import React from 'react'

import styles from "../styles/about.module.css";
import background from '../images/background.jpg'

const About = () => {
  return (
    <div>
        <div className={styles.outer}>
        <div className={styles.inner}>
            <div className={styles.left}>
            </div>
            <div className={styles.right}>
                <p className={styles.p_styles}>About Engine</p>
                <h2 className={styles.h2_styles}>What are Web Crawlers?</h2>
                <div className={styles.para}>
                <p className={styles.p_styles}>
                    A web crawler, spider, or search engine bot downloads and indexes 
                    content from all over the Internet. The goal of such a bo is to learn what (almost) every webpage on the web is about, so that the information can be retrived when it's needed.
                    They're called "web crawlers" because crawling is the technical term for automatically accessing a website and obtaining data via a software program.
                  </p>
                </div>
                
            </div>
            
        </div>
        </div>
    </div>
  )
}

export default About