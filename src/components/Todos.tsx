import { Trash } from "phosphor-react";

import { Todo } from "../App";

interface TaskProps {
	todo: Todo;
	handleCheckboxInput: (id: string) => void;
	handleDeleteTodo: (id: string) => void;
}

export function Todos({
	todo,
	handleCheckboxInput,
	handleDeleteTodo,
}: TaskProps) {
	return (
		<li className="mb-4 flex items-start justify-between rounded-lg bg-neutral-700 p-4 text-base text-neutral-100">
			<div className="flex">
				<input
					className="form-checkbox mr-4 mt-1 h-6 w-6 rounded-full border-2 border-sky-600 bg-transparent text-indigo-500 hover:border-sky-700 hover:text-indigo-400 focus:outline-none"
					type="checkbox"
					id={todo.id}
					checked={todo.isCompleted}
					onChange={() => handleCheckboxInput(todo.id)}
				/>
				<label
					htmlFor={todo.id}
					className={todo.isCompleted ? "text-neutral-400 line-through" : ""}
				>
					{todo.task}
				</label>
			</div>
			<button
				className="mt-1 text-neutral-400 hover:text-red-600"
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<Trash size={24} />
			</button>
		</li>
	);
}
