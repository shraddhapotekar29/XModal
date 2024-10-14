
import React,{ useState } from 'react'
import Modal from './Modal/Modal';
import './App.css'

function App() {
 const[openModal,setOpenModal]=useState(false);
  return (
    <>
    <div style={{textAlign:"center"}}>
   <h1>User Details Modal</h1>
   <button style={{backgroundColor:"blue",color:"#ffffff",padding:"0.5rem 1rem",borderRadius:"8px",border:"1px solid #87CEEB"}} onClick={()=>setOpenModal(true)}>Open Form</button>
   </div>
   {openModal && <Modal setOpenModal={setOpenModal}/>}
    </>
  )
}

export default App
