import React from 'react';
import { shallow} from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Progress from './progress'

Enzyme.configure({ adapter: new Adapter() });

describe('handle status',() =>{
    it('HandleStatus should return empty div', () =>{
        const component = shallow(<Progress {...props}/>);

        const expected = (<div className='progress'>
            <div className='zero'>  </div>
        </div>);

        expect(component.contains(expected)).toBe(true);
    });

});
