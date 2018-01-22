import * as actionTypes from './actions';

const initialState = {
    tasks: [],
    status: "success",
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.task,
                ],
            };
        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            };
        case actionTypes.GET_EVENT_START:
            return{
                ...state,
                status: "start"
            };
        case actionTypes.GET_EVENT_SUCCESS:
            return{
                ...state,
                status: "success"
            };
        case actionTypes.GET_EVENT_ERROR:
            return{
                ...state,
                status: 'error'
            };

         }
        return state;
};

export default reducer;