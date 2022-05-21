import {Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage,
  WatchLaterPage,
  LikePage,
  Explorepage,
  SingleVideoPage,
  HistoryPage} from "./pages";


const  App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/videos" element={<Explorepage/>}/>
      <Route path="/watchlater" element={<WatchLaterPage/>}/>
      <Route path="/like" element={<LikePage/>}/>
      <Route path="/SingleVideo" element={<SingleVideoPage/>}/>
      <Route path="/history" element={<HistoryPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
