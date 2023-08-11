import { createContext } from "react";

export const ProjectsContext = createContext(null);
export const TasksContext = createContext(null);

export const ProjectDispatch = createContext(null);
export const TasksDispatch = createContext(null);

export function projectReducer(projects, action) {
	switch (action.type) {
		case "project_created": {
			return [
				{
					id: projects.length + 1,
					projectName: action.projectName,
					members: action.members,
				},
				...projects,
			];
		}

		default:
			throw Error("Unknown error: " + action.type);
	}
}

export function tasksReducer(tasks, action) {
	switch (action.type) {
		case "task_added": {
			return [
				{
					id: tasks.length + 1,
					taskName: action.taskName,
					asignee: action.asignee,
					startDate: action.start,
					dueDate: action.due,
					projectId: action.projectId,
					done: false,
				},
				...tasks,
			];
		}

		case "moved_to_done": {
			return tasks.map((myTask) => {
				if (myTask.id === action.checkedTask.id) {
					return action.checkedTask;
				} else {
					return myTask;
				}
			});
		}

		case "edited": {
			let unEditedTasks = tasks.filter(
				(task) => task.id !== Number(action.editedId)
			);
			return [
				{
					id: action.editedId,
					taskName: action.taskName,
					asignee: action.asignee,
					...action.rest,
				},
				...unEditedTasks,
			];
		}

		default:
			throw Error("Unknown error: " + action.type);
	}
}
