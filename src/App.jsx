import React, { useState, useEffect } from 'react';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";
import FilterBar from './components/FilterBar/FilterBar';

function App() {

  return (
    <div>
      <h1>Music Library</h1>
      <FilterBar />
      <MusicTable />
      <h2>Add a Song</h2>
    </div>
    );
}

export default App;
