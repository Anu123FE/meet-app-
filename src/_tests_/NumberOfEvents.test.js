import NumberOfEvents from "../NumberOfEvents";
import { shallow } from 'enzyme';


describe('<App /> component', () => {
    let NumberofEventsWrapper;
    beforeAll(() => {
       NumberofEventsWrapper = shallow(<NumberOfEvents />);
    });
     
    test('render CitySearch', () => {
      expect(NumberofEventsWrapper.find("div")).toHaveLength(1);
    });

    test('trigger onChange', () => {
        expect(NumberofEventsWrapper.find("input")).toHaveLength(1);
       //simulate event onChange
      });
  });