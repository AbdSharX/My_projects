import { useState } from 'react';

function Form(props) {
    const  [city, setCity] = useState('');
    const getWeather = (city) => {
            props.getWeather(city.trim())
            setCity('')
    }
    return(
        <form >
            <h1>Get the WEATHER</h1>
            <input placeholder="Enter your city" onChange={e => setCity(e.target.value)} value={city}/>
            {props.error && <p className='error'>{props.error}</p>}
            <button type="button" onClick={e => getWeather(city)} >Get Weather</button>
        </form>
    )
}

export default Form;