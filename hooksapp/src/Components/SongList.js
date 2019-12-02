import React, { useState } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [ songs, setSongs ] = useState([
        { title: 'Song 1', id:1 },
        { title: 'Song 2', id:2 }
    ])

    const [ age, setAge ] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, { title:title, id: songs.length+1}])
    }

    const addAge = () => {
        setAge(age+1)
    }

    const songList = songs.map(song => {
        return(
            <li key= {song.id}> { song.title }</li>
        )
    })

    return ( 
        <div className='song-list'>
            <ul>
                { songList }
            </ul>
            <NewSongForm addSong={ addSong }/>
            <button onClick={ addAge }>Add 1 to Age: { age }</button>
        </div>
    );
}
 
export default SongList;