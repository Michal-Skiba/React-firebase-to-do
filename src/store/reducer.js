import * as actionTypes from './actions';
import firebase from 'firebase';
import add_task from './actions';


const initialState = {
    tasks: []
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [  //tworzy nowy array
                    ...state.tasks,
                    action.task,  //przekazenie
                ]
            };
        case actionTypes.REMOVE_TASK:
            return {
                ...state,

            }
    }
    return state;
};

export default reducer;