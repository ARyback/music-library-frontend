import React, { useState } from 'react';

const AddASong = (props) => {
    
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

    async function addNewSong(song) {
        // let tempSongs = [...songs, song];
        // setSongs(tempSongs);
        const postSong = await axios.post('http://127.0.0.1:8000/api/music/');
        let tempSongs = [...songs, song]
        const response = await axios.get('http://127.0.0.1:8000/api/music/');
        setSongs(response.data)
    }

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            genre: genre,
            releaseDate: releaseDate,
        };
        props.addNewSongProperty(newSong);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" value={props.userInput} onChange={(e)=> setTitle(e)} />
            </div>
            <div>
                <label>Artist</label>
                <input type="text" value={props.userInput} onChange={(e)=> setArtist(e)} />
            </div>
            <div>
                <label>Album</label>
                <input type="text" value={props.userInput} onChange={(e)=> setAlbum(e)} />
            </div>
            <div>
                <label>Genre</label>
                <input type="text" value={props.userInput} onChange={(e)=> setGenre(e)} />
            </div>
            <div>
                <label>Release Date</label>
                <input type="text" value={props.userInput} onChange={(e)=> setReleaseDate(e)} />
            </div>
            <button type="submit">Add</button>
        </form>
        );
    }

    // return (
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <label>Title</label>
    //             <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)} />
    //         </div>
    //         <div>
    //             <label>Artist</label>
    //             <input type="text" value={artist} onChange={(event)=> setArtist(event.target.value)} />
    //         </div>
    //         <div>
    //             <label>Album</label>
    //             <input type="text" value={album} onChange={(event)=> setAlbum(event.target.value)} />
    //         </div>
    //         <div>
    //             <label>Genre</label>
    //             <input type="text" value={genre} onChange={(event)=> setGenre(event.target.value)} />
    //         </div>
    //         <div>
    //             <label>Release Date</label>
    //             <input type="text" value={releaseDate} onChange={(event)=> setReleaseDate(event.target.value)} />
    //         </div>
    //         <button type="submit">Add</button>
    //     </form>
    //     );
// }
 
export default AddASong;