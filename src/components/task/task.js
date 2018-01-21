import React from 'react';

import './task.css';

const Task = (props) => (
    <div className="Task" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Priority: {props.priority}</p>
    </div>
);

export default Task;

//onClick={() => this.props.taskAdded(this.state.name, this.state.priority)}