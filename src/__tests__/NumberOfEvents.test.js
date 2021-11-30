import NumberOfEvents from "../NumberOfEvents";
import { shallow, mount } from 'enzyme';


describe('<App /> component', () => {
    let NumberofEventsWrapper;
    beforeAll(() => {
       NumberofEventsWrapper = shallow(<NumberOfEvents />);
    });
     
    test('render CitySearch', () => {
      expect(NumberofEventsWrapper.find("div")).toHaveLength(1);
    });

      test('changes the state of Number Of Events correctly', () =>{
          const newValue = { target: { value: 10}};
          NumberofEventsWrapper.find('input').simulate('change', newValue);
          expect(NumberofEventsWrapper.find("input")).toHaveLength(1);
          expect(NumberofEventsWrapper.state('numberofevents')).toBe(10);
      })

      test('...', () => {

        const upFunc = (num) => num;
        const NumberofEventsWrapper = mount(<NumberOfEvents updateNumberOfEvents={upFunc}/>);
        NumberofEventsWrapper.instance().updateNumOfEvt({key: "Enter"});
        expect(NumberofEventsWrapper.state('numberofevents')).toBe(10)
      });
  });