import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Details from "./Details";
import MoreResults from "./moreResults";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Details/:ownerId/:repo" element={<Details />} />
      <Route path="/moreResults" element={<MoreResults />} />
    </Routes>
  );
}

export default App;
