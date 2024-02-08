import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getEvents } from './api';
import App from './App';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container;
  });

  test('renders EventList', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });

  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });

  test('renders NumberOfEvents', () => {
    expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
  });
});

// Integration testing
describe('<App /> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const CitySearchInput = within(AppComponent.container).queryByRole('textbox');
    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(AppComponent.container).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);
    const allRenderedEventItems = within(AppComponent.container).queryAllByRole('listitem');

    const allEvents = await getEvents();
    console.log('All events:', allEvents);

    const berlinEvents = allEvents.filter(event => {
      console.log('Event location:', event.location);
      return event.location?.includes('Berlin');
    });
    console.log('Berlin events:', berlinEvents);

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);

    allRenderedEventItems.forEach(event => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });
});
