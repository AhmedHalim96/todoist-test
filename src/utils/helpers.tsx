import moment from "moment";

export const filterWeatherData = (list: any[]) => {
	const filteredList = list?.reduce((accumulator, item) => {
		const date = new Date(item.dt_txt);
		const day = date.getDate();

		if (
			accumulator.length === 0 ||
			!isSameDay(accumulator[accumulator.length - 1].dt_txt, item.dt_txt)
		) {
			accumulator.push(item);
		}

		return accumulator;
	}, []);

	return filteredList;
};

const isSameDay = (dateString1: string, dateString2: string) => {
	const date1 = new Date(dateString1);
	const date2 = new Date(dateString2);
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
};

export const formatweatherDate = (date: string) =>
	moment(date, "YYYY-MM-DD HH:mm:ss").format("MMMM Do");
