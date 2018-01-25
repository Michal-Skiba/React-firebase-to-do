import * as actions from './actions';


describe('action change status, and add task', () =>{
   it('should create an action to add status:success', ()=>{
       const task = "test";
       const expectedAction = {
           type: actions.ADD_TASK_SUCCESS,
           status: "success",
           task: "test"
       };
       expect(actions.addTaskSuccess(task)).toEqual(expectedAction)
   });
   it('should create an action to change status', ()=>{
        const status = "error";
        const expectedAction = {
            type: actions.ADD_TASK_STATUS,
            status: "error",
        };
        expect(actions.addTaskStatus(status)).toEqual(expectedAction)
   })
});


/*


export const addTask = (name, priority) =>{
    const newTask = {
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





export const addTaskStatus = (status) =>{
    return{
        type: ADD_TASK_STATUS,
        status: status
    }
};


export const addTaskSuccess = (task) =>{
    return{
        type: ADD_TASK_SUCCESS,
        status: "success",
        task,
    }
};
 */