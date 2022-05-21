import React from "react";
import YouTube from "react-youtube";
import { Navbar } from "../../components";
import { useTheme, useVideo } from "../../context";
import { MdPlaylistPlay, MdWatchLater, MdUnpublished } from "react-icons/md";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { AddtoLikeList, RemovetoLikeList } from "../../utils/LikeHelper";
import {
  Addtowatchlater,
  Removetowatchlater,
} from "../../utils/WatchLaterHelper";
import "./SingleVideoPage.css"
var getYouTubeID = require('get-youtube-id');

function SingleVideoPage() {
  const {theme} = useTheme();
  const {
    videoState: { watchLater, LikeList, currentVideo },
    videoDispatch,
  } = useVideo();
  const { creatorsLogo, creator,description, views, _id,videoLink,time } = currentVideo;
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className={theme === "light" ? "HomePage home-wrapper" : "HomePage home-wrapper dark"}>
          <YouTube videoId={getYouTubeID(videoLink)} opts={opts} />
          <div className="video-details">
        <img src={creatorsLogo} alt={creator} className="creator-dp" />
        <div>
          <h3 className="video-title">{description}</h3>
          <p>{creator}</p>
          <p>{views} views . {time} ago</p>
        </div>
        <div>
          <div>
            {LikeList.some((video) => video._id === _id) ? (
              <FaThumbsUp
                className="options"
                onClick={() => RemovetoLikeList(currentVideo, videoDispatch)}
              />
            ) : (
              <FaRegThumbsUp
                className="options"
                onClick={() => AddtoLikeList(currentVideo, videoDispatch)}
              />
            )}
          </div>

          <MdPlaylistPlay className="options" />
          <div>
            {watchLater.some((video) => video._id === _id) ? (
              <MdUnpublished
                className="options"
                onClick={() => Removetowatchlater(currentVideo, videoDispatch)}
              />
            ) : (
              <MdWatchLater
                className="options"
                onClick={() => Addtowatchlater(currentVideo, videoDispatch)}
              />
            )}
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default SingleVideoPage;
