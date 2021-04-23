import { mount } from 'enzyme';
import {Spinner} from './Spinner'

test('test if component has style top:50%', () => {
    const wrapper = mount(
        <Spinner></Spinner>
    )
    const itemToTest = wrapper.find('.loader').get(0).props.style
    expect(itemToTest).toHaveProperty('top', '50%');
});