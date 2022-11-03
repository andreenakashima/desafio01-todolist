import { CheckCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { TodosEmpty } from "./components/TodosEmpty";
import { TodosInfo } from "./components/TodosInfo";

export interface Todo {
	id: string;
	task: string;
	isCompleted: boolean;
}

export function App() {
	const [todos, setTodos] = useState<Todo[]>(() => {
		const storedTodos = localStorage.getItem("@desafio-todo-list");
		return storedTodos ? JSON.parse(storedTodos) : [];
	});

	const [task, setTask] = useState("");

	useEffect(() => {
		const todosJSON = JSON.stringify(todos);
		localStorage.setItem("@desafio-todo-list", todosJSON);
	}, [todos]);

	function addTodo(todo: Todo) {
		const newTodo = [...todos, todo];
		setTodos(newTodo);
	}

	function handleAddTodo(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const newTodo = {
			id: String(new Date().getTime()),
			task: task,
			isCompleted: false,
		};

		task && addTodo(newTodo);
		setTask("");
	}

	function handleCheckboxInput(id: string) {
		const updatedTodosList = todos.map((todo) => {
			return todo.id === id
				? { ...todo, isCompleted: !todo.isCompleted }
				: todo;
		});
		setTodos(updatedTodosList);
	}

	function handleDeleteTodo(id: string) {
		const updatedTodosList = todos?.filter((todo) => todo.id !== id);
		setTodos(updatedTodosList);
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		setTask(e.target.value);
	}

	const todosLength = todos.length;
	const hasTodos = todos.length > 0;
	const remainingTodos = todos.filter((todo) => todo.isCompleted).length;

	return (
		<>
			<Header />

			<main className="h-screen bg-zinc-800">
				<div className="mx-auto md:w-1/2">
					<form className="flex gap-2 pt-8" onSubmit={handleAddTodo}>
						<input
							className="w-full rounded-lg border border-neutral-700 bg-neutral-700 p-4 text-neutral-100 focus:border-indigo-500 focus:outline-none"
							type="text"
							onChange={handleInputChange}
							value={task}
							placeholder="Adicione uma nova tarefa"
						/>
						<button className="flex content-center items-center gap-2 rounded-lg bg-sky-600 p-4 font-bold text-white hover:bg-sky-500">
							Criar
							<CheckCircle size={20} weight="bold" />
						</button>
					</form>

					<TodosInfo
						todosLength={todosLength}
						remainingTodos={remainingTodos}
					/>

					{hasTodos ? (
						<ul>
							{todos.map((todo) => (
								<Todos
									todo={todo}
									key={todo.id}
									handleDeleteTodo={handleDeleteTodo}
									handleCheckboxInput={handleCheckboxInput}
								/>
							))}
						</ul>
					) : (
						<TodosEmpty />
					)}
				</div>
			</main>
		</>
	);
}
