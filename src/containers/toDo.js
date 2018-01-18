import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task/Task';
import AddTask from '../components/AddTask/AddTask';
import * as actionTypes from '../store/actions';

class Tasks extends Component {
    render () {
        return (
            <div>
                <AddTask taskAdded={this.props.onAddTask} />
                {this.props.task.map(tsk => ( // Leci po glownym state i przekuzje  jego wartosci
                    <Task
                        key={tsk.id}
                        name={tsk.name}
                        priority={tsk.priority}
                        clicked={() => this.props.onRemoveTask(tsk.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => { // Laczy z glownym statem
    return {
        task: state.tasks
    };
};

const mapDispatchToProps = dispatch => { // wywoluje zmiany w glownym state przez reducera
    return {
        onAddTask: (name, priority) => dispatch({type: actionTypes.ADD_TASK, taskData: {name: name, priority: priority}}),
        onRemoveTask: (id) => dispatch({type: actionTypes.REMOVE_TASK, taskId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks); // pozwala polaczyc z reducerem?