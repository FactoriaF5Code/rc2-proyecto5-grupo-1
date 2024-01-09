import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { HomeCat } from "./components/HomeCat";
import "./App.css";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cat" element={<HomeCat />} />
        </Routes>

      {/* <Routes>
        <Route path="/" element={<Home language={"es"} />} />
        <Route path="/cat" element={<Home language={"cat"} />} />
      </Routes> */}
    </>
  );
}

export default App;
