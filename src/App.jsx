import logo from "./logo.svg";
import "./App.css";
import ky from "ky";
import { useState, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    if (password === "grayson") {
      printMovieData();
    }
  }, [password]);
  const printMovieData = async () => {
    const trendingMovieResponse = await ky
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=" +
          process.env.REACT_APP_TMDB_KEY
      )
      .json();
    setMovieList(trendingMovieResponse.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="https://image.tmdb.org/t/p/w185/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg" />
        <input
          type="text"
          onChange={(event) => setPassword(event.target.value)}
        />
      </header>
      <div className="posterWrapper">
        {movieList.slice(0, 5).map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
