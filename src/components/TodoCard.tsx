import {
	Box,
	Card,
	CardContent,
	Checkbox,
	IconButton,
	Typography,
	colors,
} from "@mui/material";
import { Todo } from "../types/myTypes";
import {
	Archive,
	Delete,
	Edit,
	RemoveRedEye,
	Unarchive,
} from "@mui/icons-material";

type PropTypes = {
	item: Todo;
	viewTodo: () => void;
	editTodo: () => void;
	checkTodo: (checked: boolean) => void;
	deleteTodo: () => void;
	archiveTodo: () => void;
};

const TodoCard = (props: PropTypes) => {
	return (
		<Card variant="outlined" sx={{ maxWidth: 500, width: "100%" }}>
			<CardContent>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					flexWrap={"wrap"}
				>
					<Box display="flex" alignItems="center" gap={1}>
						<Checkbox
							checked={props.item.checked}
							onChange={(e) => props.checkTodo(e.target.checked)}
							inputProps={{ "aria-label": "controlled" }}
						/>
						<Typography
							variant="h6"
							sx={{
								cursor: "pointer",
								textDecoration: props.item.checked ? "line-through" : "",
								color: props.item.checked ? colors.grey[400] : "",
							}}
							onClick={props.viewTodo}
						>
							{props.item.title}
						</Typography>
					</Box>

					<Box display="flex">
						<IconButton title="View" onClick={props.viewTodo}>
							<RemoveRedEye />
						</IconButton>
						<IconButton onClick={props.editTodo} title="edit">
							<Edit />
						</IconButton>
						<IconButton onClick={props.deleteTodo} title="delete">
							<Delete />
						</IconButton>
						<IconButton
							onClick={props.archiveTodo}
							title={props.item.archivedAt ? "unarchive" : "archive"}
						>
							{props.item.archivedAt ? <Unarchive /> : <Archive />}
						</IconButton>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TodoCard;
