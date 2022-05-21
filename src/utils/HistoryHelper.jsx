import  axios  from "axios";

export const AddtoHistory = async (video, videoDispatch) => {
  
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5YmM4MzRhYS1kYzJhLTRiMjUtOWU3Ny00Y2RlMWJmNWNiZWIiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.jNVFef-QeoOawgYBqFjADppRxHPAOpWV_-WuzLQA0bs",
        },
      }
    );
    console.log(response)
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
            authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI5YmM4MzRhYS1kYzJhLTRiMjUtOWU3Ny00Y2RlMWJmNWNiZWIiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.jNVFef-QeoOawgYBqFjADppRxHPAOpWV_-WuzLQA0bs",
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