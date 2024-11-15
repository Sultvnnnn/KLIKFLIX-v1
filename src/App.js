import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigationbar from "../src/components/navbar";
import Intro from "../src/components/intro";
import TrendingSection from "../src/components/trending";
import AnimeSection from "../src/components/anime";
import ComingSoon from "../src/components/comingsoon";
import MovieSection from "../src/components/movies";
import EduSection from "../src/components/educations";
import Footer from "../src/components/footer";
import BackToTop from "../src/components/backtotop";

// IMPORTAN HALAMAN WEB
import DandadanPage from "../src/components/anime/dandadanPage";
import "./Style/landingpage.css";
import DPWVPage from "./components/movies/dpwvPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navigationbar />

        <Routes>
          {/* Halaman utama */}
          <Route
            path="/"
            element={
              <>
                {/* Intro Section */}
                <div className="myBG">
                  <Intro />
                </div>

                {/* Main Sections */}
                <div className="mainContent">
                  <ComingSoon />
                  <TrendingSection />
                  <AnimeSection />
                  <MovieSection />
                  <EduSection />
                  <Footer />
                </div>

                {/* Back to Top Button */}
                <BackToTop />
              </>
            }
          />

          {/* Rute untuk halaman Dandadan */}
          <Route path="/dandadan" element={<DandadanPage />} />
          <Route path="/dpwv" element={<DPWVPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
