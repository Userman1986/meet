// CitySearch.js
import React, { useState, useEffect } from "react";

const CitySearch = ({ allLocations, setCurrentCity }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(allLocations);
  }, [allLocations]);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    const filteredLocations = value ? allLocations.filter((location) => {
      if (!location) return null; 
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    }) : [];
    setQuery(value);
    setSuggestions(filteredLocations);

   
   
   
  };

  const handleItemClicked = (event) => {
    const value = event.target.textContent;
    setQuery(value);
    setShowSuggestions(false); 
    setCurrentCity(value);
    
  };

  return (
    <div id="city-search">
      <input
        type="text"
        className="city"
        placeholder="Search for a city"
        value={query}
        onFocus={() => setShowSuggestions(true)}
        onChange={handleInputChanged}
      />
      {showSuggestions && query &&
        <ul className="suggestions">
          {suggestions.map((suggestion) => (
            <li onClick={handleItemClicked} key={suggestion}>{suggestion}</li>
          ))}
          <li key='See all cities' onClick={handleItemClicked}>
            <b>See all cities</b>
          </li>
        </ul>
      }
    </div>
  )
}

export default CitySearch;
