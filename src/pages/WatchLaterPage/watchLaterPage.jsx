import { Navbar, Sidebar, Videocard } from "../../components";
import { useTheme, useVideo } from "../../context";

function WatchLaterPage() {
  const {theme} = useTheme();
  const {
    videoState: { watchLater },
  } = useVideo();
  return (
    <div> 
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div className={theme === "light" ? "home-wrapper" : "home-wrapper dark"}>
          <h1>Watch Later</h1>
          <div className=" video-list">
            {watchLater.map((item) => {
              return (
                <div className={
                  theme === "light" ? "video-card" : "video-card dark"
                } key={item.id}>
                  <Videocard className="video-card" item={{ item }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchLaterPage;
