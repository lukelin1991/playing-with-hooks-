import React, {useState,useEffect} from "react";


export default function App() {
  const [count,setCount] = useState(0)
  const [songs,setSongs] =useState([])
  const [searchInput,setSearchInput] =useState("")

  const fetchSongs = async () => {
    let resp = await fetch("https://sonata-api.herokuapp.com/songs")
    let data = await resp.json()
    setSongs(data)
    console.log(data)
  }

  const mapSongs = () => {
    return filterSongs().map(song=><div style={{padding: "10px"}} key={song.id}>title: {song.name} artist: {song.artist.name} <div><Rating/></div></div>)
  }
  const filterSongs = () => {
    let filteredArr = songs.filter(song => song.name.toLowerCase().includes(searchInput.toLowerCase()) || song.artist.name.toLowerCase().includes(searchInput.toLowerCase()))
    return filteredArr
    
  }
  


  const increment = () => setCount(prevState => prevState + 1)
  const decrement = () => setCount(prevState => prevState > 0? prevState - 1 : 0)
  const reset = () => setCount(0)
  const handleChange = (event) => setSearchInput(event.target.value)
  useEffect(()=>{
    fetchSongs()
   },[])

  return (
    <div className="App" style={{paddingLeft: "30px"}}>
      <h1>Songs</h1>
      <br/>
      <input placeholder="search songs" value={searchInput} onChange={handleChange}/>
      <div>
        {mapSongs()}
      </div>
      <div>{count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}


function Star(props) {
  

  return(
    <span style={{color: "grey"}} 
    onMouseEnter={(e)=> e.target.style.color = "black"}
    // onMouseLeave={(e) => e.target.style.color = "grey"}
    onClick={(e)=> e.target.style.color = "yellow"}
    >

      ★</span>
  )
}
// ★

function Rating() {
  //choosing desired star
  const [desiredStars,setDesiredStars] =useState(0)
  const findStar = (star) => console.log(star)
  const fiveStars = () => Array(5).fill(<Star/>)
  return(
    <div>
      {/* <Star starIdx={1} findStar={findStar}/>
      <Star starIdx={2}/>
      <Star starIdx={3}/>
      <Star starIdx={4}/>
      <Star starIdx={5}/> */}
      {fiveStars()}
    </div>
  )
}
