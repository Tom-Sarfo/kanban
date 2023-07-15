import "../ProjectLayout/ProjectStyles/ProjectBoard.css"
import { Link } from 'react-router-dom'
export default function ProjectBoard() {
  return (
    <main className='ProjectBoard'>
      <div className="innerBoard">
        <h2>My Projects</h2>
         <hr />
      </div>
        
        <Link to="/board/createproject" className="float-btn">
         <div className="float-btn-container"><span>Add Project</span></div>
        </Link>
    </main>
  )
}
