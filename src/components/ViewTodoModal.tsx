import {
	Box,
	Dialog,
	DialogContent,
	DialogTitle,
	Stack,
	Typography,
} from "@mui/material";
import { Todo } from "../types/myTypes";

type PropTypes = {
	open: boolean;
	handleClose: () => void;
	item: Todo | null;
};

const ViewTodoModal = (props: PropTypes) => {
	return (
		<Dialog onClose={props.handleClose} open={props.open} sx={{ p: 10 }}>
			<DialogTitle>{props.item?.title}</DialogTitle>
			<DialogContent>
				<Box minWidth={"300px"}>
					<Stack gap={1}>
						<Typography variant="body2">{props?.item?.description}</Typography>
						<Typography variant="caption">
							Created at: {props?.item?.createdAt}
						</Typography>
						{props?.item?.checked && (
							<Typography variant="caption">
								Finished at: {props.item.finishedAt}
							</Typography>
						)}

						{props?.item?.archivedAt && (
							<Typography variant="caption">
								archivedAt at: {props.item.archivedAt}
							</Typography>
						)}
					</Stack>
				</Box>
			</DialogContent>
		</Dialog>
	);
};

export default ViewTodoModal;
