import City from './City';  

function Weather(props) {

    const data = props.cities.length === 0 ?
    (<p>You have not written any cities</p>) : (<div>
            {props.cities.map(el => (
                <City deleteWeather={props.deleteWeather} key={el.town} towns={el}/>
            ))}
        </div>)

    return(
        <div className='maincities'>
            <h2>All Cities</h2>
            {data}
        </div>
    )    
}

export default Weather;