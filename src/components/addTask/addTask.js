import React, { Component } from 'react';
import './addTask.css';
import Button from 'material-ui/Button';

class AddTask extends Component {
    state = {
        name: '',
        priority: ''
    };

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    };

    priorityChangedHandler = (event) => {
        this.setState({priority: event.target.value});
    };

    render () {
        return (
            <div className="AddTask">
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={this.nameChangedHandler}
                    value={this.state.name} />
                <input 
                    type="number" 
                    placeholder="priority"
                    onChange={this.priorityChangedHandler}
                    value={this.state.priority} />
                <Button id={"button"} raised color="primary" onClick={() => this.props.taskAdded(this.state.name, this.state.priority)}>Add Task</Button>
            </div>
        );
    }
}

export default AddTask;