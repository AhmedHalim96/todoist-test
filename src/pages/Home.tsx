import { Box, Stack } from "@mui/material";
import { Todo } from "../types/myTypes";
import TodoCard from "../components/TodoCard";

const arr: Todo[] = [
	{
		title: "helelo",
		createdAt: "",
		finishedAt: "",
		archivedAt: "",
		checked: false,
		description: "Description test",
	},
];
const Home = () => {
	return (
		<Box>
			<Stack>
				{arr.map((todo: Todo, index) => (
					<TodoCard item={todo} key={index} />
				))}
			</Stack>
		</Box>
	);
};

export default Home;
