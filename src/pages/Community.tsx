import { useEffect, useState } from "react"
import type { Project } from "../types"
import { dummyGenerations } from "../assets/assets"
import { Loader } from "lucide-react"
import ProjectCard from "../components/ProjectCard"


const Community = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  const fetchProjects = async () => {
    setTimeout(() => {
      setProjects(dummyGenerations.map(project => ({
        ...project,
        name: project.productName,
        modelImageUrl: project.generatedImage,
        uploadedImges: project.uploadedImages
      })));
      setLoading(false)
    }, 3000)
      
  }

  useEffect(() => {
    fetchProjects()
  },[])
  
  return loading ? (
    <div className="min-h-screen flex items-center justify-center">
      <Loader className="size-7 animate-spin text-indigo-400" />
    </div>
  ) : (   
    <div className="min-h-screen text-white p-6 md:p-12 my-28">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Community</h1>
          <p className="text-gray-400">See what others are creating with our platform</p>
        </header>
        {/* Projects grid */}

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} gen={project} setGenerations={setProjects} forCommunity={true} />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Community 
