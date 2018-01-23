
import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
import Task from '../components/Task/task';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });


test('About component should be render as expected', () =>{
    const component = shallow(<About/>);
    expect(component.contains("Hi, i am Michal")).toBe(true);  // contains => Boolean || const component = mount(to co będzie zamontowane) importuj z enzyma
    expect(component.contains(" to bedzie fals")).toBe(false);
    expect(component.find(Task).length).toBe(1);

});






/*

find(div.klasa)




describe('testing Test component', () => {
    let wrapper;
    beforeEach(() => { wrapper = shallow(<Test_2 />); });

    it("icludes 1 div with class foo", () =>{
        expect(wrapper.find('div.foo')).to.have.lengthOf(1);
    });

    it('includes a span with test!', () =>{
        expect(wrapper.find('span.bar').text()).to.be.equal('test!');
    });
});
*/