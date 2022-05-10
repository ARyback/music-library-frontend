import React from "react";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SearchBar from "./components/SearchBar/SearchBar";
import MusicTable from "./components/MusicTable/MusicTable";
import React, { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  
  useEffect(() => {
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
  }, []);

  return 
    <div>
  


    </div>;
}

export default App;
