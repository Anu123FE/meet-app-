import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { extractLocations } from '../api';
import { mockData } from '../mock-data';
import CitySearch from '../CitySearch';
import Event from '../Event';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        let locations, CitySearchWrapper;
        given('the user is on the main page', () => {
            locations = extractLocations(mockData);
            CitySearchWrapper = mount(<CitySearch locations={locations}/>);
        });

        when('nothing is clicked', () => {
            CitySearchWrapper.setState({
              query: 'Berlin'
            });
            const eventObject = { target: { value: 'Berlin' }};
            CitySearchWrapper.find('.city').simulate('change', eventObject);
        });

        then('the event details will be collapsed', () => {
            expect(CitySearchWrapper.state('query')).toBe('Berlin');
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let EventWrapper;
        given('a user would like details on an event', () => {
            EventWrapper = shallow(<Event e ={mockData[0]}/>);
        });

        when('the user clicks an event', () => {
            EventWrapper.find("a").simulate("click");
        });

        then('the event details expand', () => {
            expect(EventWrapper.state('buttonTxt')).toBe("Hide");
        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        let EventWrapper;
        given('a user found the details they needed', () => {
            EventWrapper = mount(<Event e ={mockData[0]}/>);
            EventWrapper.setState({buttonTxt: 'Hide'})
        });

        when('the user clicks on an expanded event', () => {
            EventWrapper.find("a").simulate("click");
            EventWrapper.find("a").simulate("click");
        });

        then('the event will collapse to hide the details', () => {
            expect(EventWrapper.state('buttonTxt')).toBe("Show more");
         });
      });
   
});