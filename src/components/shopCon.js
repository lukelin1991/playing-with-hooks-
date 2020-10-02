import React,{Component} from 'react'
import { Song } from './Song'

export class ShopCon extends Component{
    
    mapSongs=()=>{
        return this.props.songs.map(song => {
            return <Song song={song}/>
        })
    }
    render(){
        return(
            <div className="shop-con">
                <h2 className="title">Please enjoy our selection of music</h2>
                <div className="song-map">
                    {this.mapSongs()}
                </div>
            </div>
        )
    }
}