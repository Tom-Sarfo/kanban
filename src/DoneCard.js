export default function DoneCard({ doneTask, onHandleUndoToDo }) {
	return (
		<article className="DoneCard">
			<h2>
				<button
					id="undo"
					onClick={() => onHandleUndoToDo({ ...doneTask, done: false })}
				>
					{doneTask.done && "undo"}
				</button>
				{doneTask.task}
			</h2>
			<p>Asigned To: {doneTask.assignedTo} </p>
		</article>
	);
}
