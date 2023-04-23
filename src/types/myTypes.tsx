export interface Todo {
	title: string;
	description: string;
	checked: boolean;
	createdAt: string;
	archivedAt: string | null;
	finishedAt: string | null;
}
