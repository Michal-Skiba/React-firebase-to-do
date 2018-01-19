import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task/task';
import AddTask from '../components/AddTask/addTask';
import { add_task } from "../store/actions";
import { removeTask } from "../store/actions";


//{status === 'pending' ? <loader> : button }

class Tasks extends Component {
    // component did mount => fetch listya  jak się robi promisy -> redux promis -> redux tunk
    render () {
        console.log(this.props);
        return (
            <div>

                <AddTask taskAdded={this.props.add_task} />
                {this.props.task.map(tsk => ( // Leci po glownym state i przekuzje  jego wartosci
                    <Task
                        key={tsk.id}
                        name={tsk.name}
                        priority={tsk.priority}
                        clicked={this.props.removeTask}
                     />
                ))}
            </div>
        );
    }
}


const mapStateToProps = state => { // Laczy z glownym statem
    console.log(state.tasks, "matStateToProps");
    return {
        task: state.tasks,
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
export default connect(mapStateToProps,  { add_task, removeTask })(Tasks); // pozwala polaczyc z reducerem? {addTask}
