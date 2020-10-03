import React, {Component} from 'react'
import record from './record.png'
import "./song.css"

export const Song = ({ song }) => {
    const { name, artist } = song
    return(
        <div className="hvr-bob song">
            <img className=" song-img" src={record}/>
        </div>
    )
}