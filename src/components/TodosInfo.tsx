interface TodosInfoProps {
	todosLength: number;
	remainingTodos: number;
}

export function TodosInfo({ remainingTodos, todosLength }: TodosInfoProps) {
	return (
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
	);
}
