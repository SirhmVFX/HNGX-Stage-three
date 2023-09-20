import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImageGallery from "./pages/ImageGallery";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<ImageGallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
