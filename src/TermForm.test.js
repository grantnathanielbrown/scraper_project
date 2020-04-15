import React from 'react';
import { shallow } from 'enzyme';
import {createSerializer} from 'enzyme-to-json';
import TermForm from './TermForm';


expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Term Form', () => {
    const mockHandleChange = jest.fn();
    const termForm = shallow(<TermForm handleChange={mockHandleChange} searchTerm='dummy search term' timeframe='dummy time'/>);
    it('renders properly', () => {
        expect(termForm).toMatchSnapshot();
    });

    it('can call the function that is passed down as a prop', () => {
        const sampleSearch = 'cat gifs';
        termForm.find('#searchTerm').simulate('change', {target: {value: sampleSearch}});
        expect(mockHandleChange).toHaveBeenCalledTimes(1);
    });

    
});


