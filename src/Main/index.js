// import { useHistory} from "react-router-dom";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React from "react";
// import Login from "../Login";
// import Signin from "../Signin";
// import Home from "./Home";
import './styles.scss';
const Main=()=>
{
    const navigate=useNavigate()
    return( 
        <div className="main">
        <div className="navbar">
            {/* <button className="Hbutton" onClick={()=>navigate('Index')}>Home</button> */}
             <button className="Hbutton" onClick={()=>navigate('Login')} >Login</button>
            <button className="Hbutton" onClick={()=>navigate('Signin')}>Signin</button>
        </div>
        </div>
    );
}
export default Main;

//  {/* <Link onClick={Home()} to="/"><button className="Hbutton">Home</button></Link> */}
//             {/* <Link  to="/Login"><button className="Hbutton">Sign in</button></Link>
//             <Link  to="/Signin"><button className="Hbutton">Sign Up</button></Link> */}
//             {/* <li><Link className="Hbutton" to="/Login">Login</Link></li>
//             <li><Link className="Hbutton" to="/Signin">Signin</Link></li> */}
//             {/* <Routes>
//             <Route  path="/Login" component={<Login/>}/>
//             <Route  path="/Signin" component={<Signin/>}/>
//             </Routes> */}