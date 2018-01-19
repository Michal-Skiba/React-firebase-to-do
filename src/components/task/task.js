import React from 'react';

import './task.css';
<<<<<<< HEAD
//niepotrzebnie przekazujesz id ?
const Task = (props) => (
    <div className="Task" onClick={() => this.props.removeTask}>
        <h1>{props.id}</h1>
=======

const Task = (props) => (
    <div className="Task" onClick={props.clicked}>
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
        <h1>{props.name}</h1>
        <p>Priority: {props.priority}</p>
    </div>
);

export default Task;

//onClick={() => this.props.taskAdded(this.state.name, this.state.priority)}