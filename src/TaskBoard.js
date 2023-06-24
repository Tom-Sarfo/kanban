import TodoCategory from "./TodoCategory"
import DoneCategory from "./DoneCategory"
import CreateTaskForm from "./CreateTaskForm"
import { useState } from "react"

export default function TaskBoard(){
  const [task, setTask] = useState([]);
  
  
  var taskID = task.length;
  function handleFormSubmit(taskInput, asignee){
    setTask([
     ...task,
     {
       id: taskID + 1,
       task: taskInput,
       assignedTo: asignee,
       done: false
     }
    ]);
    
  }

  function handleMoveToDone(checkedTask){
       setTask(task.map(myTask => {
        if(myTask.id === checkedTask.id){
        return checkedTask;
        } else {
          return myTask;
        }
       }));    
   
  }
      

  function handleUndo(taskToUndo){
    setTask(task.map(myTask => {
      if(myTask.id === taskToUndo.id){
        return taskToUndo;
      }else{
        return myTask;
      }  
    }))
  }

    return (
        <div className="TaskBoard">
          <CreateTaskForm onHandleSubmit = { handleFormSubmit } />
          <div className="tasks">
            <TodoCategory taskData = { task } onHandleMoveToDone = { handleMoveToDone } />
            <DoneCategory taskData = { task } onHandleUndo={ handleUndo } />
          </div>
        </div>
    )
}