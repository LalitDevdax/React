import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar'; // Import the Navbar component
import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JavaScript bundle


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
