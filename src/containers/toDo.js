import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task/task';
import HandleStatus from '../components/HandleStatus/HandleStatus';
import AddTask from '../components/AddTask/addTask';
import PropTypes from 'prop-types';
import { addTask } from "../store/actions";
import { changeProgress } from "../store/actions";
import { removeTask } from "../store/actions";
import { fillTasks } from "../store/actions";


export class Tasks extends Component {
    constructor(props){
        super(props);
        this.props.fillTasks();// fillTasks() -- to pójdzie bez conecta i dipatch nie będzie działał -- BARDZO WAZNE
    }
    render () {
        return (
            <div>
                <AddTask taskAdded={this.props.addTask}/>
                {this.props.task.map(tsk => (
                    <Task
                        name={tsk.name}
                        priority={tsk.priority}
                        clicked={() => this.props.removeTask(tsk.id)}
                        progress={ tsk.progress }
                        id = {tsk.id}
                        clickedProgress = {() => this.props.changeProgress(tsk.id)}
                     />
                ))}
                <HandleStatus status={this.props.status}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        task: state.tasks,
        status: state.status,
        progress: state.progress,
    };
};

Task.defaultProps = {
    task: [],
};

Tasks.propTypes = {
    clickedProgress: PropTypes.func,
    progress: PropTypes.number,
    fillTasks: PropTypes.func,
    addTask: PropTypes.func,
    removeTask: PropTypes.func,
    task: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        priority: PropTypes.number,
    }),
    status: PropTypes.string,
};

export default connect(mapStateToProps,  { addTask, removeTask, fillTasks, changeProgress} )(Tasks);

/*
jak map nie ma choćby pustej arrayki to się wywala,
testy się wywywalały przez to, że funkcje wywołujące się nie były w propsach

const mapDispatchToProps = dispatch => { // wywoluje zmiany w glownym state przez reducera
    return {
        onAddTask: (name, priority) => dispatch({type: actionTypes.ADD_TASK, taskData: {name: name, priority: priority}}),
        onRemoveTask: (id) => dispatch({type: actionTypes.REMOVE_TASK, taskId: id})
    }
};
*/
