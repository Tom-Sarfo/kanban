import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
	TasksContext,
	ProjectsContext,
	TasksDispatch,
} from "../stateManagement/TaskContext";
import { useContext, useState } from "react";
import "../TaskCardLayout/EditTask.css";

export default function EditTaskCard() {
	const { taskId } = useParams();
	const tasks = useContext(TasksContext);
	const projects = useContext(ProjectsContext);
	const dispatch = useContext(TasksDispatch);
	let editedtask = tasks.filter((data) => data.id === Number(taskId));
	const navigate = useNavigate();

	const [myTasks, setMyTasks] = useState(editedtask[0]);

	function handleChange(e) {
		setMyTasks({ ...myTasks, [e.target.name]: e.target.value });
	}

	return (
		<article className="EditTaskCard">
			<div className="side-color"></div>
			<div className="wrapper">
				<form>
					<label for="taskName">
						Task: <br />
						<input
							className="TextInput"
							id="taskName"
							name="taskName"
							value={myTasks.taskName}
							onChange={handleChange}
						/>
					</label>
					<br />
					<br />
					<label for="asignee">
						Re-assign Task: <br />
						<select
							className="TextInput"
							name="asignee"
							value={myTasks.asignee}
							onChange={handleChange}
						>
							<option value="">Change Asignee</option>
						</select>{" "}
					</label>
					<br />
					<br />
					<label>Change Date</label>
					<br />
					<div className="date_container">
						<label for="start">
							Start: <br />
							<input
								type="date"
								name="startDate"
								id="start_date"
								value={myTasks.startDate}
								onChange={handleChange}
							/>
						</label>
						<br />
						<label for="due">
							Due: <br />
							<input
								type="date"
								name="dueDate"
								id="due_date "
								value={myTasks.dueDate}
								onChange={handleChange}
							/>
						</label>
					</div>
					<br />
					<button className="formButton" type="submit">
						Save
					</button>
				</form>
			</div>
		</article>
	);
}
