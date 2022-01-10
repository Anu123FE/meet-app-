Feature: Show and hide event details

Scenario: An event element is collapsed by default
Given the user is on the main page
When nothing is clicked
Then the event details will be collapsed

Scenario: User can expand an event to see its details
Given a user would like details on an event
When the user clicks an event
Then the event details expand

Scenario: User can collapse an event to hide its details
Given a user found the details they needed
When the user clicks on an expanded event
Then the event will collapse to hide the details