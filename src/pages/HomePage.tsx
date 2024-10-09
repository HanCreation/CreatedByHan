import React from "react";
import { Link } from "react-router-dom";
import { Video, Code } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="mb-16">
          <div className="w-full mt-32 mb-8 text-black text-center">
            {/* <img 
              src="https://cdn.discordapp.com/attachments/1292737012411011092/1292854580127993916/Han_Creation_2021_Inverted_-_Copy.jpg?ex=67054027&is=6703eea7&hm=10cb1f8449bc2f9ca23dd70cc0f95d3779dcb4ef913c9a24685be50cee959767&" 
              alt="Main Picture" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '70vh' }}
            /> */}
            <h1 className="text-6xl font-bold mb-4">
              Dean Hans Felandio Setiadi Saputra
            </h1>
            <p className="text-2xl mb-8">
              Student | Web Developer | Machine Learning Enthusiast | Data Scientist | Video Editor
            </p>

  
            
          </div>
        </div>

        <div className="mt-20 mb-16"><h1 className="text-5xl font-bold mb-4 text-black text-center">
              Explore My Projects
            </h1> </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link
            to="/video-editing"
            className="bg-gradient-to-br from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 rounded-lg shadow-md flex flex-col justify-center items-center text-white p-8"
          >
            <Video size={64} className="mb-4" />
            <h2 className="text-3xl font-bold mb-4">Anything Edited by Han</h2>
            <p className="text-center">
              Explore my creative video editing projects and skills
            </p>
          </Link>
          <Link
            to="/computer-science"
            className="bg-gradient-to-br from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 transition-all duration-300 rounded-lg shadow-md flex flex-col justify-center items-center text-white p-8"
          >
            <Code size={64} className="mb-4" />
            <h2 className="text-3xl font-bold mb-4">Anything Coded by Han</h2>
            <p className="text-center">
              Discover my expertise in web development, machine learning, and
              data science
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
