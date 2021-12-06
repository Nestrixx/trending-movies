import logo from "./logo.svg";
import "./App.css";
import ky from "ky";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const printMovieData = async () => {
    const ditto = await ky
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=" +
          process.env.REACT_APP_TMDB_KEY
      )
      .json();
    console.log(ditto.results[0].poster_path);
  };
  printMovieData();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {counter}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={() => setCounter(counter + 1)}>
          increment
        </button>
      </header>
    </div>
  );
}

export default App;
