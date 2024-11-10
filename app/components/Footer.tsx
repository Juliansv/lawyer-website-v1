import Link from "next/link";

const Footer = () => {
	return (
		<footer className=" body-font dark:bg-black">
			<div className="container px-32 py-8 mx-auto flex items-center sm:flex-row flex-col">
				<a className="flex title-font font-medium items-center md:justify-start justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 48 48"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="0.1"
						className="w-14 h-14 text-woodsmoke-txt dark:text-porcelain-txt dark:fill-white p-2 bg-alabaster-bg dark:bg-wards-bg-900 rounded-full"
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
					<span className="ml-3 text-xl dark:text-white"></span>
				</a>
				<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
					2024 Daniela Mateo —
					<a
						href="#"
						className="text-gray-600 ml-1"
						rel="noopener noreferrer"
						target="_blank"
					>
						Estudio Provisional
					</a>
				</p>
				<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
					<Link
						href="https://www.facebook.com/people/Estudio-Previsional-Integral/61565100357558/"
						className="text-gray-500"
					>
						<svg
							fill="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
						</svg>
					</Link>
					{/* <a className="ml-3 text-gray-500">
						<svg
							fill="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
						</svg>
					</a>
					<a className="ml-3 text-gray-500">
						<svg
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<rect
								width="20"
								height="20"
								x="2"
								y="2"
								rx="5"
								ry="5"
							></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
						</svg>
					</a>
					<a className="ml-3 text-gray-500">
						<svg
							fill="currentColor"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="0"
							className="w-5 h-5"
							viewBox="0 0 24 24"
						>
							<path
								stroke="none"
								d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
							></path>
							<circle cx="4" cy="4" r="2" stroke="none"></circle>
						</svg>
					</a> */}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
