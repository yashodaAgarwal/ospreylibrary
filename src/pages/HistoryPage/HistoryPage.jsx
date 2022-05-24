import { Navbar, Sidebar, Videocard } from "../../components";
import { useTheme, useVideo } from "../../context";
import React, { useEffect } from "react";
import axios from "axios";
import { AiFillCloseCircle } from "react-icons/ai";
import { ClearHistory, RemoveFromHistory } from "../../utils/HistoryHelper";
import "./HistoryPage.css";

function HistoryPage() {
  const { theme } = useTheme();
  const {
    videoState: { History },
    videoDispatch,
  } = useVideo();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/user/history");
        videoDispatch({ type: "saveHistory", payload: response.data.history });
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
        <div
          className={theme === "light" ? "home-wrapper" : "home-wrapper dark"}
        >
          <div className="historyHeading">
            <h1>History</h1>
            <p
              className="ClearButton"
              onClick={()=>ClearHistory(videoDispatch)}
              // onClick={() => videoDispatch({ type: "ClearHistory" })}
            >
              Clear History
            </p>
          </div>
          <div className="video-list">
            {History.map((item) => {
              return (
                <div
                  className={
                    theme === "light" ? "video-card History-Card" : "video-card dark"
                  }
                  key={item.id}
                >
                  <Videocard className="video-card" item={{ item }} />
                  <AiFillCloseCircle
                   className="delete-video"
                    onClick={() => RemoveFromHistory(item, videoDispatch)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
