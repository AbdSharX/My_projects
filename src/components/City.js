import Sunfor from '../img/Sunforcities.png';
import Clouds from '../img/Cloudforcities.png';

function City(props) {
    return(
        <div  className="weathercard"> 
            <p><b>{props.towns.town}</b></p>
            <p>Temperature:{props.towns.temp}</p>
            <p>Feels like: {props.towns.feels}</p>
            {props.towns.temp >= 10 && <img src={Sunfor} />}
            {props.towns.temp < 10 && <img src={Clouds} />}
            <button className='del' typeof='button' onClick={() => props.deleteWeather(props.towns.town)}>Delete</button>
        </div>
    )
}

export default City;