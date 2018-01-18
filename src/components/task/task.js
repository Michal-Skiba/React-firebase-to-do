import React from 'react';

const task = (props) => (
    <div className="task" onClick={props.clicked}>
        <h1>{props.task}</h1>
        <p>Czas dodania {props.date}</p>
    </div>
);

export default task;