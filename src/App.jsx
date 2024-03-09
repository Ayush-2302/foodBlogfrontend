import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componts/navbar/Navbar";
import Home from "./componts/home/Home";
import About from "./componts/about/About";
import Contact from "./componts/contact/Contact";
import Loginpage from "./componts/auth/Loginpage";
import Context from "./context/Context";
import Footer from "./componts/footer/Footer";
import Signup from "./componts/auth/Signup";

function App() {
  return (
    <>
      <Context>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="/" element={<Landing />} /> */}
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/login" element={<Loginpage />} />
            <Route exact path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </Context>
    </>
  );
}

export default App;
