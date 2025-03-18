import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login=()=>{
    const uname=useRef(null);
    const upwd=useRef(null);
    const navigate=useNavigate();
    const [error,setError]=useState("");

    const login=()=>{
        if(!uname.current.value || !upwd.current.value){
            setError("Username and Password are required");
            return;
        }
        if (uname.current.value==="mru" && upwd.current.value==="mru@123"){
            navigate("/dashboard");
        }else{
            setError("Invalid Credentials");
        }
    };
return(
    <div className="login-container">
        <div className="login-box">
            <h2>Login</h2>
            {error && <p className="error-message">{error}</p>}
            <input type="text" ref={uname} placeholder="Enter username"/>
            <input type="password" ref={upwd} placeholder="Enter password"/>
            <button onClick={login}>Login</button>
        </div>

    </div>
)
}
export default Login;




//
import {Link,Outlet} from "react-router-dom";
import {useCart} from "./CartContect";



const Dashboard=()=>{
    const { cart }=useCart();

    return(
        <div className="dashboard-container">
            {/* Cart Icon with Superscript Count */}
            <Link to="/cart" className="cart-icon">
            {cart.length>0 && <span className="cart-count">{cart.length}</span>}
            </Link>
            <nav className="dashboard-nav">
                <Link to="">Laptops</Link>
                <Link to="mobiles">Mobiles</Link>
                <Link to='="watches'>Watches</Link>
            </nav>
            <div className="dashboard-content">
                <Outlet/>
            </div>
        </div>
    );
};
export default Dashboard;
