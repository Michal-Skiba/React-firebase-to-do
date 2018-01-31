import * as actionTypes from './actions';
import initialState from './initialState';

export const reducer = ( state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.task,
                ],
                status: "success"
            };
        case actionTypes.ADD_TASK_STATUS:
            return {
                ...state,
                status: action.status
            };
        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            };
        case actionTypes.CHANGE_PROGRESS:
            return{
                ...state,
                progress: action.progress
            }
         }
        return state;
};

export default reducer;