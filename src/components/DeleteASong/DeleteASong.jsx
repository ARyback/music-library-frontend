import axios from "axios";
import React, { useState } from "react";

const DeleteASong = (props) => {

  const deletePost = async (event, id) => {
    event.preventDefault(); 
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`);
  };
  return (
  <div>
      <button onClick={() => deletePost(id)}>Delete</button>
  </div>
  );
};

export default DeleteASong;
