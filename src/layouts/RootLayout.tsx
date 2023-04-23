import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import themeCreator from "../theme";
import { useMemo, useState } from "react";

const RootLayout = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const theme = useMemo(() => themeCreator(isDarkMode), [isDarkMode]);
	return (
		<ThemeProvider theme={theme}>
			<Navbar
				handleDarkMode={(isDarkMode: boolean) => setIsDarkMode(isDarkMode)}
			/>
			<Container sx={{ py: 10 }}>
				<Outlet />
			</Container>
			<CssBaseline />
		</ThemeProvider>
	);
};

export default RootLayout;
