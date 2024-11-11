"use client";

import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import { useEffect, useState } from "react";
import { BriefcaseTwoIcon, NewsIcon, UserIcon } from "./Icons";

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
			className="z-10 flex gap-2 order-first lg:order-none lg:w-1/4 title-font font-medium items-center lg:items-center lg:justify-center md:mb-0"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 48 48"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="0.1"
				className="w-12 h-12 md:w-20 md:h-20 text-woodsmoke-txt dark:text-porcelain-txt dark:fill-white p-2 bg-alabaster-bg dark:bg-wards-bg-900 rounded-full"
			>
				<g data-name="07-law">
					<path d="M25 48a1 1 0 0 1-.447-.1l-16-8A1 1 0 0 1 8 39a3.8 3.8 0 0 1 5.1-3.573l7.873 3.473.5-.25A3.036 3.036 0 0 1 21 37.013 2.948 2.948 0 0 1 23.888 34h3.152c.634-.909 2.416-2 7.31-2 7.1 0 7.65 2.3 7.65 3v10a1 1 0 0 1-.868.991C38.607 46.327 25.967 48 25 48zm-14.909-9.573 15.118 7.559c1.506-.129 9.364-1.144 14.791-1.862v-8.981C39.847 34.95 38.86 34 34.35 34c-4.661 0-5.559 1.014-5.662 1.16a1 1 0 0 1-.988.84h-3.812a1.007 1.007 0 0 0 0 2H31v2h-7.112a2.878 2.878 0 0 1-.545-.053l-1.9.948a1 1 0 0 1-.85.02l-8.241-3.633a1.811 1.811 0 0 0-2.265 1.145zM28.7 35zm0 0zm0 0z" />
					<path d="M47 47h-6a1 1 0 0 1-1-1V33a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1zm-5-2h4V34h-4zM13 30a7.008 7.008 0 0 1-7-7 1 1 0 0 1 1-1h12a1 1 0 0 1 1 1 7.008 7.008 0 0 1-7 7zm-4.9-6a5 5 0 0 0 9.8 0z" />
					<path d="M18.081 23.394 13 11.539 7.919 23.394l-1.838-.788 6-14a1 1 0 0 1 1.838 0l6 14zM35 30a7.008 7.008 0 0 1-7-7 1 1 0 0 1 1-1h12a1 1 0 0 1 1 1 7.008 7.008 0 0 1-7 7zm-4.9-6a5 5 0 0 0 9.8 0z" />
					<path d="M40.081 23.394 35 11.539l-5.081 11.855-1.838-.788 6-14a1 1 0 0 1 1.838 0l6 14z" />
					<path d="M13 8h22v2H13zM24 6a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
					<path d="M23 5h2v25h-2z" />
					<path d="m16.707 38.707-1.414-1.414 8-8a1 1 0 0 1 1.414 0l4 4-1.414 1.414L24 31.414z" />
				</g>
			</svg>
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
