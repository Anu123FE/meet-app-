import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<EventList /> component', () => {
  test('show is set to true by default', () => {
    const EventWrapper = shallow(<Event e ={mockData[0]}/>);
    expect(EventWrapper.state('show')).toBe(true);

  });

  test('state should change on button Click', () => {
    const EventWrapper = shallow(<Event e ={mockData[0]}/>);
    EventWrapper.find("a").simulate("click");
    expect(EventWrapper.state('buttonTxt')).toBe("Hide");
    EventWrapper.find("a").simulate("click");
    expect(EventWrapper.state('buttonTxt')).toBe("Show more");
  });
  
});