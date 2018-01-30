import firebase from "firebase";
import './actions.css';

export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_STATUS = 'ADD_TASK_STATUS';
export const REMOVE_TASK = 'REMOVE_TASK';

// DODAWANIE TAKSÓW

export const writeTask = (id, name, priority) => {
    return firebase.database().ref('Task/' + id).set({
        name,
        priority,
        id
    })
};
export const addTaskSuccess = (task) =>{
    return{
        type: ADD_TASK_SUCCESS,
        task,
    }
};

export const addTaskStatus = (status) =>{
    return{
        type: ADD_TASK_STATUS,
        status: status
    }
};

export let addTask = (name, priority) =>{
    let newTask = {
        id: Math.round(Math.random()*1000000000),
        name: name,
        priority: priority
    };
    return (dispatch) => {
        dispatch(addTaskStatus("start"));
        writeTask(newTask.id, newTask.name, newTask.priority)
            .then(() => {
                dispatch(addTaskStatus("success"));
            })
            .catch(() => {
                dispatch(addTaskStatus("error"));
            })

    }
};

// USUWANIE TASKÓW

const removeFromFirebase = (id)=>{
    const ref = firebase.database().ref('Task').child(id);
    return ref.remove()
};

export const removeTask = (id) =>{
    removeFromFirebase(id);
    return (dispatch) => {
        dispatch({ type: REMOVE_TASK, id});
    }
};

// ZACIĄGANIE TASKÓW

export const fillTasks = () =>{
    const ref = firebase.database().ref().child('Task');
    return (dispatch) => {
        ref.on('child_added', snap => {
            dispatch(addTaskSuccess(snap.val()))
        });
    }
};

