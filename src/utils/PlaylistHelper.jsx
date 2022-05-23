import  axios  from "axios";
const  userToken = localStorage.getItem("token");
export const createPlaylist = async (
  title = "",
  description = "",
  videoDispatch,
  setPlaylist
) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      {
        playlist: { title: title, description: description },
      },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    if (response.status === 201) {
      videoDispatch({
        type: "CREATE_PLAYLIST",
        payload: response.data.playlists,
      });
      setPlaylist({ title: "", description: "" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePlaylist = async (playlist, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlist._id}`, {
      headers: {
        authorization: userToken,
      },
    });
    if (response.status === 200) {
      videoDispatch({
        type: "DELETE_PLAYLIST",
        payload: response.data.playlists,
      });
     
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const addToPlaylist = async (playlistID, video, videoDispatch) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistID}`,
      { video },
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 409) {
    }
    if (response.status === 201 || response.status === 200) {
      videoDispatch({
        type: "ADD_TO_PLAYLIST",
        payload: response.data.playlist,
      });
    }
  } catch (error) {
    if (error.response.status === 409) {
    } else {
      console.log(error.message);
    }
  }
};

export const deleteFromPlaylist = async (playlist, video, videoDispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlist._id}/${video._id}`,
      {
        headers: {
          authorization: userToken,
        },
      }
    );
    if (response.status === 200) {
      videoDispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload: response.data.playlist,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};