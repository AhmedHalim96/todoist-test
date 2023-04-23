import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import DarkThemeSwitch from "./DarkThemeSwitch";
type PropTypes = {
	handleDarkMode: (isDark: boolean) => void;
};

const Navbar = (props: PropTypes) => {
	return (
		<AppBar component="nav">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					Todoist{" "}
				</Typography>
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
