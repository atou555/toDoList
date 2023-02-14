import { v4 as uuid } from 'uuid';
export const itemsFromBackend = [
    {
        id: 1,
        name: 'First task',
        description: 'Task 1 description',
        dueDate: '2023-02-14',
        assignedTo: 'John Doe'
    }, {
        id: 2,
        name: 'Second task',
        description: 'Task 2 description',
        dueDate: '2023-02-15',
        assignedTo: 'Jane Doe'
    }, {
        id: 3,
        name: 'Third task',
        description: 'Task 3 description',
        dueDate: '2023-02-16',
        assignedTo: 'Jim Brown'
    }, {
        id: 4,
        name: 'Fourth task',
        description: 'Task 4 description',
        dueDate: '2023-02-17',
        assignedTo: 'Joan Smith'
    }, {
        id: 5,
        name: 'Fifth task',
        description: 'Task 5 description',
        dueDate: '2023-02-18',
        assignedTo: 'John Doe'
    }
];

export const columnsFromBackend = {
    [uuid()]: {
        id: 1,
        name: 'Requested',
        tasks: itemsFromBackend
    },
    [uuid()]: {
        id: 2,
        name: 'In Progress',
        tasks: []
    },
    [uuid()]: {
        id: 3,
        name: 'Done',
        tasks: []
    }
};
