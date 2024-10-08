import React from "react";
import { HashRouter  as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSocial from "./components/FloatingSocial";
import HomePage from "./pages/HomePage";
import VideoEditingPage from "./pages/VideoEditingPage";
import CodingPage from "./pages/CodingPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video-editing" element={<VideoEditingPage />} />
            <Route path="/Computer-Science" element={<CodingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </Router>
  );
}

export default App;