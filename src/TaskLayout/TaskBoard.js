import TodoCategory from "../TodoCategory";
import DoneCategory from "../DoneCategory";
import CreateTaskForm from "./CreateTaskForm";
import { TasksDispatch, TasksContext } from "../stateManagement/ProjectContext";
import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "../TaskLayout/TaskBoard.css";

export default function TaskBoard() {
	const [task, setTask] = useState([]);
	const [taskName, setTaskName] = useState("");
	const [asignee, setAsignee] = useState("");
	const [startDate, setStartDate] = useState("");
	const [dueDate, setDueDate] = useState("");

	const { projectId } = useParams();

	const dispatch = useContext(TasksDispatch);
	const tasks = useContext(TasksContext);

	function handleFormSubmit(e) {
		e.preventDefault();
		dispatch({
			type: "task_added",
			taskName: taskName,
			asignee: asignee,
			start: startDate,
			due: dueDate,
			projectId: projectId,
		});
		e.target.reset();
	}

	function handleMoveToDone(checkedTask) {
		setTask(
			tasks?.map((myTask) => {
				if (myTask.id === checkedTask.id) {
					return checkedTask;
				} else {
					return myTask;
				}
			})
		);
	}

	function handleUndo(taskToUndo) {
		setTask(
			tasks?.map((myTask) => {
				if (myTask.id === taskToUndo.id) {
					return taskToUndo;
				} else {
					return myTask;
				}
			})
		);
	}

	return (
		<div className="TaskBoard">
			<div className="tasks">
				<TodoCategory taskData={task} onHandleMoveToDone={handleMoveToDone} />
				<DoneCategory taskData={task} onHandleUndo={handleUndo} />
			</div>
			<CreateTaskForm
				onHandleSubmit={handleFormSubmit}
				setTaskName={setTaskName}
				setAsignee={setAsignee}
				setStartDate={setStartDate}
				setDueDate={setDueDate}
			/>
		</div>
	);
}
