import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

// should be in an env file or something not here
const apiKey = "";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const UserWeather = () => {
	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();

	const fetchWeather = async () => {
		const res = await axios.get(
			`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`
		);
		return res.data;
	};

	const { data } = useQuery(["userWeather"], fetchWeather, {
		onSuccess: (data) => console.log(data),
		enabled: lat && lon ? true : false,
	});

	const showPosition = (position: GeolocationPosition) => {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		setLon(longitude);
		setLat(latitude);
	};

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(showPosition);
		} else {
			console.log("Geolocation is not supported by this browser.");
		}
	});

	return <>weather</>;
};

export default UserWeather;
