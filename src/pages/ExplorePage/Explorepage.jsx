import React, { useEffect } from "react";
import axios from "axios";
import { CategoryList, Navbar, Sidebar, Videocard } from "../../components";
import { useFilter, useVideo } from "../../context";
import "./Explorepage.css";

function Explorepage() {
  const {
    videoState: { videodata },
    videoDispatch,
  } = useVideo();

  const {
    FilterState: { byCategory },
  } = useFilter();

  const filteredVideo = () => {
    let filterVideo = videodata;
    if (byCategory) {
      filterVideo = filterVideo.filter(
        (video) => video.category === byCategory
      );
    }
    return filterVideo;
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/videos");
        videoDispatch({ type: "savedata", payload: response.data.videos });
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
        <div className="home-wrapper">
          <CategoryList />
          <div className="video-list">
            {filteredVideo().map((item) => {
              return (
                <div className="video-card" key={item.id}>
                  <Videocard item={{ item }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explorepage;
