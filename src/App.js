import { Navbar, Home, Movies, Books, Podcasts, BlogPage, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";

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
          <Route path="/post/:postId" element={<BlogPage />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
