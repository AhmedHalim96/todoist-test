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
	viewTodo: () => void;
	editTodo: () => void;
	checkTodo: (checked: boolean) => void;
	deleteTodo: () => void;
	archiveTodo: () => void;
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
						onChange={(e) => props.checkTodo(e.target.checked)}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<Typography
						variant="h6"
						sx={{ cursor: "pointer" }}
						onClick={props.viewTodo}
					>
						{props.item.title}
					</Typography>
					<Box display="flex">
						<IconButton onClick={props.editTodo}>
							<Edit />
						</IconButton>
						<IconButton onClick={props.deleteTodo}>
							<Delete />
						</IconButton>
						<IconButton onClick={props.archiveTodo}>
							<Archive />
						</IconButton>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};

export default TodoCard;
