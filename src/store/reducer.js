import * as actionTypes from './actions';



const initialState = {
    tasks: [],
    status: null,
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [  //tworzy nowy array
                    ...state.tasks,
                    action.task,  //przekazenie
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
                status: true
            };
        case actionTypes.GET_EVENT_SUCCESS:
            return{
                ...state,
                status: null
            };
        case actionTypes.GET_EVENT_ERROR:
            return{
                ...state,
                status: false
        }
    }
    return state;
};

export default reducer;