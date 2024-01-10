import { useState } from "react";
import Search from "./components/search";
import Navbar from "./components/navbar";
import Allcountry from "./components/allcountries";
import Countryinfo from "./components/countryinfo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app">
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Allcountry />} />
              <Route path="/country/:name" element={<Countryinfo />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
