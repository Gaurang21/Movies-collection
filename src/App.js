import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Movies from './components/Movies/Movies';
import React,{useEffect,useState} from "react";
import fuzzball from 'fuzzball';


const App = () =>{
  const API_KEY = "7cbd7c91c30d0e0085bdbd96ab2ab51c";
  
  
  const [movies,setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(()=>{console.log("API called")

  getMovies();
  },[]);

  const getMovies = (async()=>{
    let data=[];
    for(let i=1;i<20;i++)
    {
    const API_REQUEST = "https://api.themoviedb.org/3/movie/popular?api_key=7cbd7c91c30d0e0085bdbd96ab2ab51c&language=en-US&page="+i;
    console.log(API_REQUEST);
    const response = await fetch(API_REQUEST);
    const request = await response.json();
    
    //console.log(request.results);
        for(let k=0;k<20;k++)
        {
          //console.log(request.results[k]);
          data.push(request.results[k]);
          
        }
    //console.log("faskgjhasjlkgjlka",data);

    //console.log("Filtered movies",filteredMovies);
    }
    setMovies(data);//working
    //console.log("Movies",movies);
    setFilteredMovies(data);
    return data;
  });

  const submitHandler = ((e)=>{
    e.preventDefault();
    console.log("Searching for requested movie"+search);
    setFilteredMovies(movies.filter(mo =>  fuzzball.partial_ratio(search,mo.title)>70));
    console.log("Filtered movie:", filteredMovies);

  });

  const searchHandler=((e)=>{
    console.log(e.target.value);
    setSearch(e.target.value);
  });

  const clearHandler=((e)=>{
    e.preventDefault();
    setFilteredMovies(movies);
    setSearch('');
  });
  
  return(
    <div className="App">
      <header className="App-header">Movies Collection</header>
      <form onSubmit={submitHandler} className="search-form">
            <input onChange={searchHandler} className="search-bar" type="text" placeholder="Search for your movie" value={search}></input>
            <br></br>
            <button className="search-button">Search</button>
            <button onClick={clearHandler} className="clear-button">Clear Filter</button>
            <h4 >Searching ....{search}</h4>
      </form>
      <div className="movies">
      {
        filteredMovies.map(movie=>(
          <Movies key={movie.title} movie={movie}/>
        ))
      }
      </div>
    </div>
    
  );
}

export default App;
