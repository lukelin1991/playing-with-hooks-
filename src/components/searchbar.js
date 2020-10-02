import React, {Component} from 'react'

export class SearchBar extends Component{
    render(){
        return(
            <div className="search">
                <input className="form-control sb" placeholder="Search our songs" />
            </div>
        )
    }
}