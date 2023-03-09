import React,{useState}from 'react'
import "./styles.scss";
// import Popup from 'reactjs-popup'
const AddMember = () => {
  const[name,setName]=useState('')
  const[roll,setroll]=useState('')
  return (
    <div className='contain'>
    <div className='popup1'>
      <input className='popup-text' type="text"value={name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
      <input className='popup-text' type="text" value={roll} onChange={(e)=>setroll(e.target.value)} placeholder="role"/>
      <button className='popup-b'>Add</button>
    </div>
    </div>
  )
}

export default AddMember;