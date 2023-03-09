import axios from "axios";
import React ,{useState}from "react";
import { useNavigate } from "react-router-dom";
import './styles.scss';
const Signin=()=>
{
   const[mailid,setmailid]=useState('')
   const[name,setname]=useState('')
   const[roll,setroll]=useState('')
   const navigate=useNavigate();
    // const handleChange=(event,id)=>{
    //     setstate({
    //         ...state,
    //         [id]:event.target.value,
    //     })
    // }
    const handleSubmit=(e)=>{
        // const employee=[mailid,name,roll]
        axios.post("http://localhost:8080/employee/add",{
            // method:"POST",
            // headers:{"Content-Type":"application/json"},
            // body:JSON.stringify(employee)
            mailid:mailid,
            name:name,
            roll:roll,
    }).then((response)=>{
        console.log(response.data);
        navigate('/Login');
    }).catch((error)=>{
        console.log(error);
    });
    };
    return(
        <div className="Reg">
            <h2 className="rh2">Sign up</h2>
            <input className="Sinput" type="Email"value={mailid} onChange={(e)=>setmailid(e.target.value)} placeholder="mail id"/>
            <input className="Sinput" type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="name"/>
            <input className="Sinput" type="text" value={roll} onChange={(e)=>setroll(e.target.value)} placeholder="role"/>
            <button className="Rbutton"onClick={()=>handleSubmit()}>submit</button>
        </div>
    );
}
export default Signin;