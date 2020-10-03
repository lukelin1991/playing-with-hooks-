import React from 'react'
import { Song } from './Song'

export const ShopCon = ({ songs }) => {
    const mapSongs = () => {
        return songs.map(song => {
            return <Song key={song.id} song={song}/>
        })
    }


    return(
        <div className="shop-con">
            <h2 className="title">Please enjoy our selection of music</h2>
            <div className="song-map">
                {mapSongs()}
            </div>
        </div>
    )
}