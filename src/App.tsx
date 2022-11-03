import { CheckCircle, ClipboardText } from "phosphor-react";
import Logo from "./assets/Logo.png";

export function App() {
	return (
		<>
			<header className="flex h-52 items-center justify-center bg-neutral-900">
				<img src={Logo} alt="" />
			</header>

			<main className="h-screen bg-neutral-800">
				<div className="m-auto md:w-1/2">
					<form className="flex gap-2" action="">
						<input
							className="w-full rounded-lg border border-neutral-700 bg-neutral-700 p-4 text-neutral-100 focus:border-indigo-500 focus:outline-none"
							type="text"
							placeholder="Adicione uma nova tarefa"
						/>
						<button className="flex content-center items-center gap-2 rounded-lg bg-sky-600 p-4 font-bold text-white hover:bg-sky-500">
							Criar
							<CheckCircle size={20} weight="bold" />
						</button>
					</form>
				</div>

				<div className="m-auto md:w-1/2">
					<div className="mt-20 flex items-center justify-between border-b border-neutral-700 py-8">
						<p className="text-base font-bold text-sky-600">
							Tarefas criadas{" "}
							<span className="rounded-full bg-neutral-700 px-2 text-neutral-100">
								0
							</span>
						</p>
						<p className="text-base font-bold text-indigo-500">
							Concluídas{" "}
							<span className="rounded-full bg-neutral-700 px-2 text-neutral-100">
								0
							</span>
						</p>
					</div>
				</div>

				<div className="m-auto md:w-1/2">
					<div className="mt-20 flex flex-col items-center justify-center text-center text-base text-neutral-400">
						<ClipboardText size={56} />
						<p className="mt-8 font-bold">
							Você ainda não tem tarefas cadastradas.
						</p>
						<p>Crie tarefas e organize seus itens a fazer.</p>
					</div>
				</div>
			</main>
		</>
	);
}
