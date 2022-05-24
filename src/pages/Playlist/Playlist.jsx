import { useTheme, useVideo } from "../../context";
import { Navbar, Sidebar, PlaylistCard } from "../../components";

export default function Playlist() {
  const {
    videoState: { playlists },
  } = useVideo();
  const { theme } = useTheme();
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div
          className={theme === "light" ? "home-wrapper" : "home-wrapper dark"}
        >
      
          <ul className={theme === "light" ? "video-list" : "video-list dark"}>
            {playlists?.length === 0 ? (
              <div className="empty-page">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKR1e4vaicSqiqDX0ob97-PXHl3ibsAhggQ&usqp=CAU"
                  alt="empty-page"
                />
              </div>
            ) : (
              playlists?.map((playlist) => (
                <PlaylistCard playlist={playlist} key={playlist._id} />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
