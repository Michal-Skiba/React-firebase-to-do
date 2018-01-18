import * as actionTypes from './actions';
import firebase from 'firebase';


const initialState = {
    tasks: []
};


const writeTask =(id, name, priority) => {
    firebase.database().ref('Task/' + id).set({
        name: name,
        priority: priority
    });
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            const newTask = {
                id: Math.round(Math.random()*1000000000),
                name: action.taskData.name,
                priority: action.taskData.priority
            };
            writeTask(newTask.id, newTask.name, newTask.priority);
            return {
                ...state,
                tasks: state.tasks.concat( newTask )
            };
        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            }
    }
    return state;
};

export default reducer;