import React, { Children, useState } from 'react';
import Form from './component/form';
import './App.css';
import Modal from './component/modal';



function App() {
  const [showModal,setShowModal ] = useState(false);
 
  const handleClose=()=>{
    setShowModal(false)
  }
   
  const showModalOpen=()=>{
    setShowModal(true)
  }
  return (
   <div>
     {/* <Modal handleClose={handleClose}>
      <h2>10% 0ff coupon code</h2>
      <p>Use the code OPENCODE</p>
    </Modal> */}
    {showModal && <Modal  handleClose={handleClose}> 
         <Form/>
       </Modal >
      }  
     
     <button onClick={showModalOpen} style={{
      padding:"10px 20px",
      background:'red',
      color:'#fff',
      fontSize:'50px',
      border:'1px solid red'
     }}>Show Modal</button>
    
   </div>
    
    
  );
}

export default App;
