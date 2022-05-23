import React from "react";
import { MdPlaylistPlay, MdWatchLater, MdUnpublished } from "react-icons/md";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { AddtoLikeList, RemovetoLikeList } from "../../utils/LikeHelper";
import {
  Addtowatchlater,
  Removetowatchlater,
} from "../../utils/WatchLaterHelper";
import { usePlaylist, useVideo } from "../../context";
import { Link } from "react-router-dom";
import { AddtoHistory } from "../../utils/HistoryHelper";
import "./Videocard.css";
import PlaylistModal from "../Playlist/PlaylistModal";

function Videocard({ item }) {
  const {
    videoState: { watchLater, LikeList },
    videoDispatch,
  } = useVideo();
  const { creatorsLogo, creator, description, views, time, thumbnailImg, _id } =
    item.item;
    const { showPlaylistModal, setShowPlaylistModal } = usePlaylist();
  return (
    <div>
      <Link to="/SingleVideo">
        <img
          className="thumbnail"
          src={thumbnailImg}
          alt={item.title}
          onClick={() => {
            videoDispatch({ type: "saveCurrentVideo", payload: item.item });
            AddtoHistory(item.item, videoDispatch);
          }}
        />
      </Link>
      <div className="video-details">
        <img src={creatorsLogo} alt={creator} className="creator-dp" />
        <div>
          <h3 className="video-title">{description}</h3>
          <p>{creator}</p>
          <p>
            {views} views . {time} ago
          </p>
        </div>
        <div>
          <div>
            {LikeList.some((video) => video._id === _id) ? (
              <FaThumbsUp
                className="options"
                onClick={() => RemovetoLikeList(item.item, videoDispatch)}
              />
            ) : (
              <FaRegThumbsUp
                className="options"
                onClick={() => AddtoLikeList(item.item, videoDispatch)}
              />
            )}
          </div>

          <MdPlaylistPlay
                className="options"
                onClick={() => {
                  setShowPlaylistModal((prev) => !prev);
                }}
              />
            
            {showPlaylistModal && (
              <PlaylistModal video={item.item} key={_id} />
            )}
         
          <div>
            {watchLater.some((video) => video._id === _id) ? (
              <MdUnpublished
                className="options"
                onClick={() => Removetowatchlater(item.item, videoDispatch)}
              />
            ) : (
              <MdWatchLater
                className="options"
                onClick={() => Addtowatchlater(item.item, videoDispatch)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videocard;
