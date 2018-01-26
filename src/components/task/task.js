import React from 'react';
import PropTypes from 'prop-types';
import './task.css';



const Task = (props) => (
    <div className="Task" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Priority: {props.priority}</p>
    </div>
);

export default Task;

Task.propTypes = {
    name: PropTypes.string,
    priority: PropTypes.number,
    clicked: PropTypes.func
};