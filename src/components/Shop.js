import React,{ useState,useEffect } from 'react'
import { ShopCon } from './shopCon'
import { SearchBar } from './searchbar'
import "./shop.css"

export const Shop=()=>{

    const [songs,setSongs] = useState([])
    const [searchInput,setInput] = useState('')

    useEffect(()=>{
        fetchSongs()
    },[])

    const fetchSongs= async()=>{
        let resp = await fetch('https://sonata-api.herokuapp.com/songs')
        let data = await resp.json()
        setSongs(data)
    }

    const filterSongs = () =>{
        return songs.filter(song => song.name.toLowerCase().includes(searchInput.toLowerCase()) || song.artist.name.toLowerCase().includes(searchInput.toLowerCase()))
    }

    const updateInput= (newInput) => setInput(newInput)

    return(
        <div className="main">
            <h1 className="title">🎶Welcome to DJ Greg's Record Shop🎶</h1>
            <hr/>
            <SearchBar searchInput={searchInput} updateInput={updateInput}/>
            <ShopCon songs={filterSongs()}/>
        </div>
    )
}