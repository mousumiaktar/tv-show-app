import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShowDetails from "./pages/ShowDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shows/:id" element={<ShowDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
