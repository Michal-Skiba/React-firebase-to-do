import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AddTask from "./addTask"
import { mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('Addtask component test',() =>{
    let component;
    beforeEach(() => {
        component = mount(<AddTask/>);
    });

    it('should exist', () => {
        expect(component.exists()).toBe(true);
    });

    it('input length should be 2', () => {
        expect(component.find('input').length).toBe(3);
    });

    it('test nameChangeHandler', () =>{
        const inputName = component.find('#firstInput');
        const inputPriority = component.find('#secondInput');
        const expectedState = {
            name: 'name',
            priority: 'priority'
        };
        inputName.simulate('change', { target: { value: 'name' }});
        inputPriority.simulate('change', { target: { value: 'priority' }});
        component.find('#button').simulate('submit');
        expect(component.state()).toEqual(expectedState);
    });
});
