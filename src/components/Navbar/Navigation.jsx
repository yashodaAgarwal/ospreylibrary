import { MdNightlightRound, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { useTheme } from "../../context";
import "./Navigation.css";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="nav">
      <Link to="/">
        <div className="logo">
          <h1 className="logo-text">YasTube</h1>
        </div>
      </Link>
      <div className="auth">
        <button className="auth-btn">SignUp</button>
        <button className="auth-btn">Login</button>
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
