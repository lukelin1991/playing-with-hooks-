import React, {Component} from 'react'

export class SearchBar extends Component{
    handleChange=(event)=>{
        this.props.updateInput(event.target.value)
    }
    render(){
        return(
            <div className="search">
                <input className="form-control sb" placeholder="Search our songs" value={this.props.searchInput} onChange={this.handleChange}/>
            </div>
        )
    }
}