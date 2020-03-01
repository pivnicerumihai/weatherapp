import React, { useState } from "react";
import Container from "@material-ui/core/Container"
import WeatherData from "./WeatherData"
import Form from "./Form"
import City from "./City"
import axios from "axios";

const WeatherContainer = (props) => {

    const [apiResponse, setApiResponse] = useState({
        degree: Number,
        weather: String,
        description: String
    });

    const [city, setCity] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        const location = e.target.children[0].value;

        axios.get(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=be8b00b8613ea0e37b4d865a3f5b1d33`)
            .then(res => setApiResponse({
                degree: Math.round(res.data.main.temp - 273.15) * 10 / 10,
                weather: res.data.weather[0].main,
                description: res.data.weather[0].description
            }))
            .then(setCity(location + " Weather"))
            .catch((error) => {
                if (error) {
                    setCity("City does not exist. Please Try Again")
                }
            })



    }

    return (
        <Container className="container">
            <City>{city === null ? null : city.charAt(0).toUpperCase() + city.slice(1)}</City>

            <WeatherData
                degree={apiResponse.degree}
                weather={apiResponse.weather}
                description={apiResponse.description} />
            <Form
                click={handleSubmit}
            />
        </Container>
    )

}

export default WeatherContainer;