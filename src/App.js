import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Books from "./components/Books";
import Podcasts from "./components/Podcasts";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogpage from "./components/Blogpage";
import { lazy } from "react";
import Footer from "./components/Footer";

const Nopage = lazy(() => import("./components/Nopage"));

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen text-center justify-center  align-middle " style={{ backgroundColor: "#EEF0F2" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/blogpage" element={<Blogpage />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
