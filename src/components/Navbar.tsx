import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import DarkThemeSwitch from "./DarkThemeSwitch";
import UserWeather from "./UserWeather";
import { Link } from "react-router-dom";
type PropTypes = {
	handleDarkMode: (isDark: boolean) => void;
};

const Navbar = (props: PropTypes) => {
	return (
		<AppBar component="nav">
			<Toolbar>
				<Box sx={{ flexGrow: 1 }}>
					<Link to="/" style={{ textDecoration: "none" }}>
						<Typography variant="h6" color="white" component="div">
							Todoist{" "}
						</Typography>
					</Link>
				</Box>
				<Box>
					<UserWeather />
				</Box>
				<Box>
					{/*Nav Items here  */}
					<DarkThemeSwitch
						onChange={(e) => props.handleDarkMode(e.target.checked)}
					/>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
