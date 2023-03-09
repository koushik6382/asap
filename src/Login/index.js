// import {Link} from 'react-router-dom';
import axios from "axios";
import React ,{useState}from "react";
import {useNavigate} from 'react-router-dom'
// import Navbar from "../components/Navbar"
// import Home from "../Home"
import "./styles.scss"
const Login=()=>
{
    
    // const[state,setstate]=useState({
    //     username:"",
    //     password:"",
    // })
    // const handleChange=(event,id)=>{
    //     setstate({
    //         ...state,
    //         [id]:event.target.value,
    //     })
    // }
    // const history=useHistory();
    const[mailid,setmailid]=useState('')
    const[roll,setroll]=useState('')
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
            e?.preventDefault();
            try{
                const response= await axios.post(`http://localhost:8080/employee/login?mailid=${mailid}`)
                if(response.data===roll){
                    console.log(response.data)
                    navigate("/Home");
                }
                else{
                    console.log(response.data);
                }
            }
            catch(error){
                console.error(error);
            }
    };
   
    return(
        <div className="Log">
            <h2 className="lh2">Login</h2>
            <input className="Linput" type="text" value={mailid} onChange={(e)=>setmailid(e.target.value)} placeholder="mailid"/>
            <input className="Linput" type="text" value={roll} onChange={(e)=>setroll(e.target.value)} placeholder="role"/>
            <button  className="Lbutton" onClick={(e)=>handleSubmit()}>submit</button>
        </div>
        
    );
}
export default Login;