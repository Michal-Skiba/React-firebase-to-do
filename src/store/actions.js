import firebase from "firebase";
import './actions.css';

export const ADD_TASK = 'ADD_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const GET_EVENT_START = 'GET_EVENT_START';
export const GET_EVENT_SUCCESS = 'GET_EVENT_SUCCESS';
export const GET_EVENT_ERROR = 'GET_EVENT_ERROR';

export const taskArray = [];




// DODAWANIE TAKSÓW
const writeTask =(id, name, priority) => {
    return firebase.database().ref('Task/' + id).set({
        name,
        priority,
        id
    })
};

const addTask = (task) =>{
    console.log(task, "ADDTASK===============");
    return{
        type: ADD_TASK,
        task,  //to co przeazuje do reducera to samo co task: task
    }
};

export const add_task = (name, priority) =>{
    console.log('wywołanie');
    const newTask = {
        id: Math.round(Math.random()*1000000000),
        name: name,
        priority: priority
    };

    console.log(newTask);
    return (dispatch) => {
        dispatch(getEventStart());
        writeTask(newTask.id, newTask.name, newTask.priority)
            .then(() => {
                dispatch(getEventSuccess());
                dispatch(addTask(newTask)); //////
            })
            .catch((error) => {
                dispatch(getEventError(error));
            })

    }
};

// USUWANIE TASKÓW

const removeFromFirebase = (id)=>{
    const ref = firebase.database().ref('Task').child(id);
    return ref.remove()
};

const removeTsk = (id) =>{
    return{
        type: REMOVE_TASK,
        id,
    }
};

export const removeTask = (id) =>{
    return (dispatch) => {
        dispatch(removeTsk(id));
        removeFromFirebase(id)
    }
};

// ZACIĄGANIE TASKÓW


const addTaskFromData = (name, priority, id) =>{
    const newTask = {
        id,
        name,
        priority
    };
    //taskArray.push(newTask);
    console.log(newTask);
    console.log("Przed dispatchem addTaskFromData");
    //Tu koniec
    return (dispatch) => {
        console.log(" ZAA DISPATCHEM");
        dispatch(addTask(newTask))
    };

};

export const fillTasks = () =>{
    const ref = firebase.database().ref().child('Task');
    ref.on('child_added', snap => {
        const { name, priority, id } = snap.val();
        addTaskFromData(name, priority, id)
    });
};

export const getEventStart = () =>{
    console.log("START");
    return{
        type: GET_EVENT_START
    }
};

export const getEventSuccess = () =>{
    console.log("SUCCESS");
    return{
        type: GET_EVENT_SUCCESS
    }
};

export const getEventError = () =>{
    console.log("ERROR");
    return{
        type: GET_EVENT_ERROR
    }
};



/*

for(let i=0; i<taskArray.length; i++){
    console.log('gg');
    addTask(taskArray[i])
}

export const fillTasks = () =>{
    const ref = firebase.database().ref().child('Task');
    ref.on('child_added', snap => {
        const newTask = {
            id: snap.val().id,
            name: snap.val().name,
            priority: snap.val().priority
        };
        downloadTask(newTask)
    });

};

export const fillTasks = () =>{
    const ref = firebase.database().ref().child('Task');
    let newState = [];
    ref.on('child_added', snap => {
        const newTask = {
            id: snap.val().id,
            name: snap.val().name,
            priority: snap.val().priority
        };
        newState.push(newTask);
    });
    console.log(newState, "new state");
    return (dispatch) => {
        dispatch(downloadTask(newState));
    }
};

state.tasks.filter(task => task.id !== id)\

query.once("value")
        .then((snapshot) =>{
            snapshot.forEach((childSnapshot) =>{
                let childData = childSnapshot.val();
                console.log(childData.name);
            })
        })

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