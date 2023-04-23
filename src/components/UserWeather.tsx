import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useUserLocation from "../hooks/useUserLocation";

// should be in an env file or something not here
const apiKey = "5f6664b9298dd70296547139b43a3f07";
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
			onSuccess: (data) => console.log(data),
			enabled: lat && lon ? true : false,
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
