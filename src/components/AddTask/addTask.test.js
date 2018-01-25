/*
import React from 'react';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as AddTask from "./addTask"
import { mount, shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('Addtask component test',() =>{
    let component;
    beforeEach(() => {
        component = shallow(<AddTask/>);
    });

    it('should exist', () => {
        expect(component.exists()).toBe(true);
    });

    it('test nameChangeHandler', () =>{

        let expectedState = {
            name: 'name',
            priority: ''
        };
        const file = "name";
        const input = component.find('input').get(0);
        const button = component.find('button');
        input.simulate('change', file);
        button.click();
        expect(AddTask.this.nameChangedHandler).toHaveBeenCalled();
        expect(component.state).toEqual(expectedState)
    });

});

*/

/*
//////
const input = wrapper.find('[name="legalName"]');
import React from 'react';
import {mount} from 'enzyme';
import MyComponent from './temp01';

it('should test handler', () => {
    const componentWrapper   = mount(<MyComponent/>);
    const component          = componentWrapper.get(0);
    // should the line above use `componentWrapper.instance()` instead?
    const fileContents       = 'file contents';
    const expectedFinalState = {fileContents: fileContents};
    const file               = new Blob([fileContents], {type : 'text/plain'});
    const readAsText         = jest.fn();
    const addEventListener   = jest.fn((_, evtHandler) => { evtHandler(); });
    const dummyFileReader    = {addEventListener, readAsText, result: fileContents};
    window.FileReader        = jest.fn(() => dummyFileReader);

    spyOn(component, 'setState').and.callThrough();
    // spyOn(component, 'changeHandler').and.callThrough(); // not yet working

    componentWrapper.find('input').simulate('change', {target: {files: [file]}});

    expect(FileReader        ).toHaveBeenCalled    (                             );
    expect(addEventListener  ).toHaveBeenCalledWith('load', jasmine.any(Function));
    expect(readAsText        ).toHaveBeenCalledWith(file                         );
    expect(component.setState).toHaveBeenCalledWith(expectedFinalState           );
    expect(component.state   ).toEqual             (expectedFinalState           );
    // expect(component.changeHandler).toHaveBeenCalled(); // not yet working
});

/////////

import React from 'react';
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {fileContents: ''};
        this.changeHandler = this.changeHandler.bind(this);
    }
    changeHandler(evt) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.setState({fileContents: reader.result});
        });
        reader.readAsText(evt.target.files[0]);
    }
    render() {
        return <input type="file" onChange={this.changeHandler}/>;
    }
}
export default MyComponent;

///////////////////
const event = "test";
        let expectedAction = {
            name: 'test',
            priority: ''
        };
        expect(addTask.nameChangedHandler(event)).toEqual(expectedAction)
///////////////////
export class AddTask extends Component {
    state = {
        name: '',
        priority: ''
    };

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    };

    priorityChangedHandler = (event) => {
        this.setState({priority: event.target.value});
    };

    render () {
        return (
            <div className="AddTask">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={this.nameChangedHandler}
                    value={this.state.name} />
                <input
                    type="number"
                    placeholder="priority"
                    onChange={this.priorityChangedHandler}
                    value={this.state.priority} />
                <Button id={"button"} raised color="primary" onClick={() => this.props.taskAdded(this.state.name, this.state.priority)}>Add Task</Button>
            </div>
        );
    }
}
 */