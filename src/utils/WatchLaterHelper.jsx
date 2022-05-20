import axios from "axios";

export const Addtowatchlater = async (video, videoDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      // {
      //   headers: {
      //     authorization: localStorage.getItem("token"),
      //   },
      // }
    );
    console.log(response.data.watchlater);
    if (response.status === 201) {
      videoDispatch({
        type: "ADD_TO_WATCHLATER",
        payload: response.data.watchlater,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const Removetowatchlater = async (video, videoDispatch) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${video._id}`, 
    // {
    //   headers: {
    //     authorization: localStorage.getItem("token"),
    //   },
    // }
    );
    console.log(response);
    if (response.status === 200) {
      videoDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: video,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
