

let reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const onDragEnd = (result, columns, setColumns) => {
    const { source, destination } = result;
    console.log(result)
    console.log(source)
    console.log(destination)
    console.log(columns)


    if (!destination) {
        return;
    }

    const sourceColumn = columns[source.droppableId];
    const destinationColumn = columns[destination.droppableId];
    const newSourceTasks = [...sourceColumn.tasks];
    const newDestinationTasks = [...destinationColumn.tasks];


    if (columns[source.droppableId].name === "In Progress" || columns[source.droppableId].name === "Done") {
        if (source.droppableId !== destination.droppableId) {
            reorder = newSourceTasks.splice(source.index, 1);
            newDestinationTasks.splice(destination.index, 0, ...reorder);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    tasks: newSourceTasks
                },
                [destination.droppableId]: {
                    ...destinationColumn,
                    tasks: newDestinationTasks
                }
            });
        } else {
            reorder = newSourceTasks.splice(source.index, 1);
            newSourceTasks.splice(destination.index, 0, ...reorder);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    tasks: newSourceTasks
                },
            });
        }
        return;
    }

};

