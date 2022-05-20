import React from "react";
import { MdPlaylistPlay, MdWatchLater, MdUnpublished } from "react-icons/md";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { AddtoLikeList, RemovetoLikeList } from "../../utils/LikeHelper";
import {
  Addtowatchlater,
  Removetowatchlater,
} from "../../utils/WatchLaterHelper";
import { useVideo } from "../../context";
import "./Videocard.css"

function Videocard({ item }) {
  const {
    videoState: { watchLater, LikeList},
    videoDispatch,
  } = useVideo();
  const { creatorsLogo, creator, description, views, thumbnailImg,_id, time } =
    item.item;

  return (
    <div>
      <img className="thumbnail" src={thumbnailImg} alt={item.title} />
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

          <MdPlaylistPlay className="options" />
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
