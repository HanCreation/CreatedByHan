import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
          {/* <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video-editing" element={<VideoEditingPage />} />
            <Route path="/Computer-Science" element={<CodingPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes> */}
          {/* <div className="mb-16">
            <div className="w-full mt-32 mb-8 text-black text-center">
              <img 
              src="https://cdn.discordapp.com/attachments/1292737012411011092/1292854580127993916/Han_Creation_2021_Inverted_-_Copy.jpg?ex=67054027&is=6703eea7&hm=10cb1f8449bc2f9ca23dd70cc0f95d3779dcb4ef913c9a24685be50cee959767&" 
              alt="Main Picture" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '70vh' }}
            />
              <h1 className="text-6xl font-bold mb-4">
                Dean Hans Felandio Setiadi Saputra
              </h1>
              <p className="text-2xl mb-8">
                Front-End Developer | Machine Learning Enthusiast | Data
                Science Enthusiast
              </p>
            </div>
          </div> */}
          <AboutPage />
        </main>
        <Footer />
        <FloatingSocial />
      </div>
    </Router>
  );
}

export default App;
