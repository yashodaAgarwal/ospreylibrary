import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation()
  const frm = location?.state?.from?.pathname;
  const [isLogin, setIsLogin] = useState(false);
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  const handleSignupData = async (firstname,lastname,email, password) => {
    const getValues = { firstname,lastname,email, password};
    try {
      const response = await axios.post(`/api/auth/signup`,getValues);
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("token", response.data.encodedToken);
        navigate("/login")
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 422) {
        <div class="alert-items alert-success ">
              <i class="fas fa-exclamation-triangle alert-icon">{error.response.data.errors}</i>
            </div>
      }
    }
  };
  const handleLoginData = async (email, password) => {
    const getLoginValues = { email, password };
    try {
      const res = await axios.post("/api/auth/login", getLoginValues );
      if (res.status === 200 || res.status === 201) {
        setIsLogin(true);
        localStorage.setItem("token", res.data.encodedToken);
        frm ?navigate(frm):navigate("/");
        localStorage.setItem("user", res.data.user);
      }
    } catch (error) {
      <div class="alert-items alert-success ">
      <i class="fas fa-exclamation-triangle alert-icon">{error.response.data.errors}</i>
    </div>
     
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        handleSignupData,
        handleLoginData,
        user,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
