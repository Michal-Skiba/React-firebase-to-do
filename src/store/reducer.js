import * as actionTypes from './actions';
import firebase from 'firebase';
import add_task from './actions';



const initialState = {
<<<<<<< HEAD
    tasks: [],
    //status: null,
=======
    tasks: []
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 4099ddde1dc157731a159ab5ccc1062d378d04a6
    }
    return state;
};

export default reducer;

//case 'REMOVE_TRUCK':
//return state.filter(truck => truck.id !== action.id)