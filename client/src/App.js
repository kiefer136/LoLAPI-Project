import logo from './teemo.png';
import './App.css';
import { useEffect, useState } from 'react';
import { response } from 'express';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    )
  }, [])

  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return {
      value,
      onChange: handleChange
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log("summoner Name", summonerName.value);
    console.log("password", tagLine.value);
};

  const summonerName = useInput("");
  const tagLine = useInput("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Enter your Summoner Name & Tagline
        </p>
        <form onSubmit={submitForm}>
          <input name="summonerName" value={summonerName.value} defaultValue="Summoner Name" onChange={summonerName.onChange}></input>
          <input name="tagLine" value={tagLine.value} defaultValue="Tag Line" onChange={tagLine.onChange}></input>
          <button type="submit">Submit</button>
        </form> 
      </header>
    </div>
  );
}

export default App;
