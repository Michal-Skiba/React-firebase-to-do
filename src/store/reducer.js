import * as actionTypes from './actions';



const initialState = {
    tasks: [],
    status: "success",
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.task,
                ],
                status: action.status
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
         }

        return state;
};

export default reducer;