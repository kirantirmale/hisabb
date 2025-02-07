import { Route, Routes } from "react-router-dom";
import "../src/styles/styles.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Feature from "./pages/Feature";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/features" element={<Feature />} />
        
      </Routes>
    </>
  );
}

export default App;
