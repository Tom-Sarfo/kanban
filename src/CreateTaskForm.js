export default function CreateTaskForm({ onHandleSubmit, setTaskInput, setAsignee }){

    return (
        <section class="CreateTaskForm">
            <form 
            onSubmit={e => {onHandleSubmit(e)}  
            }>
                <input type="text" placeholder="Enter Task" onChange={e => setTaskInput(e.target.value)} />
                <input type="text" placeholder="Asign Task to" onChange={e => setAsignee(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}

