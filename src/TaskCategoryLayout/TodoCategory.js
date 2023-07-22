import TodoCard from "../TaskCardLayout/TodoCard";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TasksContext } from "../stateManagement/ProjectContext";

export default function TodoCategory() {
	const tasks = useContext(TasksContext);

	const { projectId } = useParams();
	return (
		<article className="TodoCategory">
			<h1>To do</h1>

			{tasks.map((task) => {
				return (
					task.projectId === projectId &&
					task.done === false && <TodoCard key={task.id} TodoList={task} />
				);
			})}
		</article>
	);
}
