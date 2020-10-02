import React from 'react'

export const SearchBar=(props)=>{
    const {updateInput, searchInput} = props

    const handleChange=(event)=>{
        updateInput(event.target.value)
    }
        return(
            <div className="search">
                <input className="form-control sb" placeholder="Search our songs" value={searchInput} onChange={handleChange}/>
            </div>
        )
}