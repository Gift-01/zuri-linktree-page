import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Component/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path= "/contact" element={< Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
