export default function TodoCard({ TodoList, onHandleMove }){


    return (
        <article className="TodoCard">
           <h2>
            <input id="cb" 
            type="checkbox" 
            checked={ TodoList.done } 
            onChange={ e =>{ onHandleMove({...TodoList, done: e.target.checked}) }} 
            />
            { TodoList.task}
            </h2>
           <p>Asigned To: { TodoList.assignedTo}</p>
        </article>
    )
}