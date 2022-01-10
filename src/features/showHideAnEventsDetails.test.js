import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user is on the main page', () => {
            let AppWrapper;
            when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        when('nothing is clicked', () => {

        });

        then('the event details will be collapsed', () => {
          
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('a user would like details on an event', () => {

        });

        when('the user clicks an event', () => {

        });

        then('the event details expand', () => {

        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('a user found the details they needed', () => {

        });

        when('the user clicks on an expanded event', () => {

        });

        then('the event will collapse to hide the details', () => {

         });
      });
   });
});