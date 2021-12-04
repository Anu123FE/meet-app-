import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';


describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
     AppWrapper = shallow(<App />);
  });
   
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(0);
  });

  test('specify the number of events', () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(0);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
});

describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppLocationState = AppWrapper.state('locations');
    expect(AppLocationState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationState);
    AppWrapper.unmount();
  });
});