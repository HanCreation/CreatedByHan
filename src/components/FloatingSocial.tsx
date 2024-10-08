import React from 'react'
import { Github, Linkedin, Mail, Youtube, FileText } from 'lucide-react'

const FloatingSocial: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 bg-[#1f1f1f] rounded-full shadow-lg p-4">
      <div className="flex space-x-4">
        <a href="https://github.com/HanCreation" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-teal-500 transition-colors" title="GitHub">
          <Github size={24} stroke="white" />
        </a>
        <a href="https://www.linkedin.com/in/hans-felandio/" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-teal-500 transition-colors" title="LinkedIn">
          <Linkedin size={24} stroke="white" />
        </a>
        <a href="https://www.youtube.com/@hancreation" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-teal-500 transition-colors" title="YouTube">
          <Youtube size={24} stroke="white" />
        </a>
        <a href="https://huggingface.co/LiquAId" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-teal-500 transition-colors" title="Hugging Face">
          <span role="img" aria-label="hugging face" style={{ fontSize: '18px' }}>🤗</span>
        </a>
        {/* <a
          href="/john-doe-cv.pdf"
          download
          className="text-slate-700 hover:text-teal-500 transition-colors"
          title="Download Resume"
        >
          <FileText size={24} stroke="white" />
        </a> */}
        <a href="mailto:hans.dean@yahoo.com" className="text-slate-700 hover:text-teal-500 transition-colors" title="Email">
          <Mail size={24} stroke="white" />
        </a>
      </div>
    </div>
  )
}

export default FloatingSocial
