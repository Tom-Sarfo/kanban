import { useContext } from "react";
import { Link } from "react-router-dom";
import { TasksDispatch } from "../stateManagement/ProjectContext";

export default function TodoCard({ TodoList }) {
	const dispatch = useContext(TasksDispatch);

	return (
		<article className="TodoCard">
			<h2>
				<input
					id="cb"
					type="checkbox"
					checked={TodoList.done}
					onChange={(e) => {
						dispatch({
							type: "moved_to_done",
							checkedTask: { ...TodoList, done: e.target.checked },
						});
					}}
				/>
				<Link to={`/board/projects/tasks/${TodoList.id}`}>
					{TodoList.taskName}
				</Link>
			</h2>
			<p>
				Asigned to: <span> {TodoList.asignee}</span>
			</p>
			<p>
				<span>start:</span> {TodoList.startDate} <span>due:</span>{" "}
				{TodoList.dueDate}
			</p>
		</article>
	);
}
