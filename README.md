Welcome to the myFlix client repository! This progressive web application (PWA) is built using React and follows a test-driven development (TDD) approach. It leverages the Google Calendar API to fetch upcoming events and offers a serverless architecture for scalability and cost-efficiency.

Table of Contents
Overview
Key Features
User Stories
Technical Requirements
Getting Started>
Installation
Usage
Contributing
License
Overview
Serverless architecture and PWAs (Progressive Web Apps) are at the forefront of modern web development. This project combines these concepts to create a web app that not only offers a responsive and feature-rich user experience but also benefits from serverless architecture's scalability and cost-effectiveness.

The myFlix client is built using a TDD technique, ensuring code quality and test coverage. It utilizes the Google Calendar API for event data and features data visualization components to provide users with insights into upcoming events and event genres.

Key Features
Filter Events by City: Users can filter events by city to view a list of events in a specific location.
Show/Hide Event Details: Event details can be expanded or collapsed to provide more or less information.
Specify Number of Events: Users can specify the number of events to display at once.
Use the App When Offline: The app can be used offline, displaying previously viewed events.
Add an App Shortcut to the Home Screen: Supported mobile devices can add a shortcut to the home screen for quick access.
Display Charts Visualizing Event Details: Visualizations include a scatterplot showing upcoming events in each city and a pie chart displaying event genre popularity.
User Stories
Feature 2: Show/Hide Event Details
User Story 1: As a user, I would like to be able to show event details so that I can see more information about an event.

Scenario 1:

Given I am on the main page
When I click on an event card
Then the event details should expand to show additional information about the event.
Scenario 2:

Given I am on the main page with event details expanded
When I click on the expanded event card
Then the event details should collapse to hide additional information about the event.
Feature 3: Specify Number of Events
User Story 2: As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

Scenario 1:

Given I am on the main page
When I select a number from a dropdown menu specifying the number of events to display
Then the app should display the selected number of events in the events list.
Feature 4: Use the App When Offline
User Story 3: As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

Scenario 1:

Given I am using the app online
When I view a list of events
Then the app should cache the events locally.
Scenario 2:

Given I am using the app offline
When I open the app
Then the app should display the locally cached events.
Feature 5: Add an App Shortcut to the Home Screen
User Story 4: As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

Scenario 1:

Given I am using a supported mobile device
When I visit the app in a web browser
Then the app should provide an option to add a shortcut to the home screen.
Scenario 2:

Given I have added the app shortcut to my home screen
When I tap the shortcut icon
Then the app should open in my web browser.
Feature 6: Display Charts Visualizing Event Details
User Story 5: As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Scenario 1:

Given I am on the main page
When I scroll down
Then I should see a scatterplot chart displaying the upcoming events in each city.
User Story 6: As a user, I would like to be able to see a chart visualizing the popularity of event genres so that I can understand the distribution of event genres.

Scenario 2:

Given I am on the main page
When I scroll down further
Then I should see a pie chart visualizing the popularity of event genres.
Technical Requirements
The app is built with React.
TDD (Test-Driven Development) is followed.
Google Calendar API and OAuth2 authentication flow are used.
Serverless functions (preferably AWS Lambda) are implemented for the authorization server.
The app's code is hosted in a GitHub repository.
Compatibility with modern web browsers, including Chrome