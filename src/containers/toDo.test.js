import React from 'react'
import { shallow } from 'enzyme'
import  Tasks  from './toDo'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });



describe('clearInvoicesList action', () => {
    let component;
    beforeEach(() => component = shallow(<Tasks/>));
    it('should create an action to clear invoices list', () => {
        expect(component.exists()).toBe(true);
    });


});








/*
describe('MainRoute renders without crashing', () => {
    let container;
    beforeEach(() => {
        container = shallow(<Tasks/>)
    });

    it('should exists', () => {
        expect(container).toHaveLength(1)
    });

});
*/


//store = mockStore(initialState);
//const initialState = { questions: [] };
//const mockStore = configureStore();

























/*
import Tasks from './toDo';
import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
//const dispatch = sinon.spy();



describe('component task test',() =>{
    let component;
    beforeEach(() => {
        component = shallow(
            <Tasks store={mockStore}/>.dive()
        );
    });

    it('Component should be exist', () =>{
        expect(component.exists()).toBe(true);
        console.log("TRUE")
    });
});

*/