import { useEffect, useState } from "react";

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

const KEY = '5b697c6c';
export default function App() {

  /*
  //////////////////////////////////
  1.Here we learning useEffect to absorb side effects and render component on our suitability

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  
  useEffect(function () {
    fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`).then(res => res.json()).then(data => setMovies(data.Search))
  }, [])
  

  //here we have 2 param in useEffect first is async nature function and second is for dependencies here
  //[] means it will render only for first time means initial render and not every time
  //SIDE EFFECT=INTERACTION WITH OUTSIDE WORLD BY REACT COMPONENT
  //SIDE EFFECT IS ALLOWED IN EVENT HANDLERS AND SECOND IN USEEFFECT ONLY

  /////////////////////////////////////
  
  //2.ASYNC FUNCTION

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("interstellar");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function () {
    async function fetchMovies() {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
      const data = await res.json();
      setMovies(data.Search);
      setIsLoading(false)
    }
    fetchMovies()
  }, [query])
 
  //////////////////////////////////////
  
  //3.LOADING MESSAGE 
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("interstellar");
  const [isLoading, setIsLoading] = useState(false);


  useEffect(function () {
    async function fetchMovies() {
        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);
        if (!res.ok) throw new Error('Something went wrong with fetching Movies')
        const data = await res.json();
        setMovies(data.Search);
        setIsLoading(false)
 }
 fetchMovies()
  }, [query])
 
  
  ////////////////////////////////////////
  //4.ERROR HANDLING

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("indian");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("")

  useEffect(function () {
    async function fetchMovies() {
      try {

        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

        // One Error of network lost
        if (!res.ok) throw new Error('Something went wrong with fetching Movies')

        const data = await res.json();

        //Second error of not found any movie of u searched
        if (data.Response === 'False') throw new Error('Movie Not Found')


        setMovies(data.Search);
      } catch (err) {

        setError(err.message);
      } finally {
        setIsLoading(false)
      }
    }

    fetchMovies()
  }, [query])
  */
  ////////////////////////////////////////
  //4.Learn about useEffect in better way
  /*


  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("inception");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const tempQuery = 'interstellar';

  IV__1 ))
  //////////////
  //A.only execute one since it has empty array
  //not synchronised with anything
  useEffect(function () {
    console.log('A');
  }, [])

  //B.excutes on evry render of App component
  //synchronized with evryting
  useEffect(function () {
    console.log('B');
  })
  //C. a top level code so basically
  console.log('C');


  useEffect(function () {
    console.log('After Initial render');
  }, [])
  useEffect(function () {
    console.log('After every render');
  })

  //putting second param-means changes with query updating or saying synchronized with query.
  useEffect(function () {
    console.log('D');
  }, [query])


  console.log('During render');

  //IV-II



  useEffect(function () {
    async function fetchMovies() {
      try {

        setIsLoading(true);
        setError("")
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

        // One Error of network lost
        if (!res.ok) throw new Error('Something went wrong with fetching Movies')

        const data = await res.json();

        //Second error of not found any movie of u searched
        if (data.Response === 'False') throw new Error('Movie Not Found')



        setMovies(data.Search);
      } catch (err) {

        setError(err.message);
      } finally {
        setIsLoading(false)
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    fetchMovies()
  }, [query])

  */

  /////////////////////////////////////////
  // 5.Movie Selecting game

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [query, setQuery] = useState("inception");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  //
  function handleSelectMovie(id) {
    setSelectedId(selectedId => id === selectedId ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }



  useEffect(function () {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("")
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=${query}`);

        // One Error of network lost
        if (!res.ok) throw new Error('Something went wrong with fetching Movies')

        const data = await res.json();

        //Second error of not found any movie of u searched
        if (data.Response === 'False') throw new Error('Movie Not Found')

        setMovies(data.Search);

      } catch (err) {

        setError(err.message);
      } finally {
        setIsLoading(false)
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }

    fetchMovies()
  }, [query])





  return (
    <div>
      <Navbar >
        <Search query={query} setQuery={setQuery} />
        <NumResult movies={movies} />
      </Navbar>
      <Main>

        {/*  <Box element={<MovieList movies={movies} />} />
        <Box element={
          <>
            <WatchedMovieSummary watched={watched} />
            <WatchedMovieList watched={watched} />
          </>
        }
        />
      */}
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectMovie} />}
          {error && <ErrorMessage message={error} />}
        </Box >

        <Box >
          {
            selectedId ? <MovieDetails selectedId={selectedId} onCloseMovie={handleCloseMovie} /> :
              <>
                <WatchedMovieSummary watched={watched} />
                <WatchedMovieList watched={watched} />
              </>
          }

        </Box>
      </Main >
    </div >
  );
}

function Loader() {
  return <p className="loader">Loading...</p>
}

function ErrorMessage({ message }) {
  return <p className="error"><span>🚩</span>{message}</p>

}
function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  )
}

function Logo() {
  return <div className="logo">
    <span role="img">🍿</span>
    <h1>usePopcorn</h1>
  </div>
}

function NumResult({ movies, setMovies }) {
  return <p className="num-results">
    Found <strong>{movies.length}</strong> results
  </p>
}

function Search({ query, setQuery }) {
  return <input
    className="search"
    type="text"
    placeholder="Search movies..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />
}


function Main({ children }) {
  return (
    <main className="main">
      {children}
    </main>
  )
}


function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && (
        children
      )}
    </div>
  )
}

function MovieList({ movies, setMovies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  )
}

function Movie({ movie, onSelectMovie }) {

  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li >
  )
}

function MovieDetails({ selectedId, onCloseMovie }) {
  return (
    <>
      <div className='details'>{selectedId}</div>
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
    </>
  )
}

function WatchedMovieSummary({ watched }) {
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

  )
}


function WatchedMovieList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />))}
    </ul>)
}

function WatchedMovie({ movie }) {
  return (
    <li >
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
    </li>)
}