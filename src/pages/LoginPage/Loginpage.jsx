import React from "react";
import { useState } from "react";
import { Navbar, Sidebar } from "../../components";
import { useAuth } from "../../context/AuthContext";
import "./Loginpage.css";

const Loginpage = () => {
    const { handleLoginData } = useAuth();
    const [isError,setIsError]= useState("")
    const [login, setLogin] = useState({
        email: "",
        password: "",
      });
      const handleChange = (name) => (event) => {
        setLogin({ ...login, error: false, [name]: event.target.value });
      };
      const test = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123",
      };
      const loginHandler = (e) => {
        const { email, password } = login;
        e.preventDefault();
        if (email !== "" && password !== "") {
          handleLoginData(email, password);
        } else {
          setIsError("Please fill all the field");
        }
        setIsError("");
      };
      const {email,password} = login;
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="login-container">
        <div className="login-heading">Login</div>
        {isError && (
            <div className="alert-items alert-danger ">
              <i className="fas fa-exclamation-triangle alert-icon"></i>
              {isError}
            </div>
          )}
        <form action="#" onSubmit={loginHandler }>
          <div className="data">
            <label className="input-login label-class" >
              Email Address
            </label>
            <input type="email" onChange={handleChange("email")} value={email} required />
          </div>
          <div className="data">
            <label className="input-login label-class" >
              Password
            </label>
            <input type="password" onChange={handleChange("password")} value={password} placeholder="***********" required />
          </div>
          <div>
            <button class="btn login-btn">Login</button>
          </div>
          <button class="btn login-btn" onClick={() => {
                handleLoginData(test.email, test.password);
              }}>Login with test credential</button>
          <div class="create-new-account">
            Need a account? SignUp
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
