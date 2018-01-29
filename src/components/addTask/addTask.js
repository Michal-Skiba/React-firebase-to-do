import React, { Component } from 'react';
import './addTask.css';
import PropTypes from "prop-types";

export class AddTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            priority: ''
        };
        this.nameChangedHandler = (event) => {
            this.setState({name: event.target.value});
        };

        this.priorityChangedHandler = (event) => {
            this.setState({priority: event.target.value});
        };
    }

    render () {
        return (
            <div className="AddTask">
                <form>
                    <input
                        id="firstInput"
                        type="text"
                        placeholder="Name"
                        onChange={this.nameChangedHandler}
                        value={this.state.name} />
                    <input
                        id="secondInput"
                        type="number"
                        placeholder="priority"
                        onChange={this.priorityChangedHandler}
                        value={this.state.priority} />
                    <submit id="button" raised color="primary" onClick={() => this.props.taskAdded(this.state.name, this.state.priority)}>Add Task</submit>
                </form>
            </div>
        );
    }
}

AddTask.propTypes = {
    taskAdded: PropTypes.func
};

export default AddTask;