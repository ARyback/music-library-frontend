import React, { useState, useEffect } from 'react';
import SearchBar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";
import AddASong from './components/AddASong/AddASong';
import './App.css'

function App() {

  const [userInput, setUserInput] = useState("");
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  

  return (
    <div>
      <h1 className="title-bar">Music Library</h1>
      <SearchBar userInput={userInput} setUserInput={setUserInput} handleChange={handleChange}/>
      <MusicTable userInput={userInput}/>
    </div>
    );
}

export default App;
