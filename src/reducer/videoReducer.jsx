const videoReducer = (state, action) => {
  switch (action.type) {
    case "savedata":
      return { ...state, videodata: action.payload };
    default:
      return state;
  }
};

export default videoReducer;
