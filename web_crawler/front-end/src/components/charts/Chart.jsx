import React,{useState} from 'react';
import { Chart, Line } from 'react-chartjs-2';
import{ Chart as ChartJS, Title, Tooltip, LineElement,Legend, CategoryScale, LinearScale,PointElement} from 'chart.js';



ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement
)
const LineCharts= () => {
    const [data, setData] = useState({
        labels:["1","2","3","4","5","","7","8","9","10","11","12","13","14","15",
                "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
                datasets:[
                    {
                        label:"hjhy",
                        data:[15,12,48,56,59,95,85,80,89,75,70,65,60,55,51,
                            52,48,45,40,30,25,22,23,24,25,27,28,25,29,30
                        ],
                        backgroundColor:'blue',
                        borderColor:"blue"
                    }
                ]
    })

    const [data2, setData2] = useState({
        labels:["1","2","3","4","5","","7","8","9","10","11","12","13","14","15",
                "16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
                datasets:[
                    {
                        label:"hjhy",
                        data:[50,5,48,56,59,95,85,0,89,75,70,65,60,55,51,
                            52,48,45,40,30,25,22,23,24,25,27,28,25,29,30
                        ],
                        backgroundColor:'blue',
                        borderColor:"blue"
                    }
                ]
    })
  return (
    <div>
        <Line data={data}></Line>
        <Line data={data2}></Line>
        
    </div>
  )
}

export default LineCharts