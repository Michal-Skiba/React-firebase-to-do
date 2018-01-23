import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HandleStatus from './HandleStatus'

Enzyme.configure({ adapter: new Adapter() });

describe('<HandleStatus/>',() =>{

    it('HandleStatus should ........ ', () =>{
        const component = shallow(<HandleStatus/>);
        console.log(component.props)
    });


});

