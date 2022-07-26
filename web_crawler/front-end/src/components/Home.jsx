import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import { useNavigate } from 'react-router-dom';

import { getInfo } from '../slice/siteInfoSlice';

import icon from '../icon/right-arrow.png'
const Home = ({showHome,openModal,errorModal}) => {
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
            showHome(true)
          }
          else{
            openModal(true)
           
            
            showHome(false)

          }
          dispatch(getInfo(res.data))
          }).catch((error)=>{
            console.log(error)
            
         
          })
      }
      else{
        errorModal(true)
        showHome(false)
      }
     
            
            

  }

  return (
    <>

    <div style={{"backgroundImage":" linear-gradient(to bottom right,rgb(128, 121, 225) , rgb(33, 5, 103))","height":"100vh"}}>
      <div style={{"alignItems":"center"}}>
   
      <h2 style={{"color":"#fff"}}> Web Crawler Engine </h2>
     
      </div>
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
    </div> 
       </>
  )
}

export default Home