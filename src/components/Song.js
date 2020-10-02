import React, {Component} from 'react'
import record from './record.png'
import "./song.css"

export class Song extends Component{
    render(){
        const {name, artist} = this.props.song
        return(
            <div className="hvr-bob song">
                <img className=" song-img" src={record}/>
                <p>Title: {name}</p>
                <p>Artist: {artist.name}</p>
            </div>
        )
    }
}