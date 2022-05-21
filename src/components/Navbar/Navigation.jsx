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
          <h1 className="logo-text">YasTube</h1>
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
