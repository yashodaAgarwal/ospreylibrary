import React from "react";
import { MdPlaylistPlay, MdWatchLater } from "react-icons/md";
import { FaThumbsUp } from "react-icons/fa";
import "./Videocard.css";

function Videocard({ item }) {
  const { creatorsLogo, creator, description, views, thumbnailImg, _id } =
    item.item;

  return (
    <div>
      <img className="thumbnail" src={thumbnailImg} alt={item.title} />
      <div className="video-details">
        <img src={creatorsLogo} alt={creator} className="creator-dp" />
        <div>
          <h3 className="video-title">{description}</h3>
          <p>{creator}</p>
          <p>{views} views</p>
        </div>
        <div>
          <FaThumbsUp className="options" />

          <MdPlaylistPlay className="options" />

          <MdWatchLater className="options" />
        </div>
      </div>
    </div>
  );
}

export default Videocard;
