import logo from "./logo.svg";
import "./App.css";
import ky from "ky";
import { useState, useEffect } from "react";

function App() {
  const [password, setPassword] = useState("");
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
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input
          type="text"
          onChange={(event) => setPassword(event.target.value)}
        />
      </header>
    </div>
  );
}

export default App;
