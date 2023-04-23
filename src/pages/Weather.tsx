import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import useUserLocation from "../hooks/useUserLocation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { filterWeatherData, formatweatherDate } from "../utils/helpers";
import { useMemo } from "react";
import moment from "moment";

const API_KEY = "5f6664b9298dd70296547139b43a3f07";
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast`;

const Weather = () => {
	const { lon, lat } = useUserLocation();

	const fetchWeatherData = async () => {
		const { data } = await axios.get(
			`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
		);
		return data;
	};

	const { data, isLoading, isError } = useQuery(
		["weatherForecast"],
		fetchWeatherData,
		{
			onSuccess: (data) => console.log(data),
			enabled: lat && lon ? true : false,
			refetchOnWindowFocus: false,
		}
	);

	const filteredWeatherData = useMemo(
		() => filterWeatherData(data?.list),
		[data]
	);

	return (
		<Box sx={{ flexGrow: 1, mx: "auto" }}>
			<Typography variant="h4" sx={{ mb: 4 }}>
				Weatherf forecast in the next 5 days
			</Typography>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				{!isLoading &&
					!isError &&
					filteredWeatherData?.slice(0, 5).map((item: any, index: number) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<Card variant="outlined">
								<CardContent>
									<Typography variant="h6" sx={{ mb: 1 }}>
										{formatweatherDate(item.dt_txt)},{" "}
										{item.weather[0].description}{" "}
									</Typography>
									<Typography variant="body2">
										{parseInt(item.main?.temp).toString() + "°"} feels like{" "}
										{parseInt(item.main?.feels_like).toString() + "°"}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
			</Grid>
		</Box>
	);
};

export default Weather;
