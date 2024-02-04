// src/App.js

import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { extractLocations } from './api';

const App = () => {
  const events = getEvents();
  const allLocations = extractLocations (events);
 return (
   <div className="App">
     <CitySearch allLocations={allLocations}/>
     <EventList />
   </div>
 );
}

export default App;