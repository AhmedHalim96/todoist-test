import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import TodoForm from "./TodoForm";
import { Todo } from "../types/myTypes";
import moment from "moment";

type PropTypes = {
	open: boolean;
	handleClose: () => void;
	addTodo: (todo: Todo) => void;
};

const AddTodoModal = (props: PropTypes) => {
	const submitHandler = (values: any) => {
		const todo: Todo = {
			title: values.title,
			description: values.description,
			checked: false,
			createdAt: moment().format(),
			archivedAt: null,
			finishedAt: null,
		};

		props.addTodo(todo);
		props.handleClose();
	};
	return (
		<Dialog onClose={props.handleClose} open={props.open} sx={{ p: 10 }}>
			<DialogTitle>Add a new todo</DialogTitle>
			<DialogContent>
				<TodoForm handleSubmit={submitHandler} />
			</DialogContent>
		</Dialog>
	);
};

export default AddTodoModal;
