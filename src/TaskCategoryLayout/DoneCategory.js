import DoneCard from "../TaskCardLayout/DoneCard";
import { useContext } from "react";
import { TasksContext } from "../stateManagement/ProjectContext";
import { useParams } from "react-router-dom";

export default function DoneCategory() {
	const { projectId } = useParams();
	const tasks = useContext(TasksContext);
	return (
		<article className="DoneCategory">
			<h1>Done</h1>

			{tasks.map((task) => {
				return (
					task.projectId === projectId &&
					task.done === true && <DoneCard key={task.id} doneTask={task} />
				);
			})}
		</article>
	);
}
