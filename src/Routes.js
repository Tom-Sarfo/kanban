import KanbanBoard from "./KanbanBoard";
import TaskBoard from "./TaskLayout/TaskBoard";
import EditTaskCard from "./TaskCardLayout/EditTaskCard";
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
				path: "/board/projects/tasks/:taskId",
				element: <EditTaskCard />,
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
