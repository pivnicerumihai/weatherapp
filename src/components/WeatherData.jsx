import React from "react";
import Box from "@material-ui/core/Box"

const WeatherData = (props) => {

let imgSrc ;

switch(props.weather){
    case "Thunderstorm":
        imgSrc = "http://openweathermap.org/img/wn/11d@2x.png"
        break;
    case "Drizzle":
        imgSrc = "http://openweathermap.org/img/wn/09d@2x.png"
        break;
    case "Rain":
        imgSrc = "http://openweathermap.org/img/wn/10d@2x.png"
        break;
    case "Snow":
        imgSrc = "http://openweathermap.org/img/wn/13d@2x.png"
        break;
    case "Clear":
        imgSrc = "http://openweathermap.org/img/wn/01d@2x.png"
        break;
    case "Clouds":
        imgSrc="http://openweathermap.org/img/wn/02d@2x.png"
        break;
    case "Mist":
        imgSrc="http://openweathermap.org/img/wn/50d@2x.png"
        break;
    default:
        imgSrc=null;
    }
    return (
        <Box className="box" display="flex" justifyContent="space-around">
            <Box>{props.degree === Number ? null : <p><b>Degree:</b> <br/> {props.degree} &deg;C</p>}</Box>
    <Box >{props.weather === String ? null: <p><b>Weather:</b> <br/> {props.weather} <br/> <img src={`${imgSrc}`}/></p> }</Box>
    <Box >{props.description === String ?  null : <p><b>Description:</b> <br/>{ props.description }</p>}</Box>
        </Box>
    )
}

export default WeatherData;