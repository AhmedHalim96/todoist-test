import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import TodoForm from "./TodoForm";
import { Todo } from "../types/myTypes";
import moment from "moment";

type PropTypes = {
	open: boolean;
	handleClose: () => void;
	editTodo: (todo: Todo) => void;
	item: Todo | null;
};

const EditTodoModal = (props: PropTypes) => {
	const submitHandler = (values: any) => {
		const todo: Todo = {
			title: values.title,
			description: values.description,
			checked: props?.item?.checked || false,
			createdAt: props?.item?.createdAt || "",
			archivedAt: props?.item?.archivedAt || null,
			finishedAt: props?.item?.finishedAt || null,
		};

		props.editTodo(todo);
		console.log("edit", todo);
		props.handleClose();
	};
	return (
		<Dialog
			onClose={props.handleClose}
			open={props.open}
			fullWidth
			maxWidth="sm"
		>
			<DialogTitle>Edit todo</DialogTitle>
			<DialogContent>
				<TodoForm handleSubmit={submitHandler} initialValue={props?.item} />
			</DialogContent>
		</Dialog>
	);
};

export default EditTodoModal;
