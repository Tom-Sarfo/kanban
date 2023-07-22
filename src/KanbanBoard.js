import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import {
	TasksContext,
	ProjectsContext,
	ProjectDispatch,
	TasksDispatch,
	projectReducer,
	tasksReducer,
} from "./stateManagement/ProjectContext";

import { useReducer } from "react";
export default function KanbanBoard() {
	const [projects, projectDispatch] = useReducer(projectReducer, []);
	const [tasks, taskDispatch] = useReducer(tasksReducer, []);

	return (
		<body>
			<NavBar />
			<div className="taskStuff">
				<ProjectsContext.Provider value={projects}>
					<ProjectDispatch.Provider value={projectDispatch}>
						<TasksContext.Provider value={tasks}>
							<TasksDispatch.Provider value={taskDispatch}>
								<Outlet />
							</TasksDispatch.Provider>
						</TasksContext.Provider>
					</ProjectDispatch.Provider>
				</ProjectsContext.Provider>
			</div>
		</body>
	);
}
