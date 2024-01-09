import logo from './teemo.png';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([""]);

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

    fetch(`/api?summonerName=${summonerName.value}&tagLine=${tagLine.value}`).then(
      response => response.json()
    ).then(
      data => {
        let dataParsed = JSON.parse(data.message);
        console.log(dataParsed);
        if (dataParsed !== null) {
          dataParsed = dataParsed.puuid
        } else {
          dataParsed = "Incorrect summoner name or tag";
        }
        setBackendData(dataParsed);
      }
    )
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
        <h2>User PUUID: </h2>
        <p>{backendData}</p>
      </header>
    </div>
  );
}

export default App;
