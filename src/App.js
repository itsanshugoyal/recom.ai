import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Books from "./components/Books";
import Podcasts from "./components/Podcasts";
import Nopage from "./components/Nopage";

import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App text-center justify-center h-full align-middle">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home  />}
          />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
