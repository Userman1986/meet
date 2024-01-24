Meet App
Project Overview
The Meet App is a serverless, progressive web application developed with React, following a test-driven development (TDD) approach. It leverages the Google Calendar API to fetch and display upcoming events. This combination of serverless architecture and PWAs provides benefits such as easy scalability, offline support, and enhanced user experience.

User Stories

Feature 1: Filter Events By City
As a user, I want to see upcoming events from all cities by default.
As a user, I want to see suggestions when I search for a city.
As a user, I want to be able to select a city from the suggested list.
Feature 2: Show/Hide Event Details
As a user, I expect event details to be collapsed by default.
As a user, I want to expand an event to see its details.
As a user, I want to collapse an event to hide its details.
Feature 3: Specify Number of Events
As a user, I want to see 32 events by default if I haven't specified a number.
As a user, I want to change the number of events displayed.
Feature 4: Use the App When Offline
As a user, I want to see cached data when there's no internet connection.
As a user, I want to see an error when I change search settings (city, number of events) without internet.
Feature 5: Add an App Shortcut to the Home Screen
As a user, I want to install the Meet app as a shortcut on my device's home screen.
Feature 6: Display Charts Visualizing Event Details
As a user, I want to see a chart showing the number of upcoming events in each city.


Gherkin Scenarios
Feature 1: Filter Events By City

Given a user who hasn’t searched for a city
When they view upcoming events
Then events from all cities should be shown

Given a user searching for a city
When they type in the search bar
Then a list of suggestions should be displayed

Given a list of suggestions
When a user selects a city
Then events from that city should be shown

Feature 2: Show/Hide Event Details

Given an event element
When the user sees the event
Then the event details should be collapsed by default

Given a collapsed event
When the user clicks to expand
Then the event details should be visible

Given an expanded event
When the user clicks to collapse
Then the event details should be hidden

Feature 3: Specify Number of Events

Given a user who hasn’t specified a number
When they view upcoming events
Then 32 events should be shown by default

Given a user specifying a number
When they change the number of events displayed
Then the specified number of events should be shown

Feature 4: Use the App When Offline

Given an internet-connected user
When they view upcoming events
Then the data should be loaded from the internet

Given a user with cached data
When they view upcoming events offline
Then the cached data should be shown

Given a user changing search settings offline
When they try to change the city or number of events
Then an error message should be displayed


Feature 5: Add an App Shortcut to the Home Screen

Given a user accessing the Meet app
When they install the app on their device
Then a shortcut should be added to the home screen

Feature 6: Display Charts Visualizing Event Details

Given a user viewing upcoming events
When they explore the app
Then they should see a chart showing the number of events in each city

Installation and Usage
Clone the repository: git clone https://github.com/your-username/meet-app.git
Install dependencies: npm install
Run the app: npm start

Technologies Used
React
Google Calendar API
AWS Lambda
GitHub Pages
Service Worker
Jest and React Testing Library for testing
Chart.js for data visualization


Acknowledgments
The Meet App was developed as part of the achievement 4 project for the Full Stack Web Development course. It showcases the integration of serverless architecture, progressive web app features, and effective test-driven development practices.