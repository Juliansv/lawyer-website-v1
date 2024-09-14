"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useEffect, useState } from "react";

const Header = () => {
	return (
		<header className="body-font bg-slate-100 dark:bg-black">
			<div className="container mx-auto flex flex-wrap md:px-32 md:flex-row items-center min-h-20 justify-between px-4 md:min-h-44">
				<Link
					href="#"
					className="flex gap-4 order-first lg:order-none lg:w-1/4 title-font font-medium items-center lg:items-center lg:justify-center md:mb-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						className="w-10 h-10 md:w-20 md:h-20 text-black dark:text-white p-2 bg-[#eef2f5] dark:bg-black rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
					<span className="text-xl md:text-3xl md:w-full dark:text-white">
						Daniela Mateo
					</span>
				</Link>
				<MobileMenu />
				<DesktopMenu />
			</div>
		</header>
	);
};

const Links = () => {
	return (
		<>
			<Link
				href="#service"
				className="md:mr-5 hover:text-gray-500 dark:text-white dark:hover:text-slate-500"
			>
				Servicios
			</Link>
			<Link
				href="#news"
				className="md:mr-5 hover:text-gray-500 dark:text-white dark:hover:text-slate-500"
			>
				Noticias
			</Link>
			<Link
				href="#contact"
				className="md:mr-5hover:text-gray-500 dark:text-white dark:hover:text-slate-500"
			>
				Contacto
			</Link>
		</>
	);
};

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "auto";
        }
    }, [isOpen]);

	return (
        <>
            <div className="md:hidden z-30">
                <button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        id="menu"
                        className={`${
                            isOpen && "opacity-0"
                        } cursor-pointer dark:fill-white`}
                    >
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </button>
                <nav
                    className={`${
                        !isOpen ? "w-0 opacity-0" : "w-72 opacity-100"
                    } transition-all duration-200 flex gap-2 lg:w-2/5 flex-wrap text-base md:ml-auto flex-col absolute h-[100svh] z-30 top-0 right-0 bg-white dark:bg-black`}
                >
                    <div className={`${!isOpen && "hidden"} flex w-full p-6`}>
                        <button onClick={() => setIsOpen(false)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                id="close"
                                className="cursor-pointer dark:fill-white md:hidden"
                            >
                                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${!isOpen && "hidden"} flex flex-col gap-4 items-center h-1/3 justify-evenly`}
                        onClick={() => setIsOpen(false)}
                    >
                        <Links />
                    </div>
                    <div className={`${!isOpen && "hidden"} w-full text-center absolute bottom-10`}>
                        <ToggleTheme />
                    </div>
                </nav>
            </div>
            <div className={`${!isOpen && "hidden"} z-20 bg-slate-100 opacity-15 backdrop-blur-sm h-screen w-full absolute top-0 right-0`} onClick={() => setIsOpen(false)}>

            </div>
        </>
	);
};

const DesktopMenu = () => {
	return (
		<div className="hidden md:flex md:flex-col md:gap-4">
			<div className="text-center">
				<ToggleTheme />
			</div>
			<div>
				<Links />
			</div>
		</div>
	);
};

export default Header;
