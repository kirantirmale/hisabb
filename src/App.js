import { Route, Routes } from "react-router-dom";
import "../src/styles/styles.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import  Pricing from "./pages/Pricing"
function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/features" element={<Feature />} />
        <Route index path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
