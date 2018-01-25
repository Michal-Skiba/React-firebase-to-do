import React from 'react';
import { mount} from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HandleStatus from './HandleStatus'

Enzyme.configure({ adapter: new Adapter() });

describe('handle status',() =>{
    it('HandleStatus should return empty div', () =>{
        const component = mount(<HandleStatus status="success"/>);
        const expected = (<div></div>);
        expect(component.contains(expected)).toBe(true);
    });
    it('HandleStatus should return loading div', () =>{
        const component = mount(<HandleStatus status="start"/>);
        const expected = (<div id='loading'> LOADING </div>);
        expect(component.contains(expected)).toBe(true);
    });
    it('HandleStatus should return error div', () =>{
        const component = mount(<HandleStatus status="error"/>);
        const expected = (<div id='error'> ERROR </div>);
        expect(component.contains(expected)).toBe(true);
    })
});
