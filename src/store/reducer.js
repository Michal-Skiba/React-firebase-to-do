import * as actionTypes from './actions';


const initialState = {
    tasks: [],
    //status: null,
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK: // kolejny z zmiana statusu
            return {
                ...state,
                 tasks: [  //tworzy nowy array
                     ...state.tasks,
                     action.task,  //przekazenie
                 ]
              //  status: 'success'
            };
        case actionTypes.REMOVE_TASK:
            return state.filter(tasks => tasks.id !== action.id)
    }
    return state;
};

export default reducer;

//case 'REMOVE_TRUCK':
//return state.filter(truck => truck.id !== action.id)