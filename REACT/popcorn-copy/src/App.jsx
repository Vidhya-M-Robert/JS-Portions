import { useEffect, useRef, useState } from "react";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = "5a57dfda";

export default function App() {
   const [query, setQuery] = useState("");
  const [watched, setWatched] = useState([]);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const[error,setError] = useState("");
  const[selectedId,setSelectedId] = useState(null);
  const tempQuery = 'interstellar';
  // useEffect(function(){

  // fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`)
  //   .then((res) => res.json())
  //   .then((data) => setMovies(data.Search));
  // },[]);

// useEffect(function(){
//   console.log("After initial render");
// },[])

// useEffect(function(){
//   console.log("After every render");
// });
// console.log("During render");

// useEffect(function(){
//   console.log("As query state changes!")
// },[query]);


// Async Function
  useEffect( function (){
    async function fetchMovies(){
   try{ setIsloading(true);
    setError("");
    const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

    if(!res.ok) throw new Error("Oops something went wrong!");
    
    const data = await res.json();
    if(data.Response === 'False') throw new Error ("Movie not found!");
    setMovies(data.Search);
    // console.log(movies);  //returns empty array as it is in it's stale state
    console.log(data);} 
    catch(err){
      console.log(err.message);
      setError(err.message);
    }
    finally{
      setIsloading(false);
    }
    // here it returns 2 results because of the React's strict mode.(this is for identify if there are any problems with the effect)
  }
  if(!query.length < 3) {
    setMovies([]);
    setError('');
    return 
  }



  fetchMovies();
  },[query]);


  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        {/*explicit prop as an alternative for children */}

        {/* <Box element={<MovieList movies={movies}/>}/>
    <Box element={<><WatchedSummary watched={watched} />
           <WatchedMoviesList watched={watched} /> </> }/> */}

        <Box>
          {/* {isLoading ?<Loader /> : <MovieList movies={movies} />} */}
          {isLoading && <Loader/>} 
          {!isLoading && !error && <MovieList movies={movies}/>}
          {error && <ErrorMessage message={error}/>} 
        </Box>
        <Box>
          {
            selectedId ? <MovieDetail selectedId={selectedId} /> :
            <>
            <WatchedSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
          </>}
        </Box>
      </Main>
    </>
  );
}


function MovieDetail({selectedId}){
  return (
    <div class="details">{selectedId}</div>
  )
}

function Loader(){
  return <p className="loader">Loading...</p>
}

function ErrorMessage({message}){
  return(
    <p className="error">
      {message}
    </p>
  )
}

function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo /> {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>usePopcorn</h1>
    </div>
  );
}

function Search({query,setQuery}) {
  // useRef
  const inputEl = useRef(null)     //as it is a DOM element give null

  useEffect(function(){
    function callback(e){
      if(document.activeElement === inputEl.current)
        return;
      if(e.code === "Enter"){
        inputEl.current.focus()
        setQuery("")
      }
    }
    document.addEventListener("keydown", callback);
    return () => document.addEventListener("keydown",callback); 
  }, [])
   // manually 
    // useEffect(function(){
    //   const el = document.querySelector(".search");
    //   console.log(el);
    //   el.focus();
    // }, [])

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)} ref={inputEl}
    />
  );
}

function NumResults({ movies }) {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

function Main({ children }) {
  return <main className="main">{children}</main>;
}

function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
// explicit prop as an alternative for children

// function Box({ element }) {
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen((open) => !open)}
//       >
//         {isOpen ? "–" : "+"}
//       </button>
//       {isOpen && element}
//     </div>
//   );
// }

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

// function WatchedBox() {                                            almost similar to ListBox === (now) BOX , so making it reusable
//   const [watched, setWatched] = useState(tempWatchedData);
//   const [isOpen2, setIsOpen2] = useState(true);

//   return (
//     <div className="box">
//       <button
//         className="btn-toggle"
//         onClick={() => setIsOpen2((open) => !open)}
//       >
//         {isOpen2 ? "–" : "+"}
//       </button>
//       {isOpen2 && (
//         <>
//           <WatchedSummary watched={watched} />
//           <WatchedMoviesList watched={watched} />
//         </>
//       )}
//     </div>
//   );
// }

function Movie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}

function WatchedMoviesList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

function WatchedMovie({ movie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  );
}
