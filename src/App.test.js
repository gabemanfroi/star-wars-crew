import App from './App';
import {shallow} from 'enzyme';

test('renders learn react link', () => {
    const wrapper = shallow(<App/>);
    const header = wrapper.find(`[data-test='Header']`);
    expect(header.length).toBe(1);
});

test('renders learn react link2', () => {
    const wrapper = shallow(<App/>);
    const header = wrapper.find(`[data-test='Header']`);
    expect(header.length).not.toBe(0);
});