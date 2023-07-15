import { createContext } from "react";


export const ProjectsContext = createContext(null)
export const ProjectDispatch = createContext(null);

export function projectReducer(projects, action){
    switch (action.type) {
        case "project_created": {
            return [
                {
                 id: projects.length + 1,
                 projectName: action.projectName,
                 members: action.members
                },
                ...projects
            ]
        }

        default:
          throw Error("Unknown error: " + action.type )
    }
}
