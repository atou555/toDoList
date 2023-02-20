import React, { useEffect, useState } from "react";
import { fetchAllProjects, createProject, getOneProject, fetchAllTasks } from "../../utils/api";
import { getWeatherData } from "../../utils/api";
import Lane from "./Lane/Lane";
import { DragDropContext } from "react-beautiful-dnd";
import { handleDragEnd } from "./utils/DragAndDrop";
import "./KanbanBoard.css";

function KanbanBoard() {
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);

  const todoTasks = tasks.slice(0, 10); // on récupère les 10 premières tâches de la liste

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData();
      setWeatherData(data);
    };
    fetchWeatherData();
  }, []);

  useEffect(() => {
    const fetchAllProjectsData = async () => {
      const fetchedProjects = await fetchAllProjects();
      setProjects(fetchedProjects);
    };
    fetchAllProjectsData();
  }, []);

  const addProject = async (project) => {
    const newProject = await createProject(project);
    setProjects([...projects, newProject]);
  };

  const onProjectChange = async (projectId) => {
    const newTasks = await fetchAllTasks(projectId);
    setTasks(newTasks);
  };

  const onDragEnd = (result) => {
    handleDragEnd(result, tasks, setTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="kanban-board">
        <div className="board-header">Mon Kanban Board</div>
        <div className="board-content">
          <div className="lane-todo lane">
            <div className="lane-title">À Faire</div>
            <Lane id="todo" tasks={todoTasks} setTasks={setTasks} onProjectChange={onProjectChange} />
          </div>
          <div className="lane-inProgress lane">
            <div className="lane-title">En Cours</div>
            <Lane id="inProgress" tasks={[]} setTasks={setTasks} onProjectChange={onProjectChange} />
          </div>
          <div className="lane-done lane">
            <div className="lane-title">Terminé</div>
            <Lane id="done" tasks={[]} setTasks={setTasks} onProjectChange={onProjectChange} />
          </div>
        </div>
        {weatherData && (
          <div>
            <h2>Météo Paris</h2>
            <p>Température : {weatherData.temperature} °C</p>
            <p>Vitesse du vent : {weatherData.windSpeed} m/s</p>
            <p>Humidité : {weatherData.humidity} %</p>
          </div>
        )}
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
