import Link from "next/link";
import ToggleTheme from "./ToggleTheme";

const Header = () => {
	return (
		<header className=" body-font bg-slate-100 dark:bg-black">
			<div className="container mx-auto flex flex-wrap md:px-32 flex-col md:flex-row items-center min-h-36 justify-center md:min-h-44">
				<nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
					<Link
						href="#service"
						className="mr-5 hover:text-gray-500 dark:text-white dark:hover:text-slate-500"
					>
						Servicios
					</Link>
					<Link
						href="#news"
						className="mr-5 hover:text-gray-500 dark:text-white dark:hover:text-slate-500"
					>
						Noticias
					</Link>
					<Link
						href="#contact"
						className="hover:text-gray-500 dark:text-white dark:hover:text-slate-500"
					>
						Contacto
					</Link>
				</nav>
				<Link
					href="#"
					className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 text-black dark:text-white p-2 bg-[#eef2f5] dark:bg-black rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="ml-3 text-xl dark:text-white">
						Daniela Mateo
					</span>
				</Link>
				<div className="lg:w-2/5 lg:justify-end ml-5 lg:ml-0">
					<ToggleTheme />
					<button className="mt-4 bg-green-500 h-10 w-28 rounded-md font-bold text-white hidden md:inline-flex">
						Whatsapp
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
