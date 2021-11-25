import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<EventList /> component', () => {
  // test('render correct number of events', () => {
  //   const EventWrapper = shallow(<Event />);
  //   expect(EventWrapper.find('ul')).toHaveLength(1);
  //   expect(EventWrapper.find('li')).toHaveLength(2);
  // });

  test('show is set to true by default', () => {
    const EventWrapper = shallow(<Event e ={mockData[0]}/>);
    expect(EventWrapper.setState(state('show')).toBe(true));
  });

  
});