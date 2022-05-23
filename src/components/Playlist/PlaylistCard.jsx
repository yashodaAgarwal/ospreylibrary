import {  useVideo } from "../../context";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import "./playlistcard.css";
import { deletePlaylist } from "../../utils/PlaylistHelper";

export default function PlaylistCard({ playlist }) {
  const {
    videoDispatch,
  } = useVideo();

  return (
    <div>
      <div
        className="playlist-card"
        key={playlist._id}
      >
        <Link to={`/playlist/${playlist._id}`}>
          {playlist.videos.length > 0 ? (
            <img
              src={playlist?.videos[0]?.thumbnailImg}
              alt={playlist?.title}
              className="playlist-thumbnail"
            />
          ) : (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKR1e4vaicSqiqDX0ob97-PXHl3ibsAhggQ&usqp=CAU"
              alt={playlist?.title}
              className="playlist-thumbnail"
            />
          )}
        </Link>
        <div className="playlist-details">
          <div>
            <h3 className="playlist-title">{playlist?.title}</h3>
            <p className="p-sm p-grey">videos: {playlist?.videos.length}</p>
          </div>
          <AiFillDelete
            className="delete-icon"
            onClick={() => deletePlaylist(playlist, videoDispatch)}
          />
        </div>
      </div>
    </div>
  );
}