import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollButton from "./components/scroll-button";

function App() {
  // const data = { setisLoading };
  return (
    <>
      <Router>
        {/* {isLoading ? <PreLoader /> : ""} */}
        <Navbar />
        <Home />
        <ScrollButton />
        <Footer />
      </Router>
    </>
  );
}

export default App;
