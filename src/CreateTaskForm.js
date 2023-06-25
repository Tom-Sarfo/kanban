export default function CreateTaskForm({ onHandleSubmit, onSetTaskInput, onSetAsignee }){

    return (
        <section class="CreateTaskForm">
            <form 
            onSubmit={e => {onHandleSubmit(e)}  
            }>
                <input type="text" placeHolder="Enter Task" onChange={e => onSetTaskInput(e.target.value)} />
                <input type="text" placeHolder="Asign Task to" onChange={e => onSetAsignee(e.target.value)}/>
                <button type="submit">Add Task</button>
            </form>
        </section>
    )
}

