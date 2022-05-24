import React, { useEffect } from "react";
import axios from "axios";
import { Navbar, Sidebar, Videocard } from "../../components";
import {  useTheme, useVideo } from "../../context";

function LikePage() {
  const {theme} = useTheme(); 
  const {
    videoState: { LikeList },videoDispatch
  } = useVideo();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/likes");
        videoDispatch({ type: "saveLike", payload: response.data.likes });
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
          <h1>Liked Videos</h1>
          <div className=" video-list">
            {LikeList.map((item) => {
              return <div className={
                theme === "light" ? "video-card" : "video-card dark"
              } key={item.id}>
                  <Videocard className="video-card" item={{item}}/>
              </div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LikePage;
