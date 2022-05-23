import React from "react";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillCheckCircle,
  AiFillDelete
} from "react-icons/ai";
import { usePlaylist, useTheme, useVideo } from "../../context";
import { addToPlaylist, createPlaylist } from "../../utils/PlaylistHelper";
import { deletePlaylist } from "../../utils/PlaylistHelper";
import "./playlistModal.css";

export default function PlaylistModal({ video }) {
  const { playlist, setPlaylist, setShowPlaylistModal } = usePlaylist();
  const {
    videoDispatch,
    videoState: { playlists },
  } = useVideo();

  const { theme } = useTheme();

  const videoInPlaylist = (playlist) => {
    return playlist.videos.some((vid) => vid._id === video._id);
  };

  return (
    <div>
      <div
        className={theme === "light" ? "playlist-modal" : "playlist-modal dark"}
      >
        <div className="modal">
          <h2 className="modal-title p-lg">
            My Playlists
            <AiFillCloseCircle
              className="close-modal"
              onClick={() => setShowPlaylistModal((prev) => !prev)}
            />
          </h2>

          <ul className="playlists">
            {playlists.map((playlist) => (
              <li
                key={playlist._id}
                onClick={() =>
                  videoInPlaylist(playlist)
                    ? console.log("Video already exists in the playlist")
                    : addToPlaylist(playlist._id, video, videoDispatch)
                }
              >
                <label className="playlist">
                  {videoInPlaylist(playlist) ? (
                    <AiFillCheckCircle className="check-icon" />
                  ) : (
                    <AiFillPlusCircle className="circle-icon" />
                  )}
                  <div className="Delete-icon">
                  {playlist.title}
                  {videoInPlaylist(playlist) ? (
                    <AiFillDelete  onClick={() => deletePlaylist(playlist, videoDispatch)} />
                  ) : (
                    <AiFillDelete  onClick={() => deletePlaylist(playlist, videoDispatch)} />
                  )}
                  </div>
                </label>
              </li>
            ))}
          </ul>
          <div className="create-playlist">
            <input
              type="text"
              className="title"
              placeholder="Create Playlist"
              value={playlist.title}
              onChange={(e) =>
                setPlaylist((prev) => ({ ...prev, title: e.target.value }))
              }
            />
            <AiFillPlusCircle
              className="add-playlist"
              onClick={() =>
                createPlaylist(
                  playlist.title,
                  playlist.description,
                  videoDispatch,
                  setPlaylist
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
