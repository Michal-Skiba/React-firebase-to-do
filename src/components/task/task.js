import React from 'react';
import Progress from '../Progress/progress'
import './task.css';

const Task = (props) => (

    <div className="Task">
        <div className='info' onClick={props.clicked}>
            <h1>{props.name}</h1>
            <p>Priority: {props.priority}</p>
        </div>
        <div className='progressClass' onClick={props.clickedProgress}>
            <Progress id ={props.id} progress={props.progress}/>
        </div>
    </div>
);

export default Task;
