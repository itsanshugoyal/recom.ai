import { Navbar, Home, Movies, Books, Podcasts, BlogPage, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Nopage = lazy(() => import("./components/Nopage"));
const Terms = lazy(() => import("./components/Terms"));
const Privacy = lazy(() => import("./components/Privacy"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Newsletter = lazy(() => import("./components/Newsletter"));
const Feedback = lazy(() => import("./components/Feedback"));

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen text-center justify-center  align-middle ">
        <Navbar />
        <Suspense fallback={<div>Loading Page</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/books" element={<Books />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/post/:postId" element={<BlogPage />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="*" element={<Nopage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
