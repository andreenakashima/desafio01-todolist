import { ClipboardText } from "phosphor-react";

export function TodosEmpty() {
	return (
		<div className="mt-20 flex flex-col items-center justify-center text-center text-base text-neutral-400">
			<ClipboardText size={56} />
			<p className="mt-8 font-bold">Você ainda não tem tarefas cadastradas.</p>
			<p>Crie tarefas e organize seus itens a fazer.</p>
		</div>
	);
}
