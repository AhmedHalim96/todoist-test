import React, { useEffect, useState } from "react";

const useUserLocation = () => {
	const [lat, setLat] = useState<number>();
	const [lon, setLon] = useState<number>();

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

	return {
		lat,
		lon,
	};
};

export default useUserLocation;
