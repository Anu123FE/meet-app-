# Meet App

# Project Description 
This is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique that allows users to browse upcoming events happening in a certain city. The application uses the Google Calendar API to fetch upcoming events. It is a single page app which allows the users to input their desired city which then displays a list of suggestions based on the input, allowing the user to select a city from the suggestions displayed. The app gives the user the control to select the no. of events they like to be displayed too. Clicking on the "Show More" button for an event will display details of the vent and clicking on the "Hide" button will collapse the details.

Website published at:https://anu123fe.github.io/meet-app-/

# AWS Lambda functions
The details are held within the auth-server folder. This project makes use of three functions with AWS Lambda:

getAuthURL
getAccessToken
getCalendarEvents
getAuthURL (Step 1)
https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url
getAuthURL generates a Url for oAuth2 authentication with Google which includes a code to be used with the getAccessToken function.

getAccessToken (Step 2)
https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/token/{code}
getAccessToken is called using the code from getAuthURL in place of "{code}" in the URL. The function returns an access token which may be used to gain access to the Google Calendar API.

getCalendarEvents (Step 3)
https://hv2altwv0j.execute-api.us-east-1.amazonaws.com/dev/api/get-calendar-events/{accessToken} getCalendarEvents is called using the access token obtained from getAccessToken in place of "{accessToken}". A sucessful response will include JSON data containing a list of event objects from the CareerFoundry events API calendar.

# Testing
Unit testing and integration testing are performed using Jest which is a JavaScript testing framework. It focuses on simplicity and support for large web applications,which makes it ideal to be used on this app.
Jest-cucumber is also used here for testing and it runs on top on Jest. This enabled me to write a Jest test for each scenario, and then define Given , When , and Then step definitions inside of my Jest tests.

# Performance Monitoring
Atatus to peform performance monitoring for the app. Atatus is a full-stack observability tool that helps us identify the performance bottlenecks and helps us optimize our application at the right time.

# User Stories and Requirements

FEATURE 1: FILTER EVENTS BY CITY
User Story:
As a user, I should be able to filter events by city so that I can see the list of events that will take place in that city

A)	Scenario 1: 
When User has not searched for a city, show upcoming events in all cities
•	Given: the user opened the app 
•	When: user hasn’t searched for any city
•	Then: the user should see a list of all upcoming events from all cities

B)	Scenario 2: 
User should see a list of suggestions when they search for a city 
•	Given: the main page is open
•	When: user starts typing in the city textbox
•	Then: the user should see a list of cities (suggestions) that match what they have typed

C)	Scenario 3: User can select a city from the suggested list
•	Given: the user was typing a specific city name in the city text box and the list of suggested cities is showing
•	When: the user selects a city from the list
•	Then: their city should be changed to that city and the user should receive a list of upcoming events in that city


FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
User Story:
As a user, I should be able to show/hide an event’s details so that I can see/collapse the details of the said event

A)	Scenario 1: When an event element is collapsed by default
•	Given: user is on the main page
•	When: the event details are collapsed
•	Then: user should see the event elements

B)	Scenario 2: User can expand an event to see its details
•	Given: user is on the main page
•	When: the user clicks on the event
•	Then: the element will expand and the user will be able to see the event details

C)	Scenario 3: User can collapse an event to hide its details
•	Given: user saw the event details
•	When: the user clicks again on the event
•	Then: the event collapses and the details get hidden



FEATURE 3: SPECIFY NUMBER OF EVENTS
User Story:
As a user, I should be able to specify the number of events I want to see displayed, so that I can see those many or less events 

A)	Scenario 1: When user hasn’t specified a number, 32 is the default number
•	Given: user has opened the app and is on the main page
•	When: the user sees the elements
•	Then: there will be 32 displayed events

B)	Scenario 2: User can change the number of events they want to see
•	Given: User opened the app and is on the main page
•	When: the user inputs the number of events to be displayed
•	Then: the specified number of events will be displayed

FEATURE 4: USE THE APP WHEN OFFLINE
User Story:
As a user, I should be able to use the app offline so that I can use the app even if I do not have access to the internet

A)	Scenario 1: Show cached data when there’s no internet connection
•	Given: the user doesn’t have internet access
•	When: the user logs into the app
•	Then: the user will be able to see the last events she/he accessed while having internet access

B)	Scenario 2: Show error when user changes the settings (city, time range)
•	Given: the user doesn’t have internet access
•	When: the user changes the settings (city, time range)
•	Then: the user will get an error message


FEATURE 5: DATA VISUALIZATION
User Story:
As a user, I should be able to see a chart of upcoming events so that I can see the list of events in each city
A)	Scenario 1: Show a chart with the number of upcoming events in each city
•	Given: User opened the app and is on the main page
•	When: user clicks on the chart
•	Then: user will be able to see the chart showing upcoming events in each city

Screenshots Included:

Home Screen:
<img width="1458" alt="Home Screen-Loading List of Events By Default" src="https://user-images.githubusercontent.com/80176993/149637700-6cd44857-90f3-49f7-8b5b-6e6b01369e39.png">

Searching By Parameters Inputted:
<img width="1561" alt="Loading of results as per the location parameter and the number of events parameters" src="https://user-images.githubusercontent.com/80176993/149637450-a4bca004-b1b4-4030-8f5d-f69200348054.png">

"Show More" and "Hide" Features On Display:
<img width="1558" alt="Screen Shot 2022-01-15 at 4 07 48 PM" src="https://user-images.githubusercontent.com/80176993/149637778-a2c43658-f75a-48f4-8b72-896cb4e69803.png">

Alerts On Display:
<img width="1558" alt="Screen Shot 2022-01-15 at 4 07 48 PM" src="https://user-images.githubusercontent.com/80176993/151891131-d526e0f2-d67a-427a-a02d-fc39144f5155.png">

<img width="1345" alt="Screen Shot 2022-01-31 at 6 40 29 PM" src="https://user-images.githubusercontent.com/80176993/151891621-f4ce192e-b5d6-477c-a130-97a0c3dcc1ac.png">

<img width="1240" alt="Screen Shot 2022-01-31 at 6 39 23 PM" src="https://user-images.githubusercontent.com/80176993/151891643-7ca0db6f-fe19-4462-8b82-5d1129d08f85.png">
