// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';


=======
import { getEvents } from './api';
>>>>>>> parent of 289f42b (revert)
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");


  useEffect(() => {
    fetchData();
<<<<<<< HEAD
  }, [currentCity, currentNOE]);
=======
  }, [currentCity, currentNOE]); 

  const fetchData = async () => {
    try {
      const allEvents = await getEvents();
      const extractedEvents = allEvents[0].items || []; 
      setEvents(extractedEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(filteredEvents)); 
      setErrorAlert(""); 
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorAlert("Error fetching data. Please try again."); 
    }
  };

  const extractLocations = (events) => {
    const extractedLocations = events.map((event) => event.location);
    const locations = [...new Set(extractedLocations)];
    return locations;
  };
>>>>>>> parent of 289f42b (revert)

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

 

  return (
    <div className="App">
     
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} />
    
      <EventList events={events}/>
    </div>
  );
}

export default App;