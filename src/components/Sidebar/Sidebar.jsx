import React from "react";
import "./Sidebar.css";
import {
  MdHome,
  MdExplore,
  MdHistory,
  MdPlaylistPlay,
  MdThumbUp,
  MdWatchLater,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useFilter } from "../../context";

const Sidebar = () => {
  const { FilterDispatch } = useFilter();
  return (
    <section className="Sidebar-container">
      <Link className="sidebar-links" to="/">
        <MdHome className="sidebar-icons" />
        Home
      </Link>
      <Link
        className="sidebar-links"
        to="/videos"
        onClick={() => FilterDispatch({ type: "Clear_Filter" })}
      >
        <MdExplore className="sidebar-icons" />
        Explore
      </Link>
      <Link className="sidebar-links" to="/">
        <MdHistory className="sidebar-icons" /> History
      </Link>
      <Link className="sidebar-links" to="/">
        <MdPlaylistPlay className="sidebar-icons" /> Playlist
      </Link>
      <Link className="sidebar-links" to="/">
        <MdThumbUp className="sidebar-icons" />
        Liked Videos
      </Link>
      <Link className="sidebar-links" to="/">
        <MdWatchLater className="sidebar-icons" /> Watch Later
      </Link>
    </section>
  );
};

export default Sidebar;
