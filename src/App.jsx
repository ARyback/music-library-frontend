import React, { useState, useEffect } from 'react';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";
import axios from "axios";

function App() {

  return (
    <div>
      <h1>Music Library</h1>
      <MusicTable />
      <h2>Add a Song</h2>
    </div>
    );
}

export default App;
