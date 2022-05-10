import React, { useState, useEffect } from 'react';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";
import FilterBar from './components/FilterBar/FilterBar';
import AddASong from './components/AddASong/AddASong';

function App() {

  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div>
      <h1>Music Library</h1>
      <SearchBar userInput={userInput} setUserInput={setUserInput} handleChange={handleChange}/>
      <MusicTable userInput={userInput}/>
      <h2>Add a Song</h2>
      {/* <AddASong /> may use setuserInput and form stuff either here or locally */}
    </div>
    );
}

export default App;
