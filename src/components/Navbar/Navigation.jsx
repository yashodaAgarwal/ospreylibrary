import { Link } from "react-router-dom"
import "./Navigation.css"
const Navbar = () =>{
    return (
        <nav className="nav">
            <div className="logo">
            <img className="logo-image" src="https://cdn-icons-png.flaticon.com/512/48/48968.png" alt="logo" height="30px" width="30px"/>
            <h1 className="logo-text">YasTube</h1>
            </div>
            <div className="auth">
            <button className="auth-btn">SignUp</button>
            <button className="auth-btn">Login</button>
            </div>
        </nav>
    )
}

export { Navbar}