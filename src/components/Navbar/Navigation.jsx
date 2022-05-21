import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../context";
import "./Navigation.css";

const Navbar = () => {
  const { isLogin, setIsLogin } = useAuth();
  const { theme, setTheme } = useTheme();
  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo">
          <img className="logo-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pandion_haliaetus_-San_Francisco_Bay%2C_California%2C_USA-head-8_%282%29.jpg/330px-Pandion_haliaetus_-San_Francisco_Bay%2C_California%2C_USA-head-8_%282%29.jpg" alt="" />
          <h1 className="logo-text">Osprey</h1>
        </div>
      </Link>
      <div className="auth">
        <Link to="/signup"><button className="auth-btn">SignUp</button></Link>
        <Link to="/login">{isLogin ? (
            <button
              className="auth-btn"
              onClick={() => setIsLogin((isLogin) => !isLogin)}
            >
              logout
            </button>
          ) : (
            <button className="auth-btn">login</button>
          )}</Link>
        {theme === "dark" ? (
          <MdWbSunny onClick={() => setTheme("light")} className="theme-icon" />
        ) : (
          <MdNightlightRound
            onClick={() => setTheme("dark")}
            className="theme-icon"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
