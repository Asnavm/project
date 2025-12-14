import React,{useState} from 'react'
import "./NavBar.css"
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/constants'



function NavBar() {
  const[query,setQuery]=useState('')
const [results,setResults]=useState([])
const[showSearch,setShowSearch]=useState(false)
  const handleSubmit=async(e)=>{
    const value=e.target.value
    setQuery(e.target.value)
    if(e.target.value.trim()===''){
      setResults([])
      return;
    }
    setShowSearch(true);
      const response= await axios.get(`/search/movie?api_key=${API_KEY}&query=${value}`)
setResults(response.data.results)
    
  }
 
  return (
    <div className='navbar'>
      <img className='logo' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'/>
      
      <div className='search-container' >
        <input type='text'
        placeholder='search'
        value={query}
        onChange={(e)=>handleSubmit(e)}/>
        
        <div className="nav-right">
        <i 
          className="fa fa-search search-icon"
          onClick={() => setShowSearch(!showSearch)}
        ></i>
      </div>
      </div>
      <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar'/>
      {showSearch && results.length>0 &&(
        <div className='nav-search-results'>
          {results.map((movie)=>(
            <div key={movie.id} className='nav-search-item'>
              <img src={movie.poster_path ? imageUrl+movie.poster_path:"https://via.placeholder.com/50x75"}
              alt={movie.title}
              />
              <p>{movie.title}</p>
              </div>
          ))}
        </div>
      )}
    </div>

  )
}

export default NavBar
