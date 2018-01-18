import * as actionTypes from './actions';

const initialState = {
    tasks: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            const newTask = {
                id: Math.random(),
                name: action.taskData.name,
                priority: action.taskData.priority
            };
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