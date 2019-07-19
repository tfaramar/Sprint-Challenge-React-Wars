import React, { useState, useEffect } from 'react';
import './App.css';
import StarWarsPeople from './components/StarWarsPeople.js';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [people, setPeople] = useState([]);
  useEffect(() => {
      axios.get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data.results);
        setPeople(response.data.results);
      });
  }, []);
  
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map(data => (
        <StarWarsPeople name={data.name}
        birthyear={data.birth_year}
        mass={data.mass} />
      ))}
      
    </div>
  );
}

export default App;
