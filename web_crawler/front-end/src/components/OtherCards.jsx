import React from 'react';

import styles from "../styles/otherCards.module.css";

const OtherCards = () => {
  return (
    <>
          <div className={styles.main}>
        <div className={styles.cards_container}>
         
          <div className={styles.cards3_outer}>
            <div className={styles.cards3_data}>
              <div className={styles.cards3_inner}>
                <div className={styles.card1_item}>
                  <div className={styles.card_outlet}>
                    <div className={styles.left}>
                      <div className={styles.content_left}></div>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.content}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.card2_item}>
                  <div className={styles.card_outlet}>
                    <div className={styles.left}>
                      <div className={styles.content_left}></div>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.content}></div>
                    </div>
                  </div>
                </div>

                <div className={styles.card3_item}>
                  <div className={styles.card_outlet}>
                    <div className={styles.left}>
                      <div className={styles.content_left}></div>
                    </div>
                    <div className={styles.right}>
                      <div className={styles.content}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cards container Ends here */}
      </div>
    </>
  )
}

export default OtherCards