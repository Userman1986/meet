// src/App.js

import { useState, useEffect } from "react";
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';
import { extractLocations, getEvents } from './api';

const App = () => {

const[allLocations, setAllLocations] = useState([]);
const getAllLocations = async () => {
const allEvents = await gerEvents ();
const locations = extractLocations (allEvents[0].items);
const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);

const fetchData = async () => {
  const allEvents = await getEvents();
  setEvents(allEvents.slice(0, currentNOE));
}

return locations;
}

useEffect(() => {
  fetchData();
}, []);


useEffect (() => {
getAllLocations().then((locations) =>{
  setAllLocations(locations)
});



}, [] );



return (
  <div className="App">
    <CitySearch />
    <NumberOfEvents />
    <EventList events={events} />
  </div>
);
}

export default App;