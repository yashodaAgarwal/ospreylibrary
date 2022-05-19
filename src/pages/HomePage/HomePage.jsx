import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import "./homepage.css";
import { useFilter } from "../../context";


const Homepage = () => {
  const { FilterDispatch } = useFilter();
  return (
    <div> 
      <Navbar />
      <div className="Home-image">
        <div>
        <h1 className="cover-page-a">Welcome to YasTube. </h1>
        <p className="cover-page-b">A Video Library to explore videos from various category.</p>
        <Link to="/videos" onClick={() => FilterDispatch({ type: "Clear_Filter" })}><button className="cover-page-button">Explore</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
