import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollButton from "./components/scroll-button";
import { useState } from "react";
import PreLoader from "./components/PreLoader";

function App() {
  const [isLoading, setisLoading] = useState(true);
  return (
    <>
      <Router>
        {isLoading ? <PreLoader /> : ""}
        <Navbar />
        <Home setisLoading={setisLoading} />
        <ScrollButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
