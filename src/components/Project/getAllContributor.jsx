import { TodoistApi } from "@doist/todoist-api-typescript"

const api = new TodoistApi("0123456789abcdef0123456789")

const allCollaborators = (projectId) => {
    api.getProjectCollaborators(projectId)
        .then((collaborators) => console.log(collaborators))
        .catch((error) => console.log(error))
}

