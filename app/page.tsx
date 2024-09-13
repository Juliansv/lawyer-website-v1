import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<header className=" body-font">
				<div className="container mx-auto flex flex-wrap md:px-32 flex-col md:flex-row items-center min-h-36 justify-center md:min-h-44">
					<nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
						<Link
							href="#service"
							className="mr-5 hover:text-gray-500"
						>
							Servicios
						</Link>
						<Link href="#news" className="mr-5 hover:text-gray-500">
							Noticias
						</Link>
						<Link href="#contact" className="hover:text-gray-500">
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
							className="w-10 h-10 text-black p-2 bg-[#eef2f5] rounded-full"
							viewBox="0 0 24 24"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span className="ml-3 text-xl">Daniela Mateo</span>
					</Link>
					<div className="lg:w-2/5 lg:justify-end ml-5 lg:ml-0 hidden md:inline-flex">
						<button className="mt-4 bg-green-500 h-10 w-28 rounded-md font-bold">
							Whatsapp
						</button>
					</div>
				</div>
			</header>
			<main>
				<section id="image-banner" className="">
					<div className="absolute justify-around z-10 px-4 flex flex-col min-h-96 md:h-[36rem] md:justify-center md:pl-72 md:gap-20">
						<div>
							<h1 className="text-4xl font-bold md:text-6xl">
								Abogada Previsional
							</h1>
							<p className=" text-xl pt-8 md:pt-4 md:text-2xl">
								Estudio juridico especializado en derecho de la
								seguridad social
							</p>
						</div>
						<div>
							<p className="text-xl md:text-2xl">
								No dudes en contactarnos:
							</p>
							<button className="mt-4 bg-green-500 h-10 w-28 rounded-md font-bold">
								Whatsapp
							</button>
						</div>
					</div>
					<div className="min-h-96 relative md:h-[36rem]">
						<Image
							src="/images/banner.jpg"
							alt="banner"
							fill={true}
							className="object-cover absolute opacity-25"
						/>
					</div>
				</section>
				<section id="service" className=" body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
							<h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 md:text-4xl">
								El objetivo es acompañarlo durante todo el
								desarrollo de la gestión
							</h2>
							<p className="lg:w-1/2 w-full leading-relaxed text-gray-300">
								Nos enfocamos en brindarle atención
								personalizada y mantenerlo informado
								permanentemente sobre el estado de su trámite.
								Los cambios legislativos, la multiplicidad de
								jurisdicciones y la excesiva burocracia, lo
								convierten en una rama poco accesible para el
								ciudadano común.
							</p>
						</div>
						<div className="flex flex-wrap -m-4 md:px-32">
							<div className="xl:w-1/3 md:w-1/2 p-4">
								<div className="border border-gray-200 p-6 rounded-lg md:min-h-[17rem]">
									<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-6 h-6"
											viewBox="0 0 24 24"
										>
											<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
										</svg>
									</div>
									<h2 className="text-lg  font-medium title-font mb-2">
										Asesoramiento Previsional
									</h2>
									<p className="leading-relaxed text-base">
										Brindar asesoramiento profesional en la
										temática previsional, evacuando sus
										dudas e inquietudes.
									</p>
								</div>
							</div>
							<div className="xl:w-1/3 md:w-1/2 p-4">
								<div className="border border-gray-200 p-6 rounded-lg md:min-h-[17rem]">
									<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-6 h-6"
											viewBox="0 0 24 24"
										>
											<circle
												cx="6"
												cy="6"
												r="3"
											></circle>
											<circle
												cx="6"
												cy="18"
												r="3"
											></circle>
											<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
										</svg>
									</div>
									<h2 className="text-lg  font-medium title-font mb-2">
										Gestión Eficiente
									</h2>
									<p className="leading-relaxed text-base">
										Tramitar su beneficio previsional, para
										que obtenga el mejor haber en el menor
										tiempo posible
									</p>
								</div>
							</div>
							<div className="xl:w-1/3 md:w-1/2 p-4">
								<div className="border border-gray-200 p-6 rounded-lg md:min-h-[17rem]">
									<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-6 h-6"
											viewBox="0 0 24 24"
										>
											<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
											<circle
												cx="12"
												cy="7"
												r="4"
											></circle>
										</svg>
									</div>
									<h2 className="text-lg  font-medium title-font mb-2">
										Cálculo Jubilatorio
									</h2>
									<p className="leading-relaxed text-base">
										Calcular su futura jubilación o si la
										misma ha sido correctamente liquidada.
									</p>
								</div>
							</div>
							<div className="xl:w-1/3 md:w-1/2 p-4 w-full">
								<div className="border border-gray-200 p-6 rounded-lg md:min-h-[17rem]">
									<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-6 h-6"
											viewBox="0 0 24 24"
										>
											<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
										</svg>
									</div>
									<h2 className="text-lg  font-medium title-font mb-2">
										Planificación Estratégica
									</h2>
									<p className="leading-relaxed text-base">
										Asesorar para planificar mejor su futuro
										retiro.
									</p>
								</div>
							</div>
							<div className="xl:w-1/3 md:w-1/2 p-4">
								<div className="border border-gray-200 p-6 rounded-lg md:min-h-[17rem]">
									<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-6 h-6"
											viewBox="0 0 24 24"
										>
											<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
										</svg>
									</div>
									<h2 className="text-lg  font-medium title-font mb-2">
										Reclamos Asistidos
									</h2>
									<p className="leading-relaxed text-base">
										Patrocinar a clientes en sus reclamos
										ante autoridades administrativas y
										judiciales.
									</p>
								</div>
							</div>
							<div className="xl:w-1/3 md:w-1/2 p-4">
								<div className="border border-gray-200 p-6 rounded-lg md:min-h-[17rem]">
									<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-6 h-6"
											viewBox="0 0 24 24"
										>
											<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
										</svg>
									</div>
									<h2 className="text-lg  font-medium title-font mb-2">
										Apoyo Integral
									</h2>
									<p className="leading-relaxed text-base">
										(PUAM) Pension universal para el adulto
										mayor, pension por fallecimiento,
										pension por discapacidad, pension madre
										de 7 hijos.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section
					id="news"
					className="text-gray-600 body-font bg-[#0a1118] "
				>
					<div className="container md:px-32 md:py-24 mx-auto p-4 py-10">
						<div className="flex flex-col">
							<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
								<h2 className="sm:w-2/5 text-white md:text-4xl font-medium title-font text-2xl mb-2 sm:mb-0">
									NOTICIAS
								</h2>
							</div>
						</div>
						<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
							<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
								<div className="rounded-lg h-64 overflow-hidden relative">
									<Image
										alt="content"
										fill={true}
										className="object-cover object-center h-full w-full absolute"
										src="/images/banner.jpg"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-white mt-5">
									Noticia 1
								</h2>
								<p className="text-base leading-relaxed mt-2 text-slate-200">
									Swag shoivdigoitch literally meditation
									subway tile tumblr cold-pressed. Gastropub
									street art beard dreamcatcher neutra,
									ethical XOXO lumbersexual.
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3">
									Leer mas
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
							<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
								<div className="rounded-lg h-64 overflow-hidden relative">
									<Image
										alt="content"
										fill={true}
										className="object-cover object-center h-full w-full absolute"
										src="/images/banner.jpg"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-white mt-5">
									Noticia 2
								</h2>
								<p className="text-base leading-relaxed mt-2 text-slate-200">
									Swag shoivdigoitch literally meditation
									subway tile tumblr cold-pressed. Gastropub
									street art beard dreamcatcher neutra,
									ethical XOXO lumbersexual.
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3">
									Leer mas
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
							<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
								<div className="rounded-lg h-64 overflow-hidden relative">
									<Image
										alt="content"
										fill={true}
										className="object-cover object-center h-full w-full absolute"
										src="/images/banner.jpg"
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-white mt-5">
									Noticia 3
								</h2>
								<p className="text-base leading-relaxed mt-2 text-slate-200">
									Swag shoivdigoitch literally meditation
									subway tile tumblr cold-pressed. Gastropub
									street art beard dreamcatcher neutra,
									ethical XOXO lumbersexual.
								</p>
								<a className="text-indigo-500 inline-flex items-center mt-3">
									Leer mas
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
				</section>
				<section id="" className="text-gray-600 body-font">
					<div className="container px-5 py-24 mx-auto">
						<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
							<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="sm:w-16 sm:h-16 w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
							</div>
							<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
								<p className="leading-relaxed text-2xl text-white">
                                Los trámites previsionales son largos, tediosos y  por los intereses comprometidos, generan ansiedad en nuestros clientes.
								</p>
							</div>
						</div>
						<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
							<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
								<p className="leading-relaxed text-2xl text-white">
                                Por tal motivo, mi compromiso es realizar todo cuanto esté a nuestro alcance para que el trámite demore lo menos posible.
								</p>
							</div>
							<div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="sm:w-16 sm:h-16 w-10 h-10"
									viewBox="0 0 24 24"
								>
									<circle cx="6" cy="6" r="3"></circle>
									<circle cx="6" cy="18" r="3"></circle>
									<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
								</svg>
							</div>
						</div>
						<div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
							<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="sm:w-16 sm:h-16 w-10 h-10"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
							</div>
							<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
								<p className="leading-relaxed text-2xl text-white">
                                Soy abogada  Especialistas en Jubilaciones,  mantener a mis clientes permanentemente informados acerca del estado de su gestión es una de las prioridades 
								</p>
							</div>
						</div>
					</div>
				</section>
				<section
					id="contact"
					className="text-gray-600 body-font relative bg-[#0a1118]"
				>
					<div className="container md:px-32 p-4 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
						<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative hidden md:flex">
							<iframe
								width="100%"
								height="100%"
								className="absolute inset-0"
								frameBorder="0"
								title="map"
								marginHeight={0}
								marginWidth={0}
								scrolling="no"
								src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=es&amp;q=Plaza%20Moreno%2C%20La%20Plata%2C%20Argentina&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
								style={{
									filter: "grayscale(0) contrast(1.2) opacity(0.7)",
								}}
							></iframe>
							<div className=" relative flex flex-wrap py-6 rounded shadow-md bg-white">
								<div className="lg:w-1/2 px-6">
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
										DIRECCION
									</h2>
									<p className="mt-1">
										Copiar direccion del estudio de Danielle
									</p>
								</div>
								<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
										EMAIL
									</h2>
									<a className="text-indigo-500 leading-relaxed">
										danielamateo@email.com
									</a>
									<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
										TELEFONO
									</h2>
									<p className="leading-relaxed">
										221 5544-5555
									</p>
								</div>
							</div>
						</div>
						<div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
							<h2 className=" text-2xl mb-1 font-medium title-font text-white">
								Reserve su turno
							</h2>
							<p className="leading-relaxed mb-5 text-white">
								Aca puede ir algun texto o puede no ir nada
							</p>
							<div className="relative mb-4">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-white"
								>
									Nombre y Apellido
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								></input>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="name"
									className="leading-7 text-sm text-white"
								>
									Telefono
								</label>
								<input
									type="number"
									id="phone"
									name="phone"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								></input>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="email"
									className="leading-7 text-sm text-white"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
								></input>
							</div>
							<div className="relative mb-4">
								<label
									htmlFor="message"
									className="leading-7 text-sm text-white"
								>
									Escriba su consulta
								</label>
								<textarea
									id="message"
									name="message"
									className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
								></textarea>
							</div>
							<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Enviar
							</button>
							<p className="text-xs text-white mt-3">
								Aca tambien se puede poner algo o nada
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className=" body-font">
				<div className="container px-32 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<a className="flex title-font font-medium items-center md:justify-start justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-10 h-10 text-black p-2 bg-white rounded-full"
							viewBox="0 0 24 24"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span className="ml-3 text-xl">Daniela</span>
					</a>
					<p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
						© 2024 Daniela Mateo —
						<a
							href="#"
							className="text-gray-600 ml-1"
							rel="noopener noreferrer"
							target="_blank"
						>
							@DanielaMateo
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<a className="text-gray-500">
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
						</a>
						<a className="ml-3 text-gray-500">
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
								<circle
									cx="4"
									cy="4"
									r="2"
									stroke="none"
								></circle>
							</svg>
						</a>
					</span>
				</div>
			</footer>
		</>
	);
}
