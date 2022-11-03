import Logo from "../assets/Logo.png";

export function Header() {
	return (
		<header className="flex h-52 items-center justify-center bg-neutral-900">
			<img src={Logo} alt="" />
		</header>
	);
}
