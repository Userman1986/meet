import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { extractLocations, getEvents } from '../api';
import App from '../App';
import CitySearch from '../components/CitySearch';

describe('<CitySearch /> component', () => {
    let CitySearchComponent;
    beforeEach(() => {
        CitySearchComponent = render(<CitySearch allLocations={[]} setCurrentCity={() => { }} setInfoAlert={() => { }} />);
    });

    describe('<CitySearch /> integration', () => {

        test('renders suggestions list when the app is rendered.', async () => {
            /* 
            TODO: this is failing because the suggestions list is not opened when the website runs. npm start then check it yourself. Fix it in the UI then run the test again.
            */
            const user = userEvent.setup();
            const AppComponent = render(<App />);
            const AppDOM = AppComponent.container;

            const CitySearchDOM = AppDOM.querySelector('#city-search');
            const cityTextBox = within(CitySearchDOM).queryByRole('textbox');
            await user.click(cityTextBox);

            const allEvents = await getEvents();
            const allLocations = extractLocations(allEvents);

            const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem');
            expect(suggestionListItems.length).toBe(allLocations.length + 1);
        });

    });

    test('renders text input', () => {
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    });

    test('suggestions list is hidden by default', () => {
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    });

    test('renders a list of suggestions when city textbox gains focus', async () => {
        /* 
            TODO: this is failing because the suggestions list is not opened if you click on the city search input, run your website and check it yourself. Fix it in the UI then run the test again.
        */
        const user = userEvent.setup();
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.click(cityTextBox);
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).toBeInTheDocument();
        expect(suggestionList).toHaveClass('suggestions');
    });

    test('updates list of suggestions correctly when user types in city textbox', async () => {
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents[0].items);
        CitySearchComponent.rerender(<CitySearch allLocations={allLocations} setInfoAlert={() => { }} />);

        // user types "Berlin" in city textbox
        const user = userEvent.setup();
        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");

        // filter allLocations to locations matching "Berlin"
        const suggestions = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
        }) : [];

        // get all <li> elements inside the suggestion list
        const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
        expect(suggestionListItems).toHaveLength(suggestions.length + 1);
        for (let i = 0; i < suggestions.length; i += 1) {
            expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
        }
    });

    test('renders the suggestion text in the textbox upon clicking on the suggestion', async () => {
        const user = userEvent.setup();
        const allEvents = await getEvents();
        const allLocations = extractLocations(allEvents);
        CitySearchComponent.rerender(<CitySearch
            allLocations={allLocations}
            setCurrentCity={() => { }}
        />);

        const cityTextBox = CitySearchComponent.queryByRole('textbox');
        await user.type(cityTextBox, "Berlin");

        // the suggestion's textContent look like this: "Berlin, Germany"
        const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];

        await user.click(BerlinGermanySuggestion);

        expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
    });
});
