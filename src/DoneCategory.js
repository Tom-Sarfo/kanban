import DoneCard from "./DoneCard";

export default function DoneCategory({ taskData, onHandleUndo }) {
	return (
		<article className="DoneCategory">
			<h1>Done</h1>
			<hr />
			{taskData?.map((task) => {
				return (
					task.done === true && (
						<DoneCard
							key={task.id}
							doneTask={task}
							onHandleUndoToDo={onHandleUndo}
						/>
					)
				);
			})}
		</article>
	);
}
