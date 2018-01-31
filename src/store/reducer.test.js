import React from 'react';
import {reducer} from './reducer'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import initialState from './initialState';

const state = {
    tasks: [
        {
            id: 111,
            name: "franek",
            priority: 1
        },
        {
            id: 222,
            name: "gienek",
            priority: 2
        }
    ]
};

describe('component Tasks tests', () =>{
    it('add task, and change status to success', () => {
        const action = {
            type: 'ADD_TASK_SUCCESS',
            task: {
                id: 12341234,
                name: "name",
                priority: 12
            },
            status: "success"
        };
        const expectedState = {
            ...initialState,
            tasks: [
                ...initialState.tasks,
                action.task
            ],
            status: "success",
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
    });

    it('test change status action', () => {
        const expectedState = {
            ...initialState,
            status: "error",
        };
        const action = {
            type: 'ADD_TASK_STATUS',
            status: "error"
        };

        expect(reducer(initialState,action )).toEqual(expectedState);

    });

    it('test remove task action', () => {
        const action = {
            type: 'REMOVE_TASK',
            id: 111,
        };
        const expectedState = {
            tasks: [
                {
                    id: 222,
                    name: "gienek",
                    priority: 2
                }
            ]
        };
        expect(reducer(state, action)).toEqual(expectedState);
    });

    it('test change progres action', () =>{
        const action = {
            type: 'CHANGE_PROGRESS',
            progress: 4,
        };
        const expectedState = {
            ...initialState,
            progress: 4,
        };
        expect(reducer(initialState,action)).toEqual(expectedState);
    })
});