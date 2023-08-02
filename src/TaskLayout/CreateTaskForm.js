import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../stateManagement/ProjectContext";

export default function CreateTaskForm({
	onHandleSubmit,
	setTaskName,
	setAsignee,
	setStartDate,
	setDueDate,
}) {
	const projects = useContext(ProjectsContext);
	const { projectId } = useParams();

	return (
		<section class="CreateTaskForm">
			<form
				onSubmit={(e) => {
					onHandleSubmit(e);
				}}
			>
				<input
					type="text"
					className="TextInput"
					placeholder="Enter Task"
					onChange={(e) => setTaskName(e.target.value)}
				/>
				<select
					name="asignee"
					className="TextInput"
					onChange={(e) => setAsignee(e.target.value)}
				>
					<option value="">Asign to a member</option>
					{projects?.map((project) => {
						let filtered = project.members.filter(
							(mem) => project.id === Number(projectId)
						);
						return filtered.map((member) => (
							<option key={member.id} value={member.name}>
								{member.name}
							</option>
						));
					})}
				</select>
				<div className="date_container">
					<label for="start">
						Start: <br />
						<input
							type="date"
							name="start"
							id="start_date"
							onChange={(e) => setStartDate(e.target.value)}
						/>
					</label>
					<label for="due">
						Due: <br />
						<input
							type="date"
							name="due"
							id="due_date "
							onChange={(e) => setDueDate(e.target.value)}
						/>
					</label>
				</div>
				<button type="submit">Add Task</button>
			</form>
		</section>
	);
}
