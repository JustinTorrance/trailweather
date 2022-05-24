import logo from './assets/sun.png';
import './App.css';

function App() {

  function getLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude
      fetchWeatherGrid(lat, long)
      console.log(lat, long)
    })
  }

  function fetchWeatherGrid(lat, long) {
    fetch(`https://api.weather.gov/points/${lat},${long}`)
      .then(response => response.json())
      .then(data => fetchForecast(data.properties.forecast));
  }

  function fetchForecast(endpoint) {
    fetch(endpoint)
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Trail<span className='h1-span'>Weather</span></h1>
        <h3>The weather forecast that moves with you</h3>
        <div>
          <button onClick={getLocation}>Get Coordinates</button>
        </div>

      </header>
    </div>
  );
}

export default App;
