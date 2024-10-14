import React from "react";
import "./Modal.css";
import { useState } from "react";
const Modal = ({setOpenModal}) => {
    const[number,setNumber]=useState("");
    const[date,setDate]=useState("");
    const[user,setUser]=useState("");
    const[mail,setMail]=useState("");

    const submitForm=(e)=>{
     e.preventDefault();
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailRegex.test(mail)) {
         alert("Invalid email. Please check your email address.");
         return;
     }
    if(number.length<10)
    {
        alert("Invalid phone number. Please enter a 10-digit phone number.");
        return;
    }
    if(new Date(date)>new Date())
    {
        alert("Invalid date of birth.Date of birth cannot be in the future");
        return;
    }
    alert("Form Submited Successfully");
    setNumber("");
        setDate("");
        setUser("");
        setMail("");
    }
    return (<>
        <div className="wrapper" onClick={()=>setOpenModal(false)}></div>
        <div className="modal">
            <div className="modal-content">
                <form onSubmit={(e)=>submitForm(e)}>
                    <h2 style={{paddingTop:"1rem"}}>Fill Details</h2>
                    <label htmlFor="username">Username:</label>
                    <br/>
                    <input type="text" id="username" value={user} style={{marginBottom:"0.5rem"}} required onChange={(e)=>{setUser(e.target.value)}}/>
                     <br/>
                    <label htmlFor="email">Email Address:</label>
                    <br/>
                    <input type="email" value={mail} id="email" style={{marginBottom:"0.5rem"}} required onChange={(e)=>{setMail(e.target.value)}}/>
                    <br/>
                    <label htmlFor="phone">Phone Number:</label>
                    <br/>
                    <input type="number" id="phone" value={number} style={{marginBottom:"0.5rem"}} required onChange={(e)=>{setNumber(e.target.value)}}/>
                    <br/>
                    <label htmlFor="dob">Date of Birth:</label>
                    <br/>
                    <input type="date" id="dob" value={date} style={{marginBottom:"0.5rem"}} required onChange={(e)=>{setDate(e.target.value)}}/>   
                    <br/>
                     <button type="submit" className="submit-button">Submit</button> 
                </form>
            </div>
        </div>
    </>)
}
export default Modal;