export default function DoneCard({ doneTask }) {
	return (
		<article className="DoneCard">
			<h2>
				<span id="undo">{doneTask.done && "✅"}</span>
				{doneTask.taskName}
			</h2>
			<p>Asigned To: {doneTask.asignee} </p>
			<p>Status: Completed 🎉🎉🎉</p>
		</article>
	);
}
