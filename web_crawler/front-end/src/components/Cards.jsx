import React, { useState } from "react";
import { Chart, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

import styles from "../styles/cards.module.css";

import activity_icon from '../icon/active_learners.png';
import engagement_icon from '../icon/engagement.png';
import time_icon from '../icon/time.png';


import LineCharts from "./charts/Chart";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

const Cards = () => {
  const [data, setData] = useState({
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "hjhy",
        data: [
          15, 12, 48, 56, 59, 95, 85, 80, 89, 75, 70, 65, 60, 55, 51, 52, 48,
          45, 40, 30, 25, 22, 23, 24, 25, 27, 28, 25, 29, 30,
        ],
        backgroundColor: "blue",
        borderColor: "blue",
      },
    ],
  });

  const [data2, setData2] = useState({
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "hjhy",
        data: [
          50, 5, 48, 56, 59, 95, 85, 0, 89, 75, 70, 65, 60, 55, 51, 52, 48, 45,
          40, 30, 25, 22, 23, 24, 25, 27, 28, 25, 29, 30,
        ],
        backgroundColor: "blue",
        borderColor: "blue",
      },
    ],
  });

  return (
    <>
      <div className={styles.outer1}>
        <div className={styles.inner1}>
          <div className={styles.cards1_outer}>
            <div className={styles.cards1_data}>
              <div className={styles.cards1_inner}>
                <div className={styles.card1_item}>
                <div className={styles.card_outlet}>
                    <div className={styles.card_upper}>
                      {/* <Line style={{ height: "6vw" }} data={data}></Line> */}
                    </div>
                    <div className={styles.card_lower}>
                        <div className={styles.card_lower_outer}>
                            <div className={styles.card_lower_left}>
                                <div className={styles.card_lower_left_content} >
                                <img src={activity_icon}style={{"height":"35px"}}></img>
                                <div></div>
                                </div>
                            </div>
                            <div className={styles.card_lower_right}>
                                <div className={styles.text_container}>
                                    <div className={styles.small_text}> Active Learner</div>
                                    <div className={styles.bigger_text}>45</div>
                                </div>
                          

                               
                            </div>

                        </div>
                    </div>
                  </div>
                     </div>

                <div className={styles.card2_item}>
                  <div className={styles.card_outlet}>
                    <div className={styles.card_upper}>
                      <Line  className={styles.line_graph}data={data}></Line>
                    </div>
                    <div className={styles.card_lower}>
                    <div className={styles.card_lower_outer}>
                            <div className={styles.card_lower_left}>
                                <div className={styles.card_lower_left_content} >
                                    <div style={{"borderRaduis":"5px"}}>
                                <img src={engagement_icon}style={{"height":"35px",}}></img> </div>
                                </div>
                            </div>
                            <div className={styles.card_lower_right}>
                            <div className={styles.text_container}>
                                    <div className={styles.small_text}> Active Learner</div>
                                    <div className={styles.bigger_text}>45</div>
                                </div>
                            </div>

                        </div>
                    </div>
                  </div>
                </div>

                <divgh className={styles.card2_item}>
                  <div className={styles.card_outlet}>
                    <div className={styles.card_upper}>
                      <Line  className={styles.line_graph}data={data2}></Line>
                    </div>
                    <div className={styles.card_lower}>
                    <div className={styles.card_lower_outer}>
                            <div className={styles.card_lower_left}>
                                <div className={styles.card_lower_left_content} >
                                    <div style={{"borderRaduis":"5px"}}>
                                <img src={engagement_icon}style={{"height":"35px",}}></img> </div>
                                </div>
                            </div>
                            <div className={styles.card_lower_right}>
                            <div className={styles.text_container}>
                                    <div className={styles.small_text}> Active Learner</div>
                                    <div className={styles.bigger_text}>45</div>
                                </div>
                            </div>

                        </div>
                    </div>
                  </div>
                </divgh>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
