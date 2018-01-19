import React, { Component } from 'react';
import { connect } from 'react-redux';
import Task from '../components/Task/task';
import AddTask from '../components/AddTask/addTask';
import { add_task } from "../store/actions";
import { removeTask } from "../store/actions";

<<<<<<< HEAD

//{status === 'pending' ? <loader> : button }

class Tasks extends Component {
    // component did mount => fetch listya  jak się robi promisy -> redux promis -> redux tunk
=======
class Tasks extends Component {
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
    render () {
        console.log(this.props);
        return (
            <div>
<<<<<<< HEAD

=======
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
                <AddTask taskAdded={this.props.add_task} />
                {this.props.task.map(tsk => ( // Leci po glownym state i przekuzje  jego wartosci
                    <Task
                        key={tsk.id}
                        name={tsk.name}
                        priority={tsk.priority}
<<<<<<< HEAD
                        clicked={this.props.removeTask}
=======
                        clicked={() => this.props.removeTask(tsk.id)}
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
                     />
                ))}
            </div>
        );
    }
}

<<<<<<< HEAD

const mapStateToProps = state => { // Laczy z glownym statem
    console.log(state.tasks, "matStateToProps");
    return {
        task: state.tasks,
=======
//this.props.removeTask(tsk.id)

const mapStateToProps = state => { // Laczy z glownym statem
    return {
        task: state.tasks
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
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
<<<<<<< HEAD
export default connect(mapStateToProps,  { add_task, removeTask })(Tasks); // pozwala polaczyc z reducerem? {addTask}
=======
export default connect(mapStateToProps,  { add_task }, {removeTask} )(Tasks); // pozwala polaczyc z reducerem? {addTask}
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
