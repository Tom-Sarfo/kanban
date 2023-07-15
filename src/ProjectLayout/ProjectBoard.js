import "../ProjectLayout/ProjectStyles/ProjectBoard.css"
import { Link } from 'react-router-dom'
import ProjectCard from "./ProjectCard"
import { ProjectsContext } from "../stateManagement/ProjectContext"
import { useContext } from "react"

export default function ProjectBoard() {
  const projects = useContext(ProjectsContext)
  return (
    <main className='ProjectBoard'>
      <div className="innerBoard">
        <h2>My Projects</h2>
         <hr />
        {projects.map(project => (
          <Link to={`/projects/${project.id}`}  key={project.id}><ProjectCard project = {project} /></Link>
        ))}
      </div>
        
        <Link to="/board" className="float-btn">
         <div className="float-btn-container"><span>Add Project</span></div>
        </Link>
    </main>
  )
}
