import React from 'react'
import { shallow } from 'enzyme'
import  { Tasks }  from './toDo'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });



describe('component Tasks tests', () => {
    let component;
    let props;
    let spy;
    beforeEach(() => {
        props = {
            fillTasks: spy = jest.fn(),
            task: [],
        };
        component = shallow(<Tasks {...props} />)
    });
    it('component should be exists', () => {
        expect(component.exists()).toBe(true);
    });
    it('fillTasks from componentWillMount should start', () => {
        expect(spy).toHaveBeenCalled()
    });
});


