import { dummyGenerations } from "../assets/assets"
import type { Project } from "../types"
import { useEffect, useState } from "react"
import { Link, Loader2Icon, RefreshCwIcon } from "lucide-react"

const Result = () => {
  const [project, setProjectData] = useState<Project>({} as Project)
  const [loading, setLoading] = useState(true)

  const fetchProjectData = async () => {
    setTimeout(() => {
      setProjectData(dummyGenerations[0])
      setLoading(false)
    }, 3000)
  }

  useEffect(() => {
    fetchProjectData()
  }, [])

  return loading ? (
    <div className="h-screen w-full flex items-center justify-center">
      <Loader2Icon className="animate-spin text-white size-9" />
    </div>
  ) : (
    <div className="min-h-screen text-white p-6 md:p-12 mt-20">
      <div className="min-w-6xl mx-auto">

        {/* ✅ HEADER FIXED */}
        <header className="mb-8 space-y-3">
  <h1 className="text-2xl md:text-3xl font-medium">
    Generation Result
  </h1>

  <Link
    to="/generate"
    className="
      flex items-center gap-2
      w-full
      px-4 py-3
      rounded-lg
      bg-white/10
      backdrop-blur-md
      border border-white/10
      text-sm text-white
      hover:bg-white/20
      transition
    "
  >
    <RefreshCwIcon className="w-4 h-4 opacity-90" />
    <span className="font-medium">New Generation</span>
  </Link>
</header>


      </div>
    </div>
  )
}

export default Result
