import React ,{useState} from 'react';

import styles from "../styles/overlap.module.css";

import icon1 from '../icon/imageee.webp';
import icon2 from '../icon/browser.png';
import icon3 from '../icon/pre-icon.png';
import icon4 from '../icon/next-icon.png';



import Sidebar from './Sidebar';
import VisualData from './VisualData';
import DataModal from './DataModal';




const Overlap = (props) => {
  const [show,setShow] =useState(true)

  const [openModal,setOpenModal]=useState(props.viewModal)
  const [openvisualData,setOpenVisualData]=useState(true)
  const [errorsideBar,setSideBar] = useState(false)



  const handleLeftClick=()=>{
    console.log("Clicked")
    setOpenVisualData(true)
    setOpenModal(false)
   
  }

  const handleRightClick=()=>{
    console.log("Clicked")
    console.log(props.viewModal)
   
    setOpenModal(true)
    setOpenVisualData(false)
  }
  return (
    <>
    <div className={styles.data1}>
    <div className={styles.top_bar}>
    <div className={styles.outter}>

<div class={styles.nav}> 
{/* <img src={icon}style={{"height":"30px"}}></img> */}
<div className={styles.mini}><img src={icon1} alt="" style={{"width":"100px","height":"40px"}}/></div>
 <div className={styles.nav_button}>
<div onClick={handleLeftClick}  className={styles.mini}><img src={icon3} alt="" style={{"width":"30px","height":"20px"}}/></div>
<div onClick={handleRightClick} className={styles.mini}><img src={icon4} alt="" style={{"width":"30px","height":"20px"}}/></div>

  </div> 



<div className={styles.left}></div>

<div className={styles.middle}>
<div className={styles.inner}></div>

<div className={styles.inner}><input value={props.info}className={styles.input_nav}/></div>
<div className={styles.inner}></div>


</div>
<div className={styles.right}>
 
     
</div>

{/* <div className={styles.left}>Login</div> */}
</div>


      </div>
    </div>
    </div>
<div className={styles.data1}>

<div className={styles.data}>
 


{openvisualData &&<div className={styles.inner}>
<Sidebar/>
<VisualData showVisual={setOpenVisualData} openModal={setOpenModal} /></div>}
     {/* {openModal &&<DataModal closeModal={setOpenModal} showHome={setOpenHome}/>}  */}

{openModal && <div className={styles.inner}>
  <DataModal/>
  </div>

}
</div>
</div>


    </>
  )
}

export default Overlap