import axios from "axios";
import React, { useState } from "react";

const AddASong = (props) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.post("http://127.0.0.1:8000/api/music/", {
      title: title,
      artist: artist,
      album: album,
      genre: genre,
      release_date: releaseDate,
    });
    props.getAllSongs();
  };

  return (
    <div className="center-form">
      <form className="form-container" onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Artist</label>
          <input
            type="text"
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
          />
        </div>
        <div>
          <label>Album</label>
          <input
            type="text"
            value={album}
            onChange={(event) => setAlbum(event.target.value)}
          />
        </div>
        <div>
          <label>Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />
        </div>
        <div>
          <label>Release Date</label>
          <input
            type="date"
            value={releaseDate}
            onChange={(event) => setReleaseDate(event.target.value)}
          />
        </div>
        <input type="Submit" />
      </form>
    </div>
  );
};

export default AddASong;
