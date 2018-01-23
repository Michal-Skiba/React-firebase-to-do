import Task from './task';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });

describe('<Task />',() =>{
    it('Tasks length should be one', () =>{
        const component = shallow(<Task/>);
        expect(component.length).toBe(1);
    });
});


