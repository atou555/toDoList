import { TodoistApi } from "@doist/todoist-api-typescript";
const YOUR_API_KEY = "1d3bec9a140e53f77f2c2f16a164e114316d55b9";
const API_BASE_URL = "http://localhost:4000";
const BASE_URL = 'https://data.opendatasoft.com/api/records/1.0/search/?dataset=arome-0025-sp1_sp2_paris%40public&q=';
const api = new TodoistApi(`${YOUR_API_KEY}`);

//  getWeatherData serves before all at make a request to the server to get weather data
export const getWeatherData = async () => {
  const response = await fetch(`${BASE_URL}`);
  const data = await response.json();
  const weatherData = data.records[0].fields;
  return {
    temperature: weatherData.t2m,
    windSpeed: weatherData.w10,
    humidity: weatherData.rh2,
  };
};

// -------------Par rapport à la partie Task de Todoist------------------

// fetchAllTasks serves before all at make a request to the server to get all tasks
export const fetchAllTasks = async () => {
    const api = new TodoistApi(`${YOUR_API_KEY}`);
  
    try {
      const tasks = await api.getTasks();
      return tasks;
    } catch (error) {
      console.log(error);
      return [];
    }
};

// getoneTask serves before all at make a request to the server to get one task
export const getOneTask = async (id) => {

    try {
        const task = await api.getTask(id);
        return task;
    } catch (error) {
        console.log(error);
        return null;
    }
};

//  updateTask serves before all at make a request to the server to update a task
export const updateTask = async (task) => {
    const api = new TodoistApi(`${YOUR_API_KEY}`);

    try {
        const isSuccess = await api.updateTask(task.id, { content: task.content });
        return isSuccess;
    } catch (error) {
        console.log(error);
        return false;
    }
};

// createTask serves before all at make a request to the server to create a task
export const createTask = async (taskData) => {
  const api = new TodoistApi(`${YOUR_API_KEY}`);

  try {
    const task = await api.addTask({
      content: taskData.content ,
      dueString:  taskData.dueString ,
      dueLang:  taskData.dueLang ,
      priority:  taskData.priority,
    });

    return task;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// ------------- Fin de la partie Task de Todoist------------------

// -------------Par rapport à la partie Project de Todoist------------------

// fetchAllProjects serves before all at make a request to the server to get all projects
export const fetchAllProjects = async () => {

  try {
    const projects = await api.getProjects();
    return projects;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// getOneProject serves before all at make a request to the server to get one project
export const getOneProject = async (id) => {

  try {
    const project = await api.getProject(id);
    return project;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// createProject serves before all at make a request to the server to create a project
export const createProject = async (projectData) => {
  try {
    const project = await api.addProject({
      name: projectData.name,
    });

    return project;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// updateProject serves before all at make a request to the server to update a project
export const updateProject = async (project) => {
  try {
    const isSuccess = await api.updateProject(project.id, { name: project.name });
    return isSuccess;
  } catch (error) {
    console.log(error);
    return false;
  }
};

// ------------- Fin de la partie Project de Todoist------------------
