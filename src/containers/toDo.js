import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task/task';
import HandleStatus from '../components/HandleStatus/HandleStatus';
import AddTask from '../components/AddTask/addTask';
import { addTask } from "../store/actions";
import { removeTask } from "../store/actions";
import { fillTasks } from "../store/actions";
class Tasks extends Component {

    componentWillMount(){
        this.props.fillTasks(); // fillTasks() -- to pójdzie bez conecta i dipatch nie będzie działał -- BARDZO WAZNE
    }

    render () {
        return (
            <div>

                <AddTask taskAdded={this.props.addTask}/>
                {this.props.task.map(tsk => (
                    <Task
                        key={tsk.id}
                        name={tsk.name}
                        priority={tsk.priority}
                        clicked={() => this.props.removeTask(tsk.id)}
                     />
                ))}
                <HandleStatus status={this.props.status}/>
            </div>
        );
    }
}

const mapStateToProps = state => { // Laczy z glownym statem
    return {
        task: state.tasks,
        status: state.status,
    };
};


/*
const mapDispatchToProps = dispatch => { // wywoluje zmiany w glownym state przez reducera
    return {
        onAddTask: (name, priority) => dispatch({type: actionTypes.ADD_TASK, taskData: {name: name, priority: priority}}),
        onRemoveTask: (id) => dispatch({type: actionTypes.REMOVE_TASK, taskId: id})
    }
};
*/
export default connect(mapStateToProps,  { addTask, removeTask, fillTasks} )(Tasks);
