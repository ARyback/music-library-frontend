import axios from "axios";
import React, { useState } from "react";

const UpdateASong = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await axios.update(`http://127.0.0.1:8000/api/music/${id}`, {
      title: title,
      artist: artist,
      album: album,
      genre: genre,
      release_date: releaseDate,
    });
    props.getAllSongs();
  };
  return <div></div>;
};

export default UpdateASong;