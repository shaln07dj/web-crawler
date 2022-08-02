import React from 'react'
import styles from "../styles/sidebar.module.css";

const Sidebar = () => {
    const sideMenu=[{
        "summary":['Overview'],
        "icon":["xyz"]
    },
    {
        
            "ORGANIZATION":['People','Teams/Skills'],
            "icon":["xyz"] 
    },
    {
        "LEARNING":['Learning Paths', "Assessments", "Settings"],
        "Icon":['abc','xyz','pqr']
    }
        
    ]
  return (
    <>
    <div className={styles.main}>
        <div className={styles.navTop}>
            <div className={styles.navTop_inner}><h4>MEETBEANS</h4> 
          
            </div>
             <p className={styles.sub_text}>powered by yogya.ai</p>
        </div>
        <div>
                <div>
                      <div className={styles.sub_section}>
                    
                <div className={styles.sub_section_title}>
                    SUMMARIES
                </div>
                <div className={styles.sub_section_item}>
                    Overview
                </div>
            </div>
                </div>
            
          
            <div className={styles.sub_section}>
                <div className={styles.sub_section_title}>
                    ORGANISATIONS
                </div>
                <div className={styles.sub_section_item}>
                     People
                </div>
                <div className={styles.sub_section_item}>
                   Teams/Skills
                </div>
            </div>
            <div className={styles.sub_section}>
                <div className={styles.sub_section_title}>
                    LEARNING
                </div>
                <div className={styles.sub_section_item}>
                    Learning Path
                </div>
                <div className={styles.sub_section_item}>
                    Assessments
                </div>
                <div className={styles.sub_section_item}>
                    Setting
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Sidebar