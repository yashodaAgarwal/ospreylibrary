import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./homepage.css";
import { useFilter, useTheme} from "../../context";

const Homepage = () => {
  const { theme } = useTheme();

  const { FilterDispatch } = useFilter();
  return (
    <div> 
      <Navbar />
      <div className={theme === "light" ? "HomePage" : "HomePage dark"}>
      <div className="Home-image" >
        <div >
        <h1 className="cover-page-a">Welcome to Osprey. </h1>
        <p className="cover-page-b">A Video Library to explore videos from various category.</p>
        <Link to="/videos" onClick={() => FilterDispatch({ type: "Clear_Filter" })}><button className={theme === "light" ? "cover-page-button dark" : "cover-page-button "} >Explore</button></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Homepage;
