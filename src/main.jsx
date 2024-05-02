import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from "./components/navbar/Navbar.jsx";
import DocumentCard from './components/cards/documentcard/DocumentCard.jsx';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
)
