import React from 'react';
import { mount} from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import Tasks from './toDo'




describe('action change status, and add task', () =>{
    it('should check that the componentWillMount method is getting called', () => {
        const onWillMount = jest.fn();
        Tasks.componentWillMount = onWillMount;
        mount(<Tasks />);
        expect(onWillMount).toBeCalled();

    });
});
