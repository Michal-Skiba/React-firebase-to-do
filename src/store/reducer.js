
import * as actionTypes from './actions';

const initialState = {
    message: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            const newTask = {
                id: Math.random(),
                task: action.personData.task,
                date: action.personData.task
            };
            return {
                ...state,
                persons: state.persons.concat( newTask )
            };
        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                persons: state.persons.filter(task => task.id !== action.taskId)
            };
    }
    return state;
};

export default reducer;