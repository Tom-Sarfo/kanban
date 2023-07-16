import TodoCard from "./TodoCard";
// import { Todos } from "./Todos"
// import { useState } from "react"

export default function TodoCategory({ taskData, onHandleMoveToDone }) {
	return (
		<article className="TodoCategory">
			<h1>Todo</h1>
			<hr />
			{taskData?.map((todo) => {
				return (
					todo.done === false && (
						<TodoCard
							key={todo.id}
							TodoList={todo}
							onHandleMove={onHandleMoveToDone}
						/>
					)
				);
			})}
		</article>
	);
}
