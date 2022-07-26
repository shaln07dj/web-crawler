import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const ListData = () => {
    const site_data = useSelector(state => state.information.items)
    console.log(site_data)
  return (
    <>
    <div style={{"backgroundImage":" linear-gradient(to bottom right,rgb(128, 121, 225) , rgb(33, 5, 103))","height":"100vh"}}>
    <div style={{"alignItems":"center"}}>
 
    <h2 style={{"color":"#fff"}}> Web Crowler Engine </h2>
   
    </div>
      <div className={'homeOuter'} >
        <div className={'homeInner'}>
  
      </div>
      </div>
  </div> 
     </>

  )
}

export default ListData