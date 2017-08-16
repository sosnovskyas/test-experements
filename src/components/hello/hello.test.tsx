import * as React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import {Hello} from './index';

describe('<Hello />', () => {
    it('contain text', () => {
        const comp = shallow(<Hello  compiler="TypeScript" framework="React"/>);
        expect(comp.text()).contains('Hello from TypeScript and React!');
    });
    // it('renders three <Foo /> components', () => {
    //     const wrapper = shallow(<Hello framework="react" compiler="typescript"/>);
    //     expect(wrapper.find('div')).to.have.length(3);
    // });

    // it('renders an `.icon-star`', () => {
    //     const wrapper = shallow(<Hello framework="react" compiler="typescript"/>);
    //     expect(wrapper.find('.icon-star')).to.have.length(1);
    // });

    // it('renders children when passed in', () => {
    //     const wrapper = shallow((
    //         <Hello framework="react" compiler="typescript">
    //             <div className="unique"/>
    //         </Hello>
    //     ));
    //     expect(wrapper.contains(
    //         <div className="unique"/>)).to.equal(true);
    // });

    // it('simulates click events', () => {
    //     const onButtonClick = sinon.spy();
    //     // const wrapper = shallow(<Hello framework="react" compiler="typescript" onButtonClick={onButtonClick}/>);
    //     const wrapper = shallow(<Hello framework="react" compiler="typescript"/>);
    //
    //     wrapper.find('button').simulate('click');
    //     expect(onButtonClick).to.have.property('callCount', 1);
    // });
});