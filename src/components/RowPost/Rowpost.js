import React,{useEffect,useState} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovies(response.data.results)
    })
  },[])
  const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      }}

      const handleMovie=(id)=>{
        console.log(id);
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          console.log(response.data.results);
          if (response.data.results.length!==0) {
            setUrlId(response.data.results[0])
          }
          else{
            console.log('array empty');
            
          }
        })
        

      }
      
  return (
    <div className='row'>
      <h1>{props.title}</h1>
      <div className="posters">
        {movies.map((obj)=>
<img onClick={()=>handleMovie(obj.id)}
 key={obj.id}
 className={props.isSmall ?'smallposter' :'poster'} alt='Posters' src={`${imageUrl+obj.backdrop_path}`}/>
        
       
        )}   
      
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts}/>}
    </div>
  )
}

export default RowPost