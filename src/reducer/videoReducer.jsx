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
    default:
      return state;
  }
};

export default videoReducer;
