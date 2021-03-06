import React from 'react';
import { shallow ,  mount} from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';
import EventList from '../EventList';

describe('<CitySearch /> component', () => {
    let locations, CitySearchWrapper;
    beforeAll(() => {
      locations = extractLocations(mockData);
      CitySearchWrapper = shallow(<CitySearch locations={locations}/>);
    });

  test('render text input', () => {
    expect(CitySearchWrapper.find('.city')).toHaveLength(1);
  });

  test('renders a list of suggestions', () => {
    expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
  });

  test('renders text input correctly', () => {
    const query = CitySearchWrapper.state('query');
    expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
  });

  test('change state when text input changes', () => {
    const CitySearchWrapper = shallow(<CitySearch locations={locations}/>);
    CitySearchWrapper.setState({
      query: 'Berlin'
    });
    const eventObject = { target: { value: 'Berlin' }};
    CitySearchWrapper.find('.city').simulate('change', eventObject);
    expect(CitySearchWrapper.state('query')).toBe('Berlin');
  });

  test('render list of suggestions correctly', () => {
    const locations = extractLocations(mockData);
    const CitySearchWrapper = shallow(<CitySearch />);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(suggestions.length + 1);
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find('.suggestions li').at(i).text()).toBe(suggestions[i]);
    }
  });

  test('suggestion list match the query when changed', () => {
    CitySearchWrapper.setState({ query: '', suggestions: [] });
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "Berlin" },
    });
    const query = CitySearchWrapper.state("query");
    const filteredLocations = locations.filter((location) => {
      return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
    });
    expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
  });

  test("selecting a suggestion should change query state", () => {
    CitySearchWrapper.setState({
      query: 'Berlin'  });
    const suggestions = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.find('.suggestions li').at(0).simulate('click');
    expect(CitySearchWrapper.state("query")).toBe(suggestions[0]);
  });

  test("updateNumberOfEvents", () => {
     CitySearchWrapper.instance().updateNumberOfEvents(6);
    expect(CitySearchWrapper.state('events').length).toBe(6)
  });
  

});

describe('<CitySearch /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const CitySearchWrapper = mount(<CitySearch />);
    const CitySearchWrapperQueryState = CitySearchWrapper.state('query');
    expect(CitySearchWrapperQueryState).not.toEqual(undefined);
    expect(CitySearchWrapper.find(EventList).props().events).not.toEqual(undefined);
    // expect(CitySearchWrapper.find(EventList).props().events).toEqual();
    // CitySearchWrapper.unmount();
  });

  test('Will test something...', () => {
    const EventListWrapper = mount(<EventList events={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}  />);
    expect(EventListWrapper.find(EventList).props().events).not.toEqual(undefined);
  });

  test('App passes "suggestions" state as a prop to EventList', () => {
    const CitySearchWrapper = mount(<CitySearch />);
    const CitySearchWrapperQueryState = CitySearchWrapper.state('suggestions');
    CitySearchWrapper.setState({'query': 'Berlin'});
    expect(CitySearchWrapperQueryState).not.toEqual(undefined);
    expect(CitySearchWrapper.find(EventList).props().events).not.toEqual(undefined);
    CitySearchWrapper.unmount();
  });

  test('App loads a list of events by default on launch', () => {
    const CitySearchWrapper = mount(<CitySearch />);
    const CitySearchWrapperQueryState = CitySearchWrapper.state('events');
    expect(CitySearchWrapperQueryState).not.toEqual(undefined);
    expect(CitySearchWrapper.find(EventList).props().events).not.toEqual(undefined);
    CitySearchWrapper.unmount();
  });

});