import Task from './task';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe('component task test',() =>{
    let component;
    beforeEach(() => {
        component = shallow(<Task/>);
    });
    it('Tasks length should be one', () =>{
        expect(component.exists()).toBe(true);
    });
    it('h1 length should be 1', () => {
        expect(component.find('h1').length).toBe(1);
    });
    it('p length should be 1', () => {
        expect(component.find('p').length).toBe(1);
    });
});

