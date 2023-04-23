import { createTheme } from "@mui/material";
const themeCreator = (isDarkMode: boolean) =>
	createTheme({
		palette: {
			mode: isDarkMode ? "dark" : "light",
		},
	});
export default themeCreator;
