import NavBar from "./NavBar";
import TaskBoard from "./TaskBoard";
export default function KanbanBoard(){
    
    return(
        <body>
        <NavBar />
        <div className="taskStuff">
            <TaskBoard />
        </div>
        
        </body>
    )
}