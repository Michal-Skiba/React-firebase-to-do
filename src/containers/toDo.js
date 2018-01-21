import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task/task';
import Error from '../components/Error/Error';
import AddTask from '../components/AddTask/addTask';
import { add_task } from "../store/actions";
import { removeTask } from "../store/actions";
import { fillTasks } from "../store/actions";
import { checkStatus } from "../store/actions";

//{status === 'pending' ? <loader> : button }
// component did mount => fetch listya  jak się robi promisy -> redux promis -> redux tunk

class Tasks extends Component {

    componentDidMount() {
        console.log('componentDidMount');
        this.props.fillTasks
        checkStatus(this.props.status)
    }

    componentDidUpdate(){
        checkStatus(this.props.status)
    }

    render () {
        return (
            <div>
                <AddTask taskAdded={this.props.add_task}/>
                {this.props.task.map(tsk => (
                    <Task
                        key={tsk.id}
                        name={tsk.name}
                        priority={tsk.priority}
                        clicked={() => this.props.removeTask(tsk.id)}
                     />
                ))}
                <Error/>
            </div>
        );
    }
}

//this.props.removeTask(tsk.id)

const mapStateToProps = state => { // Laczy z glownym statem
    return {
        task: state.tasks,
        status: state.status
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
export default connect(mapStateToProps,  { add_task, removeTask, fillTasks, checkStatus} )(Tasks);
