import logo from './teemo.png';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/header';

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
      <Header></Header>
      <div className='logo-wrapper-background'>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          Enter your Summoner Name & Tagline
        </h3>
        <form onSubmit={submitForm}>
          <input name="summonerName" value={summonerName.value} defaultValue="Summoner Name" onChange={summonerName.onChange}></input>
          <input name="tagLine" value={tagLine.value} defaultValue="Tag Line" onChange={tagLine.onChange}></input>
          <button type="submit">Submit</button>
        </form> 
        <h2>User PUUID: </h2>
        <p>{backendData}</p>
      </div>
    </div>
  );
}

export default App;
