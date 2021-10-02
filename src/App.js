import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "/home/pi/react-app/src/components/Footer.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Footer />
      </Router>
    </>
  );
}

export default App;
