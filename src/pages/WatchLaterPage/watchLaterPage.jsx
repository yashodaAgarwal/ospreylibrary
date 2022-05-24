import { Navbar, Sidebar, Videocard } from "../../components";
import { useTheme, useVideo } from "../../context";
import React, { useEffect } from "react";
import axios from "axios";

function WatchLaterPage() {
  const {theme} = useTheme();
  const {
    videoState: { watchLater },videoDispatch
  } = useVideo();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/watchlater");
        videoDispatch({ type: "saveWatchLater", payload: response.data.watchlater });
      } catch (error) {
        console.log(error, "Could not load data");
      }
    })();
  }, [videoDispatch]);
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
