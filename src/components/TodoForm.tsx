import { useState } from "react";
import { Todo } from "../types/myTypes";
import {
	Box,
	Button,
	FormControl,
	Input,
	InputLabel,
	Stack,
	TextField,
	TextareaAutosize,
} from "@mui/material";

type PropTypes = {
	handleSubmit: (values: {}) => void;
	initialValue?: Todo | null;
};
const TodoForm = (props: PropTypes) => {
	const [title, setTitle] = useState(props.initialValue?.title || "");
	const [description, setDescription] = useState(
		props.initialValue?.description || ""
	);

	return (
		<Box pt={1}>
			<Stack
				component={"form"}
				gap={2}
				onSubmit={(e) => {
					e.preventDefault();
					props.handleSubmit({
						title,
						description,
					});
				}}
			>
				<TextField
					label="Title"
					name="title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					margin="normal"
					variant="outlined"
					fullWidth
				/>
				<TextareaAutosize
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					id="description"
					aria-describedby="Todo descrioption"
					placeholder="Description"
					minRows={6}
					style={{ width: "100%", marginTop: 10, padding: ".5rem" }}
				/>

				<Button variant="contained" type="submit">
					Submit
				</Button>
			</Stack>
		</Box>
	);
};

export default TodoForm;
