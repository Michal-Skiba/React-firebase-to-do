import React from 'react';

import './oldTasks.css';

const Oldtasks = (props) => (
    <div className="Task" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Priority: {props.priority}</p>
    </div>
);

export default Oldtasks;

