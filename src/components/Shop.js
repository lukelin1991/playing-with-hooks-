import { render } from '@testing-library/react'
import React from 'react'
import { ShopCon } from './shopCon'
import "./shop.css"
import { SearchBar } from './searchbar'

export class Shop extends React.Component{
    state={}


    render(){
        return(
            <div className="main">
                <h1 className="title">🎶Welcome to DJ Greg's Record Shop🎶</h1>
                <hr/>
                {/* Code below */}
            </div>
        )
    }
}