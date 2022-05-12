import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddASong from '../AddASong/AddASong';


const MusicTable = (props) => {
    
    const [songs, setSongs] = useState(null);

    function addNewSong(song) {
      let tempSongs = [...songs, song];
      setSongs(tempSongs);
    }

    useEffect(() => {
      getAllSongs();
    }, []);
  
    async function getAllSongs(){
      const response = await axios.get('http://127.0.0.1:8000/api/music/');
      setSongs(response.data)
    }

    return (
        <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
            {songs && songs
            .filter(song=> 
                song.title.toLowerCase().includes(props.userInput.toLowerCase()) ||
                song.artist.toLowerCase().includes(props.userInput.toLowerCase()) ||
                song.album.toLowerCase().includes(props.userInput.toLowerCase()) ||
                song.release_date.toLowerCase().includes(props.userInput.toLowerCase()) ||
                song.genre.toLowerCase().includes(props.userInput.toLowerCase()) 
            ? song : null) 
            // song=> === (song) => 
            // Build a complete table with filtered data by all WOW!
            .map((song)=> {
                return (
                    <tr>
                        <td>{song.title}</td>
                        <td>{song.artist}</td>
                        <td>{song.album}</td>
                        <td>{song.release_date}</td>
                        <td>{song.genre}</td>
                    </tr> 
                );
            })}
          <div><AddASong addNewSongProperty={addNewSong}/></div>
        </tbody>
      </table>
    );
}

export default MusicTable;