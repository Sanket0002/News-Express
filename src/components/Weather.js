import React,{useState} from "react";

const Weather = () => {
  const apiKey = "a6333b7c37422511f451af43af7d45b9";
  const [weatherData, setweatherData] = useState({});
  const [City, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${City}&units=imperial&APPID=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setweatherData(data);
          setCity("");
        });
    }
  };
  const handleSearch = () => {
    getWeather(City);
  };

  return (
    <div className="main1">
    <div className="container1">
      <input
        className="input"
        placeholder="Enter City"
        onChange={(e) => setCity(e.target.value)}
        value={City}
        onKeyPress={getWeather}
      />
      <button type="button" class="btn btn-danger my-3 mx-3" onClick={handleSearch}>
        Search City
      </button>

      {typeof weatherData.main === "undefined" ? (
        <div >
          <h2 style={{color:'white'}}>
            Welcome to NewsExpress Weather<br/> Enter a City Name to Get Weather Update.
          </h2>
        </div>
      ) : (
        <div className="weather-data">
          <p className="city">{weatherData.name}</p>
          <p className="temp">{Math.round(weatherData.main.temp)}°F</p>
          <p className="weather">{weatherData.weather[0].main}</p>
        </div>
      )}
      {weatherData.cod === "404" ? <p> City Not Found</p> : <></>}
    </div>
    </div>
  );
};

export default Weather;
