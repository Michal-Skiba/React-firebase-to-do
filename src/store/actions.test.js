import * as actions from './actions'
describe('Actions', () => {
    let task;
    const status = "status";
    beforeEach(() => {
        task = {
            id: 111111,
            name: "michal",
            priority: 1,
        };
    });

    it('should create an action to add new task, and switch status to success', () => {
        const expectedActions = {
            type: actions.ADD_TASK_SUCCESS,
            task,
        };
        expect(actions.addTaskSuccess(task)).toEqual(expectedActions)
    });

    it('Should create an actions to change status', () =>{
        const expectedActions = {
            type: actions.ADD_TASK_STATUS,
            status,
        };
        expect(actions.addTaskStatus(status)).toEqual(expectedActions)
    });
});
