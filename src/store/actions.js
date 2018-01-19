import firebase from "firebase";

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';


const addTask = (task) =>{
    return{
        type: ADD_TASK,
        task,  //to co przeazuje do reducera to samo co task: task
    }
};

const writeTask =(id, name, priority) => {
    return firebase.database().ref('Task/' + id).set({
        name: name,
        priority: priority
    })
};


export const add_task = (name, priority) =>{
    const newTask = {
        id: Math.round(Math.random()*1000000000),
        name: name,
        priority: priority
    };
    return (dispatch) => {
        // dispatch
        writeTask(newTask.id, newTask.name, newTask.priority)
            .then(() => {
                dispatch(addTaskSucccess(newTask));  //to co się dzieje po dodanie
            })
            .catch((error) => {
                // Lapie bledy
            })
    }
};


// id bez
const addRemove = (id) =>{
    console.log(id,"xyz");
    return{
        type: ADD_TASK,
        id,
    }
};


export const removeTask = (id) => {
    return (dispatch) => {
        console.log('dispatch');
        dispatch(addRemove(id))
    }
};




/*

export const removeTruck = id => {
	return {
		type: "REMOVE_TRUCK",
		id
	}
}



state.tasks.filter(task => task.id !== id)

tasks: state.tasks.filter(task => task.id !== action.taskId)

const writeTask =(id, name, priority) => {
    firebase.database().ref('Task/' + id).set({
        name: name,
        priority: priority
    });
};

const addTask = () =>{
    return{
        type: ADD_TASK
    }
};
*/
/*
const addTaska = ( state, action ) =>{
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
};
*/




/*const reducer = ( state = initialState, action ) => {
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


const mapDispatchToProps = dispatch => { // wywoluje zmiany w glownym state przez reducera
    return {
        onAddTask: (name, priority) => dispatch({type: actionTypes.ADD_TASK, taskData: {name: name, priority: priority}}),
        onRemoveTask: (id) => dispatch({type: actionTypes.REMOVE_TASK, taskId: id})
    }
};



*/

//export default add_task