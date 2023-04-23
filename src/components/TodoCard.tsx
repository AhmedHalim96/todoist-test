import {
	Box,
	Card,
	CardContent,
	Checkbox,
	IconButton,
	Typography,
} from "@mui/material";
import { Todo } from "../types/myTypes";
import { Archive, Delete, Edit } from "@mui/icons-material";

type PropTypes = {
	item: Todo;
};

const TodoCard = (props: PropTypes) => {
	return (
		<Card variant="outlined">
			<CardContent>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					flexWrap={"wrap"}
				>
					<Checkbox
						checked={props.item.checked}
						// onChange={handleChange}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<Typography variant="h6">{props.item.title}</Typography>
					<Box display="flex">
						<IconButton>
							<Edit />
						</IconButton>
						<IconButton>
							<Delete />
						</IconButton>
						<IconButton>
							<Archive />
						</IconButton>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TodoCard;
