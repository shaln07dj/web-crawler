import logo from './logo.svg';
import {useEffect,useState} from 'react'
import { Element } from "react-scroll";
import './index.css';

import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';
import ErrorModal from './components/ErrorModal';
import About from './components/About';
import ExploreMore from './components/ExploreMore';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { Link, Navigate } from 'react-router-dom';


function App() {
  

  const [openModal,setOpenModal]=useState(false)
  const [openHome,setOpenHome]=useState(true)
  const [errorModal,setErrorModal] = useState(false)
  return (
    <div className="App">
     {/* {openHome &&<Home showHome={setOpenHome} openModal={setOpenModal} errorModal={setErrorModal}/>}
     {openModal &&<Modal closeModal={setOpenModal} showHome={setOpenHome}/>}
     <div className='errorOuter'>
        {errorModal &&<ErrorModal errorModal={setErrorModal} showHome={setOpenHome}/>}
     </div> */}
     <Element  id="/home" name="aboutme">
     {/* <Navigate to="/home" replace={true} /> */}
     
 <Home/>
     </Element>
     <Element  id="/about" name="aboutme">
  <About/>
     </Element>
    
     <Element  id="/pricing" name="pricing">
    <ExploreMore/>
     </Element>
    
     <Element  id="/contactus" name="contact">
     <ContactUs/>
     </Element>
     <Element  id="/support" name="contact">
     <div style={{"marginTop":"-70px"}}>
       <Footer/> 
    </div>
    </Element>

  
    


    
     </div>
  

  );
}

export default App;
