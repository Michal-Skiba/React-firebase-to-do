import Task from './task';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });

describe('component task test',() =>{
    it('Tasks length should be one', () =>{
        const component = shallow(<Task/>);
        expect(component.exists()).toBe(true);
    });
});

