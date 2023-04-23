import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { Todo } from "../types/myTypes";
import TodoCard from "../components/TodoCard";
import { useEffect, useState } from "react";
import AddTodoModal from "../components/AddToddModal";
import { Add } from "@mui/icons-material";
import ViewTodoModal from "../components/ViewTodoModal";
import EditTodoModal from "../components/EditTodoModal";
import moment from "moment";

const Home = () => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const [addTodoShow, setAddTodoShow] = useState(false);
	const [viewTodoShow, setViewTodoShow] = useState(false);
	const [editTodoShow, setEditTodoShow] = useState(false);
	const [selectedTodo, setSelectedTodo] = useState(0);

	const addTodoHandler = (newTodo: Todo) => {
		setTodos([...todos, newTodo]);
		// addToLocal Storage
		localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
	};

	const editTodoHandler = (newTodo: Todo) => {
		const newTodos = [...todos];
		newTodos[selectedTodo] = newTodo;
		setTodos(newTodos);

		// addToLocal Storage
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	const checkTodoHandler = (checked: boolean, index: number) => {
		const newTodos = [...todos];
		newTodos[index].checked = checked;
		if (checked)
			newTodos[index].finishedAt = moment().format("dddd, MMMM D, YYYY h:mm A");
		else newTodos[index].finishedAt = null;

		setTodos(newTodos);
		// addToLocal Storage
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	const deleteTodoHandler = (index: number) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
		// addToLocal Storage
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	const archiveTodoHandler = (index: number) => {
		const newTodos = [...todos];
		if (!newTodos[index].archivedAt)
			newTodos[index].archivedAt = moment().format("dddd, MMMM D, YYYY h:mm A");
		else newTodos[index].archivedAt = null;
		setTodos(newTodos);
		// addToLocal Storage
		localStorage.setItem("todos", JSON.stringify(newTodos));
	};

	// getting stored todos
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
				{todos.map((todo: Todo, index) => {
					if (todo.archivedAt) return;
					return (
						<TodoCard
							item={todo}
							key={index}
							viewTodo={() => {
								setSelectedTodo(index);
								setViewTodoShow(true);
							}}
							editTodo={() => {
								setSelectedTodo(index);
								setEditTodoShow(true);
							}}
							checkTodo={(checked: boolean) => {
								checkTodoHandler(checked, index);
							}}
							deleteTodo={() => deleteTodoHandler(index)}
							archiveTodo={() => archiveTodoHandler(index)}
						/>
					);
				})}
			</Stack>

			{/* Archived */}

			{todos.length !== 0 && (
				<Box py={2}>
					<Typography sx={{ mb: 2 }} variant="h6">
						Archived
					</Typography>
					<Stack gap={2}>
						{todos.map((todo: Todo, index) => {
							if (!todo.archivedAt) return;
							return (
								<TodoCard
									item={todo}
									key={index}
									viewTodo={() => {
										setSelectedTodo(index);
										setViewTodoShow(true);
									}}
									editTodo={() => {
										setSelectedTodo(index);
										setEditTodoShow(true);
									}}
									checkTodo={(checked: boolean) => {
										checkTodoHandler(checked, index);
									}}
									deleteTodo={() => deleteTodoHandler(index)}
									archiveTodo={() => archiveTodoHandler(index)}
								/>
							);
						})}
					</Stack>
				</Box>
			)}

			<AddTodoModal
				open={addTodoShow}
				handleClose={() => setAddTodoShow(false)}
				addTodo={addTodoHandler}
			/>
			<ViewTodoModal
				open={viewTodoShow}
				handleClose={() => setViewTodoShow(false)}
				item={todos[selectedTodo]}
			/>
			<EditTodoModal
				open={editTodoShow}
				handleClose={() => setEditTodoShow(false)}
				editTodo={editTodoHandler}
				item={todos[selectedTodo]}
			/>
		</Box>
	);
};

export default Home;
