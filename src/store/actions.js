import firebase from "firebase";
import './actions.css';

export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_STATUS = 'ADD_TASK_STATUS';
export const REMOVE_TASK = 'REMOVE_TASK';
export const CHANGE_PROGRESS = 'CHANGE_PROGRESS';

// DODAWANIE TAKSÓW

export const writeTask = (id, name, priority, progress) => {
    return firebase.database().ref('Task/' + id).set({
        name,
        priority,
        id,
        progress,
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

export const changeProgressData = (id, progress)=>{
    return firebase.database().ref('Task/' + id).update({progress: progress});
};


export const changeProgress = (id) => {

    let progress = 0;
    let ref = firebase.database().ref('Task/' + id).child('progress');
    ref.on('value', snap =>(progress = snap.val()));

    if(progress > 0 && progress < 5){
        progress++;
        changeProgressData(id, progress);
        return{
            type: CHANGE_PROGRESS,
            progress: progress,
        }
    }else{
        progress = 1;
        changeProgressData(id, progress);
        return{
            type: CHANGE_PROGRESS,
            progress: progress,
        }
    }
};


export let addTask = (name, priority) =>{
    let newTask = {
        id: Math.round(Math.random()*1000000000),
        name: name,
        priority: priority,
        progress: 1
    };

    return (dispatch) => {
        addTaskStatus("start");
        writeTask(newTask.id, newTask.name, newTask.priority, newTask.progress)
            .then(() => {
                dispatch(addTaskStatus("success"));
            })
            .catch(() => {
                dispatch(addTaskStatus("error"));
            })

    }
};

// USUWANIE TASKÓW

const removeFromFirebase = (id) =>{
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

