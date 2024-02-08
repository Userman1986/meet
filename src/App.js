import React, { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [errorAlert, setErrorAlert] = useState("");
  const [infoAlert, setInfoAlert] = useState("");

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]); 

  const fetchData = async () => {
    try {
      const allEvents = await getEvents();
      let filteredEvents = allEvents[0]?.items || [];
      if (currentCity !== "See all cities") {
        filteredEvents = filteredEvents.filter(event => event.location.includes(currentCity));
      }
      setEvents(filteredEvents.slice(0, currentNOE));
      setAllLocations(extractLocations(allEvents));
      setErrorAlert(""); // Clear any previous error alerts
    } catch (error) {
      console.error("Error fetching data:", error);
      setErrorAlert("Error fetching data. Please try again."); 
    }
  };

  const handleInfoAlert = (message) => {
    setInfoAlert(message);
    setTimeout(() => {
      setInfoAlert(""); 
    }, 5000);
  };

  return (
    <div className="App">
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={handleInfoAlert} 
      />
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
      <EventList events={events} />
      {errorAlert && <div className="error">{errorAlert}</div>} {/* Render error alert if errorAlert is not empty */}
      {infoAlert && <div className="info">{infoAlert}</div>} {/* Render info alert if infoAlert is not empty */}
    </div>
  );
}

export default App;
