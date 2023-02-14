import React from 'react';
import { makeStyles } from 'mui-styles';
import { Table } from '@mui/material';
import { TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import { TableContainer } from '@mui/material';
import { TableHead } from '@mui/material';
import { TableRow } from '@mui/material';
import { Paper } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const TaskComponent = ({ tasks, setTasks, deleteTask, editTask }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Due Date</TableCell>
                        <TableCell align="right">Assigned To</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks.map((task, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {task.name}
                            </TableCell>
                            <TableCell align="right">{task.description}</TableCell>
                            <TableCell align="right">{task.dueDate}</TableCell>
                            <TableCell align="right">{task.assignedTo}</TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="edit" onClick={() => editTask(index)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton aria-label="delete" onClick={() => deleteTask(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TaskComponent;
