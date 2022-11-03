import { CheckCircle, ClipboardText, Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Logo from "./assets/Logo.png";

interface Todo {
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
			<header className="flex h-52 items-center justify-center bg-neutral-900">
				<img src={Logo} alt="" />
			</header>

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
					<div className="mt-10 flex items-center justify-between border-b border-neutral-700 py-8">
						<p className="text-base font-bold text-sky-600">
							Tarefas criadas{" "}
							<span className="rounded-full bg-neutral-700 px-3 text-neutral-100">
								{todosLength}
							</span>
						</p>
						<p className="text-base font-bold text-indigo-500">
							Concluídas{" "}
							<span className="rounded-full bg-neutral-700 px-3 text-neutral-100">
								{remainingTodos} de {todosLength}
							</span>
						</p>
					</div>

					{hasTodos ? (
						<ul>
							{todos.map((todo) => (
								<li
									key={todo.id}
									className="mb-4 flex items-start justify-between rounded-lg bg-neutral-700 p-4 text-base text-neutral-100"
								>
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
											className={
												todo.isCompleted ? "text-neutral-400 line-through" : ""
											}
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
							))}
						</ul>
					) : (
						<div className="mt-20 flex flex-col items-center justify-center text-center text-base text-neutral-400">
							<ClipboardText size={56} />
							<p className="mt-8 font-bold">
								Você ainda não tem tarefas cadastradas.
							</p>
							<p>Crie tarefas e organize seus itens a fazer.</p>
						</div>
					)}
				</div>
			</main>
		</>
	);
}
