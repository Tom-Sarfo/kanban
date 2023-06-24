import { useState } from "react"

export default function CreateTaskForm({ onHandleSubmit }){
    const [ taskInput, setTaskInupt] = useState('');
    const [ asignee, setAsignee] = useState('')

    return (
        <section class="CreateTaskForm">
            <form 
            onSubmit={e => {
            setTaskInupt('');//finding it difficult to clear textfield
            setAsignee('');
            e.preventDefault();
             onHandleSubmit(taskInput, asignee);
            }  
            }>
                <input type="text" placeHolder="Enter Task" onChange={e => setTaskInupt(e.target.value)} />
                <input type="text" placeHolder="Asign Task to" onChange={e => setAsignee(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}

