import { Box, Button, Stack } from "@mui/material";
import { Todo } from "../types/myTypes";
import TodoCard from "../components/TodoCard";
import { useState } from "react";
import AddTodoModal from "../components/AddToddModal";
import { Add } from "@mui/icons-material";

const Home = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const [addTodoShow, setAddTodoShow] = useState(false);

	const addTodoHandler = (todo: Todo) => {
		setTodos([...todos, todo]);
		// addToLocal Storage
	};

	return (
		<Box>
			{/* Add Todo button */}
			<Button
				variant="outlined"
				sx={{ mb: 2 }}
				startIcon={<Add />}
				onClick={() => setAddTodoShow(true)}
			>
				Add Todo
			</Button>

			<Stack gap={2}>
				{todos
					.slice()
					.reverse()
					.map((todo: Todo, index) => (
						<TodoCard item={todo} key={index} />
					))}
			</Stack>

			<AddTodoModal
				open={addTodoShow}
				handleClose={() => setAddTodoShow(false)}
				addTodo={addTodoHandler}
			/>
		</Box>
	);
};

export default Home;
