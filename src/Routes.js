import KanbanBoard from "./KanbanBoard";
import ProjectBoard from "./ProjectLayout/ProjectBoard"
import CreateProjectForm from "./ProjectLayout/CreateProjectForm"
import ErrorPage from "./ErrorPage";

export const Routes = [
    {
      path: '/',
      element:<KanbanBoard />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/board',
          element: <CreateProjectForm />,
        },
        {
          path: '/',
          element: <ProjectBoard />,
        },
      ]
    },
];