import React from "react";

import styles from "../styles/capabilityMatrix.module.css";

const CapabilityMatrix = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.cards_container}>
          <div className={styles.top_bar}>
            <div className={styles.top_bar_container}>
              <div className={styles.top_bar_data}>
                <div className={styles.top_bar_inner}>
                  <div className={styles.top_bar_left}><h3>Capability Matrix</h3></div>
                  <div className={styles.top_bar_right}>
                    <div className={styles.top_bar_left_inner}>
                    </div>

                    <div className={styles.top_bar_right_inner}>
                    <div className={styles.search_wrapper}>
    <input  className={styles.top_bar_input}type="text" palceholder= 'Search by Team Name' />
    <button className={styles.top_bar_btn}>GO</button>
</div>
                    </div>

                    </div>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.cards2_outer}>
            <div className={styles.cards2_data}>
              <div className={styles.cards2_inner}>
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
  );
};

export default CapabilityMatrix;
