import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentDayInfo from "./CurrentDayInfo";

export default function Weather(props) {
	const [weatherData, setWeatherData] = useState({ ready: false });
	const [city, setCity] = useState(props.defaultCity);

	const handleResponse = (response) => {
		/* Set  the weather data to the response data */
		console.log(response.data);
		setWeatherData({
			ready: true,
			city: response.data.city,
			temperature: response.data.temperature.current,
			humidity: response.data.temperature.humidity,
			wind: response.data.wind.speed,
			description: response.data.condition.description,
			icon: response.data.condition.icon,
			date: new Date(response.data.time * 1000),
		});
	};

	const getCityInfoAPI = () => {
		/* Get  city info using OpenWeathermap API and call the callback with the result*/
		const apiKey = "f1c2f496bcd86te3664oae04037b4691";
		let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
		axios.get(apiUrl).then(handleResponse);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getCityInfoAPI();
	};

	const handleCityChange = (event) => {
		setCity(event.target.value);
	};

	if (weatherData.ready) {
		return (
			<div className="Weather">
				<form onSubmit={handleSubmit}>
					<div className="row">
						<div className="col-8">
							<input
								type="search"
								placeholder="Enter a city..."
								className="form-control search-input"
								onChange={handleCityChange}
							/>
						</div>
						<div className="col-4">
							<input type="submit" value="Search" className="btn btn-light" />
						</div>
					</div>
				</form>
				<CurrentDayInfo data={weatherData} />
			</div>
		);
	} else {
		getCityInfoAPI();
		return "Loading...";
	}
}
