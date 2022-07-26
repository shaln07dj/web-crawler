import logo from './logo.svg';
import {useEffect,useState} from 'react'
import axios from 'axios';
import './index.css';

import './App.css';
import Home from './components/Home';
import Modal from './components/Modal';
import ErrorModal from './components/ErrorModal';


function App() {
  

  const [openModal,setOpenModal]=useState(false)
  const [openHome,setOpenHome]=useState(true)
  const [errorModal,setErrorModal] = useState(false)
  return (
    <div className="App">
     {openHome &&<Home showHome={setOpenHome} openModal={setOpenModal} errorModal={setErrorModal}/>}
     {openModal &&<Modal closeModal={setOpenModal} showHome={setOpenHome}/>}
     <div className='errorOuter'>
        {errorModal &&<ErrorModal errorModal={setErrorModal} showHome={setOpenHome}/>}
     </div>
  

    
     </div>
  

  );
}

export default App;
