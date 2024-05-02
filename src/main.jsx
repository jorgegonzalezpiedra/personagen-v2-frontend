import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/Navbar.jsx";
import IdsPage from "./pages/idspage/IdsPage.jsx";
import UserPage from "./pages/user/UserPage.jsx";
import TextPage from "./pages/text/TextPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/idsdata"/>}/>
        <Route path="/idsdata" element={<IdsPage />} />
        <Route path="/userdata" element={<UserPage />} />
        <Route path="/textdata" element={<TextPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
