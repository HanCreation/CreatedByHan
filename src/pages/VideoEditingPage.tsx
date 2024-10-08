import React from 'react'
import { Film, Scissors, Music, ExternalLink, Camera } from 'lucide-react'

interface VideoProject {
  title: string
  description: string
  thumbnail: string
  youtubeLink: string
  skills:string[]
}

const videoProjects: VideoProject[] = [
  {
    title: "After Movie TECHNO ARCADE 2023",
    description: "Edited an engaging after movie for the TECHNO ARCADE 2023 event, showcasing the highlights and excitement of the welcoming party event. In this project, I implemented 3D, with video editing, and also, I edited the credit roll using motion graphics in after Effects. The concept of the after movie is different from past concept. The after movie is well received by the audience with more than 10.000 views in event's instagram.",
    thumbnail: "https://cdn.discordapp.com/attachments/1292737012411011092/1292784843926671430/1696908457314.png?ex=6704ff35&is=6703adb5&hm=a7b70ab5405e6fffea26a8f1ceb76c33e3a9b8a631ef8e7dcbb3b61875382c9c&",
    youtubeLink: "https://www.instagram.com/reel/CyM9P6qpwUo/?igsh=aXpvdTdjNDY0eWk3",
    skills: ["Video Editing", "Motion Graphics", "Audio Editing", "After Effects", "3D", "Blender", "Adobe Premiere Pro", "Adobe Photoshop", "Adobe Suite","Sound Design", "Music Integration"]
  }
]

const VideoEditingPage: React.FC = () => {
  const allSkills = Array.from(new Set(videoProjects.flatMap(project => project.skills))).sort() // Create a list of all unique skills from all projects
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Edited by Han</h1>
      <h2 className="text-3xl font-bold mb-8">Skills:</h2>
      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <Film className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Video Editing</h2>
          <p>
            Crafting compelling narratives and visual stories through the art of video editing and post-production.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Scissors className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Motion Graphics</h2>
          <p>Creating dynamic and engaging visual effects to enhance video content and captivate audiences.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Music className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Audio Editing</h2>
          <p>Perfecting sound design and music integration to elevate the overall video experience.</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <Camera className="w-12 h-12 text-purple-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Photo Manipulation and Editing</h2>
          <p>
            Enhancing and retouching images to create stunning visuals and bring concepts to life.
          </p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {allSkills.map((skill, index) => (
            <span key={index} className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800"
                >
                  <ExternalLink size={20} className="mr-2" />
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VideoEditingPage