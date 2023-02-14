import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './KanbanBoard.css';
import { columnsFromBackend } from '../Data/Data';
import { itemsFromBackend } from '../Data/Data';
import { onDragEnd } from './ToDragDrop/ToDragDrop';
import Sidebar from '../SideBar/Sidebar';

const KanbanBoard = () => {
    const [columns, setColumns] = useState(columnsFromBackend);
    const [items, setItems] = useState(itemsFromBackend);
    const task={items}
   

    return (
        <>
            <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns, task)}>
                <div className="kanban-board">
                    <Sidebar columns={columns} setColumns={setColumns} items={items} setItems={setItems} />
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center'
                                }}
                                key={column.id}
                                className="column"
                            >
                                <h2>{column.name}</h2>
                                <Droppable droppableId={column.id.toString()} key={columnId}>
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                                style={{
                                                    background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                                                    padding: 4,
                                                    width: 250,
                                                    minHeight: 500
                                                }}
                                            >
                                                {column.tasks.map((item, index) => {
                                                    return (
                                                        <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                                                            {(provided, snapshot) => {
                                                                return (
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        style={{
                                                                            border: '1px solid black'
                                                                        }}
                                                                    >
                                                                        <div
                                                                            style={{
                                                                                border: '1px solid black',
                                                                                padding: 16,
                                                                                margin: '0 0 8px 0',
                                                                                minHeight: '50px',
                                                                                backgroundColor: snapshot.isDragging ? 'lightgreen' : 'white',
                                                                                color: snapshot.isDragging ? 'white' : 'black',
                                                                                ...provided.draggableProps.style
                                                                            }}
                                                                            className="item"
                                                                        >
                                                                            <h3>{item.name}</h3>
                                                                            <p>{item.description}</p>
                                                                            <p>{item.dueDate}</p>
                                                                            <p>{item.assignedTo}</p>
                                                                                                                                                                                                                         
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }}
                                                        </Draggable>
                                                    );
                                                })}
                                                {provided.placeholder}
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            </div>
                        );
                    })}
                </div>
            </DragDropContext>
        </>
    );
};

export default KanbanBoard;
