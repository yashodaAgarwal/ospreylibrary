import  axios  from "axios";

export const AddtoLikeList = async (video, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    if (response.status === 201) {
      videoDispatch({
        type: "ADD_TO_LikeList",
        payload: response.data.likes,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const RemovetoLikeList = async (video, videoDispatch) => {
    try {
      const response = await axios.delete(
        `/api/user/likes/${video._id}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        videoDispatch({
          type: "REMOVE_FROM_LikeList",
          payload: video,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };