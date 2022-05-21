const videoReducer = (state, action) => {
  switch (action.type) {
    case "savedata":
      return { ...state, videodata: action.payload };
    case "ADD_TO_WATCHLATER":
      return { ...state, watchLater: action.payload };
    case "REMOVE_FROM_WATCHLATER":
      return {
        ...state,
        watchLater: state.watchLater.filter(
          (video) => video.id !== action.payload.id
        ),
      };
    case "ADD_TO_LikeList":
      return { ...state, LikeList: action.payload };
    case "REMOVE_FROM_LikeList":
      return {
        ...state,
        LikeList: state.LikeList.filter(
          (video) => video.id !== action.payload.id
        ),
      };
    case "ADD_TO_History":
      return { ...state, History: action.payload };
    case "REMOVE_FROM_History":
      return {
        ...state,
        History: state.History.filter(
          (video) => video.id !== action.payload.id
        ),
      };
    case "saveCurrentVideo":
      return { ...state, currentVideo: action.payload };
    case "ClearHistory":
      return{ ...state, History:[]}
    default:
      return state;
  }
};

export default videoReducer;
