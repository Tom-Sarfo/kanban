import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProjectsContext } from "../stateManagement/TaskContext";

export default function CreateTaskForm({
	onHandleSubmit,
	setTaskInput,
	setAsignee,
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
					placeholder="Enter Task"
					onChange={(e) => setTaskInput(e.target.value)}
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
				<button type="submit">Add Task</button>
			</form>
		</section>
	);
}
