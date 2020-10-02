import React, {Component} from 'react'
import record from './record.png'
import "./song.css"

export class Song extends Component{
    render(){
        return(
            <div className="hvr-bob song">
                <img className=" song-img" src={record}/>
            </div>
        )
    }
}