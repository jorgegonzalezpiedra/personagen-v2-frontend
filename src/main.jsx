import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/Navbar.jsx";
import IdsPage from "./pages/ids/IdsPage.jsx";
import ProfilePage from "./pages/profile/ProfilePage.jsx";
import TextPage from "./pages/text/TextPage.jsx";
import DocsPage from "./pages/docs/DocsPage.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/idsdata"/>}/>
        <Route path="/idsdata" element={<IdsPage />} />
        <Route path="/userdata" element={<ProfilePage />} />
        <Route path="/textdata" element={<TextPage />} />
        <Route path="/docsdata" element={<DocsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
