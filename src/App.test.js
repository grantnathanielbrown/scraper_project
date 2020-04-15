import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import App from './App';


const app = shallow(<App />);
const initialState = {
    category: "Best",
    minScore: -100,
    numPosts: 25,
    subreddit: "",

    searchTerm: "",
    timeframe: "hour",
    
    postArray: [],
    animationTracker: false,
    selectedForm: "Category",            
}
describe('Main Application', () => {

    it('renders properly', ()  =>  {
        expect(app).toMatchSnapshot();
    });

    it('renders with the correct predefined state', () => {
        expect(app.state()).toStrictEqual(initialState);
    });

    it('plays rising title animation on page load / componentDidMount', () => {
        const instance = app.instance();
        jest.spyOn(instance, 'risingAnimation');
        instance.componentDidMount();
        expect(instance.risingAnimation).toHaveBeenCalledTimes(1);
    })

    describe("has its state.selectedForm changed one of the form buttons is pressed ", () => {

        afterEach(() => {
            app.setState(initialState);
        });

        it("category form is selected", () => {
            app.find('.category-label').simulate('click');
            expect(app.find('CategoryForm').exists()).toBe(true);
            expect(app.find('TermForm').exists()).toBe(false);
            expect(app.state('selectedForm')).toBe("Category");
        });
        
        it("search form is selected", () => {
            app.find('.search-label').simulate('click');            
            expect(app.find('TermForm').exists()).toBe(true);
            expect(app.find('CategoryForm').exists()).toBe(false);
            expect(app.state('selectedForm')).toBe("Search");
        });

    });



});


