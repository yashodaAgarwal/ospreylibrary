import {Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage,
  WatchLaterPage,
  Explorepage,
  LikePage} from "./pages";


const  App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/videos" element={<Explorepage/>}/>
      <Route path="/watchlater" element={<WatchLaterPage/>}/>
      <Route path="/like" element={<LikePage/>}/>
    </Routes>
    </div>
  );
}

export default App;
