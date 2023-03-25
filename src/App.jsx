import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
function App() {
  return (
    <Router>
      <CustomCursor
        strokeWidth={10}
        targets={[".link", ".your-css-selector"]}
        customClass="custom-cursor"
        dimensions={50}
        opacity={0.5}
        fill="#ff9301"
        strokeColor={"#ff9301"}
        scale={0.1}
        smoothness={{
          movement: 0.05,
          scale: 0.1,
          opacity: 0.5,
        }}
        targetOpacity={0.5}
      />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
