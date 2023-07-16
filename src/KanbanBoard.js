import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import {
	ProjectsContext,
	ProjectDispatch,
	projectReducer,
} from "./stateManagement/ProjectContext";

import { useReducer } from "react";
export default function KanbanBoard() {
	const [projects, projectDispatch] = useReducer(projectReducer, []);

	return (
		<body>
			<NavBar />
			<div className="taskStuff">
				<ProjectsContext.Provider value={projects}>
					<ProjectDispatch.Provider value={projectDispatch}>
						<Outlet />
					</ProjectDispatch.Provider>
				</ProjectsContext.Provider>
			</div>
		</body>
	);
}
