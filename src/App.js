// src/App.js

import { useState, useEffect } from "react";
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { extractLocations, getEvents } from './api';

const App = () => {

const[allLocations, setAllLocations] = userState([]);
const getAllLocations = async () => {
const allEvents = await gerEvents ();
const locations = extractLocations (allEvents[0].items);

return locations;
}


useEffect (() => {
getAllLocations().then((locations) =>{
  setAllLocations(locations)
});



}, [] );



 return (
   <div className="App">
     <CitySearch allLocations={allLocations}/>
     <EventList />
   </div>
 );
}

export default App;