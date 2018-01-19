import React from 'react';

import './task.css';
//niepotrzebnie przekazujesz id ?
const Task = (props) => (
    <div className="Task" onClick={() => this.props.removeTask}>
        <h1>{props.id}</h1>
        <h1>{props.name}</h1>
        <p>Priority: {props.priority}</p>
    </div>
);

export default Task;

//onClick={() => this.props.taskAdded(this.state.name, this.state.priority)}