import React from 'react';

const AddASong = (props) => {
    
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [releaseDate, setReleaseDate] = useState("");

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
        <div>test</div>
        );
}
 
export default AddASong;