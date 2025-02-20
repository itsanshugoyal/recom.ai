import { Navbar, BlogPage, Footer, Loader } from "./components";
import { Home, Movies, Books, Podcasts, SignIn, SignUp } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Nopage = lazy(() => import("./pages/Nopage"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Newsletter = lazy(() => import("./pages/Newsletter"));
const Feedback = lazy(() => import("./pages/Feedback"));

function App() {
  return (
    <BrowserRouter>
      <div className="App h-screen text-center justify-center  align-middle ">
        <Navbar />
        <Suspense fallback={<Loader />}>
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
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
