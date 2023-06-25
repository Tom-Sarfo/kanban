import TodoCategory from "./TodoCategory"
import DoneCategory from "./DoneCategory"
import CreateTaskForm from "./CreateTaskForm"
import { useState } from "react"

export default function TaskBoard(){
  const [task, setTask] = useState([]);
  const [ taskInput, setTaskInupt] = useState('');
  const [ asignee, setAsignee] = useState('')
  
  
  var taskID = task.length;
  function handleFormSubmit(e){
    e.preventDefault();
    setTask([
     ...task,
     {
       id: taskID + 1,
       task: taskInput,
       assignedTo: asignee,
       done: false
     }
    ]);
    e.target.reset(); //This works
    //this is still not working after lifting state
    // setTaskInupt("");
    // setAsignee("");
    
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
          <CreateTaskForm 
            onHandleSubmit = { handleFormSubmit }
            onSetTaskInput = {setTaskInupt}
            onSetAsignee = {setAsignee}
          />
          <div className="tasks">
            <TodoCategory taskData = { task }
             onHandleMoveToDone = { handleMoveToDone } 
            />
            <DoneCategory taskData = { task }
             onHandleUndo={ handleUndo } 
            />
          </div>
        </div>
    )
}