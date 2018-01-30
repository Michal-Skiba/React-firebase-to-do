import React from 'react';
import { createMockStore } from '../../helpers/createMockStore'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const initialState = {
    tasks: [],
    status: "start",
};

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
        const action = {
            type: 'ADD_TASK_STATUS',
            status: "error"
        };
        const expectedState = {
            ...initialState,
            tasks: [
                ...initialState.tasks,
            ],
            status: "error",
        };
        expect(reducer(initialState, action)).toEqual(expectedState);
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
});