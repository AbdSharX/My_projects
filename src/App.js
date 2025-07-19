import Form from './components/Form';
import Weather from './components/Weather';
import Sun from './img/Sun.png';
import { useState } from 'react';
import City from './components/City';
import axios from 'axios'; 

function App() {
  const [cities, setCities] = useState([
  ])
  const [error, setError] = useState('')

  const getWeather = (city) => {
    const API = '38c64d6a823bcc6e13b6a67e8a467467';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;
    axios.get(url)
        .then(res => {
          setCities(cities => [{
            town: city,
            temp: res.data.main.temp,
            feels: res.data.main.feels_like
          }, ...cities],
        setError(error => [''])
        )
        })
        .catch(err => {
          setError(error => ['This city is not exist'])
        })
  }
    const deleteWeather = (city) => {
        const newWeather = cities.filter(el => {
         return  el.town !== city
    })
    setCities(newWeather);
    }
     
  return (
    <div className='foradap'>
      <img className="sun" src={Sun} />
      <Form getWeather={getWeather} error={error}/>
      <Weather cities={cities} deleteWeather={deleteWeather}/>
    </div>
  );
}

export default App;
