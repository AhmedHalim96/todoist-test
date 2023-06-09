import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useUserLocation from "../hooks/useUserLocation";

// should be in an env file or something not here
const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const UserWeather = () => {
	const { lat, lon } = useUserLocation();
	const fetchWeather = async () => {
		const res = await axios.get(
			`${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
		);
		return res.data;
	};

	const { data, isLoading, isError } = useQuery(
		["currentWeather"],
		fetchWeather,
		{
			enabled: lat && lon ? true : false,
			refetchOnWindowFocus: false,
		}
	);

	return (
		<Box>
			{data && !isLoading && !isError && (
				<Link to="/weather" style={{ textDecoration: "none" }}>
					<Typography color={"white"}>
						{data?.name}, {data?.weather?.[0].main}{" "}
						{parseInt(data?.main?.temp).toString() + "°"}
					</Typography>
				</Link>
			)}
		</Box>
	);
};

export default UserWeather;
