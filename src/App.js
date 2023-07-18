import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./Routes";
import KanbanBoard from "./KanbanBoard";
import "./App.css";

function App() {
	const router = createBrowserRouter(Routes);
	return (
		<RouterProvider router={router}>
			<KanbanBoard />
		</RouterProvider>
	);
}

export default App;
