import axios from "axios";
import React, { useState } from "react";

const DeleteASong = (props) => {

  const [id, setId] = useState('');

  const deletePost = async (event, id) => {
    event.preventDefault(); 
    setId = id;
    let response = await axios.delete(`http://127.0.0.1:8000/api/music/${id}/`);
  };
  return (
  <div>
      <button onClick={() => deletePost(id)}>Delete</button>
  </div>
  );
};

export default DeleteASong;
