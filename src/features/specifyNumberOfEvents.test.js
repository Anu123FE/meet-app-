import { loadFeature, defineFeature } from 'jest-cucumber';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mount } from 'enzyme';
import React from 'react';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 10 is the default number', ({ given, when, then }) => {
        let locations, CitySearchWrapper, NumberofEventsWrapper;
        given('user has opened the app and is on the main page', () => {
            locations = extractLocations(mockData);
            CitySearchWrapper = mount(<CitySearch locations={locations}/>);
            NumberofEventsWrapper = mount(<NumberOfEvents />);
        });

        when('the user sees the elements', () => {
            expect(NumberofEventsWrapper.state('numberofevents')).toBe(10);
          
        });

        then('there will be 10 displayed events', () => {
            expect(NumberofEventsWrapper.state('numberofevents')).toBe(10);

        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let locations, CitySearchWrapper, NumberofEventsWrapper;
        given('user opened the app and is on the main page', () => {
            locations = extractLocations(mockData);
            CitySearchWrapper = mount(<CitySearch locations={locations}/>);
            NumberofEventsWrapper = mount(<NumberOfEvents />);
        });

        when('the user inputs the number of events to be displayed', () => {
          const newValue = { target: { value: 5}};
          NumberofEventsWrapper.find("input").simulate('change', newValue);
        });

        then('the specified number of events will be displayed', () => {
            expect(NumberofEventsWrapper.state('numberofevents')).toBe(5);
        });
    });

});