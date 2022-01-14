Feature: Specify Number of Events
 
Scenario: When user hasn’t specified a number, 10 is the default number
Given user has opened the app and is on the main page
When the user sees the elements
Then there will be 10 displayed events

Scenario: User can change the number of events they want to see
Given user opened the app and is on the main page
When the user inputs the number of events to be displayed
Then the specified number of events will be displayed
