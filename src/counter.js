import React, {useState} from 'react'
import './counter.css'


let quotes = ["Stop that!", "Don't you dare!", "...please stop.", "Please no. God, please", "That's it! You're gonna get it"]


const Counter = ()=>{
  
  const [count, setCount] = useState(0)
  let randomIndex = Math.floor(Math.random() * quotes.length)
    return(
      <div className='container'>
          <h1>Don't Press the Button</h1>
          <button onClick={()=> setCount(count+1)}><img src={require('./Untitled.png')}/></button>
          <h2> You've broken the rules {count} times</h2>
          <p>{count === 0? "":quotes[randomIndex]}</p>
          
      </div>
    )
}

// I was surprised that a new quote rendered everytime I pressed the button
// Using the useState API actually re-renders the entire component so there was no need for a function linking the button to the quotes array


export default Counter