import { useParams } from "react-router-dom";

export default function EditTaskCard() {
	const { taskId } = useParams();

	return (
		<article className="EditTaskCard">
			<div className="side-color"></div>
			<div className="wrapper">
				<form>
					<label for="taskName">
						Task: <br />
						<input className="TextInput" id="taskName" name="taskName" />
					</label>
					<br />
					<br />
					<label for="asignee">
						Re-assign Task: <br />
						<select className="TextInput" name="asignee">
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
							<input type="date" name="startDate" id="start_date" />
						</label>
						<br />
						<label for="due">
							Due: <br />
							<input type="date" name="dueDate" id="due_date " />
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
