import {Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage,
  WatchLaterPage,
  LikePage,
  Explorepage,
  Signup,
  Loginpage, 
  SingleVideoPage,
  HistoryPage,
  PageNotFound} from "./pages";
import { RequiresAuth } from "./RequiresAuth";


const  App = () => {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/videos" element={<Explorepage/>}/>
      <Route path="/login" element={<Loginpage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/watchlater" element={<RequiresAuth><WatchLaterPage/></RequiresAuth>}/>
      <Route path="/like" element={<RequiresAuth><LikePage/></RequiresAuth>}/>
      <Route path="/SingleVideo" element={<SingleVideoPage/>}/>
      <Route path="/history" element={<RequiresAuth><HistoryPage/></RequiresAuth>}/>
      <Route path="/" element={<PageNotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
