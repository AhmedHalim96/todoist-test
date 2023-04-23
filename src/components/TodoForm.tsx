import { useState } from "react";
import { Todo } from "../types/myTypes";
import {
	Box,
	Button,
	FormControl,
	Input,
	InputLabel,
	Stack,
	TextareaAutosize,
} from "@mui/material";

type PropTypes = {
	handleSubmit: (values: {}) => void;
	initialValue?: Todo;
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
				<FormControl>
					<Input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						id="title"
						aria-describedby="Todo title"
						required
						placeholder="Title"
					/>
				</FormControl>
				<FormControl>
					<TextareaAutosize
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						id="description"
						aria-describedby="Todo descrioption"
						placeholder="Description"
						minRows={6}
					/>
				</FormControl>

				<Button variant="contained" type="submit">
					Submit
				</Button>
			</Stack>
		</Box>
	);
};

export default TodoForm;
