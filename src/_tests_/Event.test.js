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

  test('hidden is set to fault by default', () => {
    const EventWrapper = shallow(<Event events={mockData}/>);
    expect(EventWrapper.state('show')).toBe(false);
  });
});