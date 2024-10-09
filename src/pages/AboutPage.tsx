import React, { useState } from 'react'
import { Award, BookOpen, X, ExternalLink, GraduationCap, Briefcase , FileText} from 'lucide-react'


interface Achievement {
  type: 'certificate' | 'course'
  title: string
  issuer: string
  year: number
  description: string
  image: string
  href: string
}

interface Education {
  degree: string
  institution: string
  year: number
  GPA: number
}

interface Experience {
  position: string
  company: string
  duration: string
  description: string
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Bina Nusantara University - Alam Sutera, Tangerang",
    year: 2022,
    GPA: 3.81
  }
]

const experienceData: Experience[] = [
  {
    position: "Scholarship Student Mentor",
    company: "SASC Binus University - Alam Sutera, Tangerang",
    duration: "2024 - Present",
    description: "Mentored students in their academic and personal development. Received scholarship as a reward for joining as mentor in SASC Binus University."
  },
  {
    position: "Creative and Design Activist",
    company: "Himpunan Mahasiswa Teknik Informatika (HIMTI) BINUS",
    duration: "2023 - Present",
    description: "Mainly working on video editing task and instagram feeds for HIMTI BINUS"
  },
  {
    position: "Design & Documentation Mentor",
    company: "HIMTI Leadership Training 2024 - HIMTI BINUS",
    duration: "March 2024",
    description: "Guided aspiring activist on finishing their task in Design and Documentation Division. Reviewed and provided constructive feedback on design projects and assignments."
  },
  {
    position: "Co-Coordinator - Design and Documentation Division",
    company: "TECHNO ARCADE 2023 - HIMTI BINUS",
    duration: "Apr 2023 - Oct 2023",
    description: "Mainly managing divison tasks, communicating with team members and working on video editing task, including creating promotional videos and after-movie content for the event."
  }
]

const achievements: Achievement[] = [
  {
    type: 'course',
    title: 'Introduction to Machine Learning US',
    issuer: 'Great Learning',
    year: 2024,
    description: 'Machine Learning - Supervised & Unsupervised Learning - Regression & Classification - Recommendation System - Dataset Understanding',
    image: 'https://d9jmtjs5r4cgq.cloudfront.net/ComplementaryCourseCertificate/3876642/original/Dean_Hans_Felandio_Setiadi_Saputra20231226-71-mixrcg.jpg',
    href: 'https://www.mygreatlearning.com/certificate/YEAAYDUN'
  },
  {
    type: 'course',
    title: 'What is Generative AI?',
    issuer: 'LinkedIn Learning',
    year: 2024,
    description: 'Basics of Generative AI',
    image: 'https://img.notionusercontent.com/s3/prod-files-secure%2F9dcc070c-c5fc-4a0b-821a-c013f8c775f3%2F8d1600a7-df1f-48e8-8949-75f3387b8fc6%2Fimage.png/size/w=1360?exp=1728543173&sig=QK_hCXfYP7YH3yobIqVi75CiLW7K-2LxDPDiFb0hNEA',
    href: 'https://www.linkedin.com/learning/certificates/02e96d009bbedb5e5cde71636db7ee00169e523fc3b7b7e10ce332ff410cedc5'
  },
  {
    type: 'course',
    title: 'Introduction to Generative AI',
    issuer: 'Coursera - Google Cloud',
    year: 2023,
    description: 'Generative AI Understanding - Types of Generative AI - Basics of Generative AI',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~3XC45U8DPQSS/CERTIFICATE_LANDING_PAGE~3XC45U8DPQSS.jpeg',
    href: 'https://www.coursera.org/account/accomplishments/verify/3XC45U8DPQSS'
  },
  {
    type: 'course',
    title: 'Implementasi Data Science dalam Dunia Sepak Bola',
    issuer: 'Shift Academy',
    year: 2022,
    description: 'Basic Data Science - Data Science Implementation in Football - Data Science Tools',
    image: 'https://img.notionusercontent.com/s3/prod-files-secure%2F9dcc070c-c5fc-4a0b-821a-c013f8c775f3%2F1e87fbef-aded-4fa8-a4cf-c503538d5954%2Fimage.png/size/w=1360?exp=1728543102&sig=gvQjZBl4Qt6n_k3OBtxUr_HTqr7Z70oBV9HmrPtBj8c',
    href: 'https://img.notionusercontent.com/s3/prod-files-secure%2F9dcc070c-c5fc-4a0b-821a-c013f8c775f3%2F1e87fbef-aded-4fa8-a4cf-c503538d5954%2Fimage.png/size/w=1360?exp=1728543102&sig=gvQjZBl4Qt6n_k3OBtxUr_HTqr7Z70oBV9HmrPtBj8c'
  },
  

]

const AboutPage: React.FC = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">A Glimpse of Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12">
        <div>
          <img src="https://img.notionusercontent.com/s3/prod-files-secure%2F9dcc070c-c5fc-4a0b-821a-c013f8c775f3%2F34b4e335-17fb-4d54-9657-0cb25690dc4a%2Fe7855ca6-572c-48d3-bc20-68d8ceb54d0b.png/size/w=660?exp=1728543041&sig=3bZlJMujbmsGSUZydneuinhFUof3IYkqJV1VCyKpI0U" alt="Dean Hans Felandio Setiadi Saputra" className="rounded-lg shadow-md w-8/12 h-auto ml-20" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">Hi, I'm Dean Hans Felandio Setiadi Saputra</h2>
          <p className="text-slate-600 mb-4">
          I'm a dedicated and detail-oriented computer science student & scholarship student mentor with keen curiosity in front-end web development, data science, machine learning, deep learning and video editor with a unique blend of technical and creative skills. My journey in the world of technology and digital media has been driven by a constant curiosity.
          </p>
          <p className="text-slate-600 mb-4">
            My expertise spans across various domains:
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4">
            <li>Front-end web development</li>
            <li>Machine learning and Deep Learning</li>
            <li>User Interface (UI) design</li>
            <li>Video editing</li>
          </ul>
          <p className="text-slate-600 mb-6">
            Other than that, I'm also an activist of HIMTI BINUS. I participated as a co-coordinator design and documentation division for a HIMTI BINUS' welcoming party (TECHNO ARCADE 2023).
          </p>
          {/* <a
            href="/john-doe-cv.pdf"
            download
            className=" bg-teal-500 text-white py-2 px-6 rounded-full hover:bg-teal-600 transition-colors text-lg font-semibold flex items-center"
          >
            <FileText className="mr-2" size={18} />
            Download Resume
          </a> */}
        </div>
      </div>
      
      
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
          <GraduationCap className="mr-2" /> Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-lg text-slate-700">{edu.degree}</h3>
              <p className="text-slate-600">{edu.institution}</p>
              <p className="text-slate-500">{edu.year} - Present</p>
            <p className="text-slate-600 mt-2">GPA: {edu.GPA}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
          <Briefcase className="mr-2" /> Experience
        </h2>
        <div className="space-y-4">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-lg text-slate-700">{exp.position}</h3>
              <p className="text-slate-600">{exp.company}</p>
              <p className="text-slate-500">{exp.duration}</p>
              <p className="text-slate-600 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
          <Award className="mr-2" /> Certificates, Courses, and Webinar Attended
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedAchievement(achievement)}
            >
              {achievement.type === 'certificate' ? <Award className="w-8 h-8 text-teal-500 mb-2" /> : <BookOpen className="w-8 h-8 text-indigo-500 mb-2" />}
              <h3 className="font-semibold text-lg text-slate-700">{achievement.title}</h3>
              <p className="text-slate-600">{achievement.issuer}, {achievement.year}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={(e) => {
          if (e.target === e.currentTarget) {
            setSelectedAchievement(null);
          }
        }}>
          <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{selectedAchievement.title}</h3>
                <button onClick={() => setSelectedAchievement(null)} className="text-slate-400 hover:text-slate-600">
                  <X size={24} />
                </button>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img src={selectedAchievement.image} alt={selectedAchievement.title} className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <p className="text-slate-600 mb-2">{selectedAchievement.issuer}, {selectedAchievement.year}</p>
                  <p className="text-slate-600 mb-2"> Skills Learned: </p>
                  <p className="text-slate-700 mb-4">{selectedAchievement.description}</p>
                  <div className="flex items-center text-teal-500">
                    <ExternalLink size={20} className="mr-2" />
                    <a href={selectedAchievement.href} target='_blank' className="hover:underline">View Certificate</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AboutPage