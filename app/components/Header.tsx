"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useEffect, useState } from "react";
import { BriefcaseTwoIcon, LogoIcon, NewsIcon, UserIcon } from "./Icons";

const Header = () => {
	return (
		<header className="body-font bg-alabaster-bg dark:bg-wards-bg-900 md:px-6 lg:px-20 h-auto">
			<MobileMenu />
			<DesktopMenu />
		</header>
	);
};

const DesktopMenu = () => {
	return (
		<div className="hidden container md:mx-auto md:flex md:justify-between slide-down">
			<Logo />
			<div className="flex grow gap-6 self-center text-lg place-content-center absolute w-full">
				<Link
					href="#service"
					className="hover:text-persian-blue-prim text-woodsmoke-txt dark:text-porcelain-txt dark:hover:text-azure-acc font-medium"
				>
					Servicios
				</Link>
				<Link
					href="#news"
					className="hover:text-persian-blue-prim text-woodsmoke-txt dark:text-porcelain-txt dark:hover:text-azure-acc font-medium"
				>
					Noticias
				</Link>
				<Link
					href="#contact"
					className="hover:text-persian-blue-prim text-woodsmoke-txt dark:text-porcelain-txt dark:hover:text-azure-acc font-medium"
				>
					Contacto
				</Link>
			</div>
			<ToggleTheme />
		</div>
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
			<div className="mx-auto flex flex-wrap md:hidden items-center min-h-20 justify-between px-4 slide-down">
				<Logo />
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
						} cursor-pointer dark:fill-porcelain-txt`}
					>
						<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
					</svg>
				</button>
			</div>
			<nav
				className={`${
					!isOpen ? "w-0 opacity-0" : "w-72 opacity-100"
				} transition-all duration-200 flex gap-2 flex-wrap text-base flex-col absolute h-[100svh] z-50 top-0 right-0 bg-alabaster-bg dark:bg-wards-bg-900`}
			>
				<div className={`${!isOpen ? "hidden" : ""} flex w-full p-6`}>
					<button onClick={() => setIsOpen(false)}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							id="close"
							className="cursor-pointer dark:fill-porcelain-txt md:hidden"
						>
							<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
						</svg>
					</button>
				</div>
				<div
					className={`${
						!isOpen ? "hidden" : ""
					} flex flex-col gap-2`}
					onClick={() => setIsOpen(false)}
				>
					<Links />
				</div>
				<div
					className={`${
						!isOpen ? "hidden" : ""
					} w-full text-center absolute bottom-10`}
				>
					<ToggleTheme />
				</div>
			</nav>
			<div
				className={`${
					!isOpen ? "hidden" : ""
				} z-20 bg-alabaster-bg opacity-15 backdrop-blur-sm h-screen w-full absolute top-0 right-0`}
				onClick={() => setIsOpen(false)}
			></div>
		</>
	);
};

const Logo = () => {
	return (
		<Link
			href="/"
			className="z-10 flex gap-2 order-first lg:order-none md:w-1/4 title-font font-medium items-center lg:items-center lg:justify-center md:mb-0"
		>
			<LogoIcon />
			<div className="text-xl md:text-3xl md:w-full text-woodsmoke-txt dark:text-porcelain-txt flex flex-col">
				Daniela Mateo
				<span className="text-sm md:text-xl w-full leading-relaxed text-woodsmoke-txt dark:text-porcelain-txt">
					Abogada
				</span>
			</div>
		</Link>
	);
};

const Links = () => {
	return (
		<>
			<Link
				href="#service"
				className=" text-woodsmoke-txt dark:text-porcelain-txt font-medium flex items-center m-auto gap-6 h-16 w-1/2"
			>
				<span className="w-6 h-6">
					<BriefcaseTwoIcon />
				</span>
				Servicios
			</Link>
			<Link
				href="#news"
				className=" text-woodsmoke-txt dark:text-porcelain-txt font-medium flex items-center m-auto gap-6 h-16 w-1/2"
			>
				<span className="w-6 h-6">
					<NewsIcon />
				</span>
				Noticias
			</Link>
			<Link
				href="#contact"
				className=" text-woodsmoke-txt dark:text-porcelain-txt font-medium flex items-center m-auto gap-6 h-16 w-1/2"
			>
				<span className="w-6 h-6">
					<UserIcon />
				</span>
                <span>
				    Contacto
                </span>
			</Link>
		</>
	);
};

export default Header;
