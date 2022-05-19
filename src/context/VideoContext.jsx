import { createContext, useReducer, useContext } from "react";
import videoReducer from "../reducer/videoReducer";

const VideoFromServer = createContext(null);

const VideoProvider = ({ children }) => {
  const [videoState, videoDispatch] = useReducer(videoReducer, {
    videodata: [],
    watchLater:[],
    LikeList:[],
    currentVideo:null,
    History:[]
   });

  return (
    <VideoFromServer.Provider value={{ videoState, videoDispatch }}>
      {children}
    </VideoFromServer.Provider>
  );
};

const useVideo= () => useContext(VideoFromServer);

export { useVideo, VideoProvider };