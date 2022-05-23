import  axios  from "axios";

export const AddtoHistory = async (video, videoDispatch) => {
  
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    if (response.status === 201) {
      videoDispatch({
        type: "ADD_TO_History",
        payload: response.data.history,
      });
    }
  } catch (error) {
    console.log(error); 
  }
};

export const RemoveFromHistory = async (video, videoDispatch) => {
    try {
      const response = await axios.delete(
        `/api/user/history/${video._id}`,
        {
          headers: {
            authorization:localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        videoDispatch({
          type: "REMOVE_FROM_History",
          payload: video,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  export const ClearHistory = async ( videoDispatch) => {
    try {
      const response = await axios.delete(
        `/api/user/history/all`,
        {
          headers: {
            authorization:localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        videoDispatch({
          type: "ClearHistory"
        });
      }
    } catch (error) {
      console.log(error);
    }
  };