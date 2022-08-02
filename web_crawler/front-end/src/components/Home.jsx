import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { getInfo } from '../slice/siteInfoSlice';

import icon from '../icon/right-arrow.png';
import styles from "../styles/home.module.css";
import Nav from './Nav';
import About from './About';
import Overlap from './Overlap';
import ExploreMore from './ExploreMore';
import ContactUs from './ContactUs';
import DataModal from './DataModal';
// const Home = ({showHome,openModal,errorModal}) => {
  const Home = () => {
  const [openModal,setOpenModal]=useState(true)
  const [openHome,setOpenHome]=useState(true)
  const [errorModal,setErrorModal] = useState(false)
  const navigate = useNavigate();

    const [site_name,setsite_Name]=useState("")
    const [url,setUrl]=useState("") 

    const dispatch = useDispatch()
  
    useEffect(()=>{

     
},[])
    const handleSubmit = ()=>{
      if(url !==""){
      
        axios.post('http://127.0.0.1:5000/postData', {
          "name": site_name,
          "url": url
        
        }).then((res)=>{
          console.log(res.data.status)
          if(res.data.status==="400"){
            alert("Error Occured")
            // showHome(true)
            // Modal(true)
          }
          else{
            // openModal(true)
           
            
            // showHome(false)

          }
          dispatch(getInfo(res.data))
          }).catch((error)=>{
            console.log(error)
            
         
          })
      }
      else{
        // errorModal(true)
        // showHome(false)
      }
     
            
            

  }

  return (
    <>
<Nav/>
<div className={styles.outer}>
    <div className={styles.center}style={{}}>
      <div style={{"alignItems":"center"}}>
   
      <h2 style={{"color":"#fff"}}> Web Crawler Engine </h2>
     
      
        <div className={'homeOuter'} >
          <div className={'homeInner'}>
            <div>
            <div style={{"marginTop":"10px"}}>
            <input type="text" onChange={(e)=>{setsite_Name(e.target.value)}} placeholder='Site name' name='site_name'/>
            <br>
            </br>
</div>
<div style={{"marginTop":"10px"}}>
    <input type="text" onChange={(e)=>{setUrl(e.target.value)}} placeholder='Enter Url Here' name ='url'/>
</div>
<div style={{"marginTop":"20px"}}>
    <button onClick={handleSubmit}type="submit" name ="button" >
  <img src={icon}style={{"height":"20px"}}></img>
    </button>
</div>
        </div>
        </div>
        </div>

{/* here */}

 {/* {openHome &&<Overlap showHome={setOpenHome} openModal={setOpenModal} errorModal={setErrorModal}/>}
     {openModal &&<DataModal closeModal={setOpenModal} showHome={setOpenHome}/>} */}
     <Overlap/>
   
   
   
   
     {/* <div className='errorOuter'>
        {errorModal &&<ErrorModal errorModal={setErrorModal} showHome={setOpenHome}/>}
     </div> */}

</div>

    </div> 
    </div>

       </>
  )
}

export default Home