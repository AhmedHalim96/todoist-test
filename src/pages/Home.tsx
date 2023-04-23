import { Box, Button, Stack } from "@mui/material";
import { Todo } from "../types/myTypes";
import TodoCard from "../components/TodoCard";
import { useEffect, useState } from "react";
import AddTodoModal from "../components/AddToddModal";
import { Add } from "@mui/icons-material";

const Home = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const [addTodoShow, setAddTodoShow] = useState(false);

	const addTodoHandler = (newTodo: Todo) => {
		setTodos([...todos, newTodo]);
		// addToLocal Storage
		localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
	};

	useEffect(() => {
		const storedTodos = localStorage.getItem("todos");
		if (storedTodos) {
			const parsedTodos = JSON.parse(storedTodos) as Todo[];
			setTodos(parsedTodos);
		}
	}, []);

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
