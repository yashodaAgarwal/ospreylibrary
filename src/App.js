import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Homepage, Explorepage } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/videos" element={<Explorepage />} />
      </Routes>
    </div>
  );
};

export default App;
