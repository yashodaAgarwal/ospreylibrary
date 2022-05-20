import { Navbar, Sidebar } from "../../components";
import { useTheme, useVideo } from "../../context";
import React from "react";
import { MdPlaylistPlay, MdWatchLater, MdUnpublished } from "react-icons/md";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { AddtoLikeList, RemovetoLikeList } from "../../utils/LikeHelper";
import {
  Addtowatchlater,
  Removetowatchlater,
} from "../../utils/WatchLaterHelper";
import { Link } from "react-router-dom";
import { AddtoHistory, RemoveFromHistory } from "../../utils/HistoryHelper";
import "./HistoryPage.css";

function HistoryPage() {
  const { theme } = useTheme();
  const {
    videoState: { watchLater, LikeList, History },
    videoDispatch,
  } = useVideo();
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
              onClick={() => videoDispatch({ type: "ClearHistory" })}
            >
              Clear History
            </p>
          </div>
          <div className="video-list">
            {History.map((item) => {
              return (
                <div
                  className={
                    theme === "light" ? "video-card" : "video-card dark"
                  }
                  key={item.id}
                >
                  <h4
                    class="card-with-badge cross"
                    onClick={() => RemoveFromHistory(item, videoDispatch)}
                  >
                    X
                  </h4>
                  <Link to="/SingleVideo">
                    <img
                      className="thumbnail"
                      src={item.thumbnailImg}
                      alt={item.title}
                      onClick={() => {
                        videoDispatch({
                          type: "saveCurrentVideo",
                          payload: item,
                        });
                      }}
                    />
                  </Link>
                  <div className="video-details">
                    <img
                      src={item.creatorsLogo}
                      alt={item.creator}
                      className="creator-dp"
                    />
                    <div>
                      <h3 className="video-title">{item.description}</h3>
                      <p>{item.creator}</p>
                      <p>{item.views} views</p>
                    </div>
                    <div>
                      <div>
                        {LikeList.some((video) => video._id === item._id) ? (
                          <FaThumbsUp
                            className="options"
                            onClick={() =>
                              RemovetoLikeList(item, videoDispatch)
                            }
                          />
                        ) : (
                          <FaRegThumbsUp
                            className="options"
                            onClick={() => AddtoLikeList(item, videoDispatch)}
                          />
                        )}
                      </div>

                      <MdPlaylistPlay className="options" />
                      <div>
                        {watchLater.some((video) => video._id === item._id) ? (
                          <MdUnpublished
                            className="options"
                            onClick={() =>
                              Removetowatchlater(item, videoDispatch)
                            }
                          />
                        ) : (
                          <MdWatchLater
                            className="options"
                            onClick={() => Addtowatchlater(item, videoDispatch)}
                          />
                        )}
                      </div>
                    </div>
                  </div>
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
