export const handleDragEnd = (result, tasks, setTasks) => {
  const { destination, source, draggableId } = result;

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  const sourceTasks = Array.from(tasks);
  const [removedTask] = sourceTasks.splice(source.index, 1);
  const destinationTasks = Array.from(
    tasks.filter((task) => task.lane === destination.droppableId)
  );
  destinationTasks.splice(destination.index, 0, removedTask);

  // Check if the task was moved to another lane
  if (destination.droppableId !== source.droppableId) {
    removedTask.lane = destination.droppableId;
  }

  const updatedTasks = [...sourceTasks, ...destinationTasks];

  setTasks(updatedTasks);
};
