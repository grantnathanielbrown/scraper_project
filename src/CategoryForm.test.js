import React from 'react';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import CategoryForm from './CategoryForm';


expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Term Form', () => {
    const mockHandleChange = jest.fn();    
    const categoryForm = shallow(<CategoryForm handleChange={mockHandleChange} />);
    it('renders properly', () => {
        expect(categoryForm).toMatchSnapshot();
    });
    it('can call the function that is passed down as a prop', () => {
        const selectedCategory = 'Controversial';
        categoryForm.find('#category').simulate('change', {target: {value: selectedCategory}});
        expect(mockHandleChange).toHaveBeenCalledTimes(1);
    });

    
});