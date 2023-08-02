import KanbanBoard from "./KanbanBoard";
import TaskBoard from "./TaskLayout/TaskBoard";
import ProjectBoard from "./ProjectLayout/ProjectBoard";
import CreateProjectForm from "./ProjectLayout/CreateProjectForm";
import ErrorPage from "./ErrorPage";

export const Routes = [
	{
		path: "/",
		element: <KanbanBoard />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/board",
				element: <CreateProjectForm />,
			},
			{
				path: "/",
				element: <ProjectBoard />,
			},
			{
				path: "/projects/:projectId",
				element: <TaskBoard />,
			},
		],
	},
];
