import { render } from '@testing-library/react'
import React from 'react'
import { ShopCon } from './shopCon'
import "./shop.css"
import { SearchBar } from './searchbar'

export class Shop extends React.Component{
    state={
        songs: [],
        searchInput: ''
    }
    componentDidMount(){
        fetch('https://sonata-api.herokuapp.com/songs')
        .then(resp => resp.json())
        .then(data => this.setState({songs:data}))
    }

    filterSongs = () =>{
        return this.state.songs.filter(song => song.name.toLowerCase().includes(this.state.searchInput.toLowerCase()) || song.artist.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
    }

    updateInput= (newInput) =>{this.setState({searchInput: newInput})}

    render(){
        return(
            <div className="main">
                <h1 className="title">🎶Welcome to DJ Greg's Record Shop🎶</h1>
                <hr/>
                <SearchBar searchInput={this.state.searchInput} updateInput={this.updateInput}/>
                <ShopCon songs={this.filterSongs()}/>
            </div>
        )
    }
}