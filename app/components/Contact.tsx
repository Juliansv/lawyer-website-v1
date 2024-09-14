const Contact = () => {
	return (
		<section
			id="contact"
			className="text-gray-600 body-font relative bg-slate-200 dark:bg-[#0a1118]"
		>
			<div className="container md:px-32 p-4 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 bg-black dark:bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative hidden md:flex">
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
						<div className="px-6">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
								DIRECCION
							</h2>
							<p className="mt-1">Calle 10 N° 82 CP (1900)</p>
						</div>
						<div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
								EMAIL
							</h2>
							<a className="text-blue-500 leading-relaxed">
								previsional.estudiointegral@gmail.com
							</a>
							<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
								TELEFONO
							</h2>
							<p className="leading-relaxed">0221 15-542-2323</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
					<h2 className=" text-2xl mb-1 font-medium title-font text-black dark:text-white">
						Reserve su turno o realice su consulta
					</h2>
					<p className="leading-relaxed mb-5 text-black dark:text-white">
						Aca puede ir algun texto o puede no ir nada
					</p>
					<div className="relative mb-4">
						<label
							htmlFor="name"
							className="leading-7 text-sm text-black dark:text-white"
						>
							Nombre y Apellido
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						></input>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="name"
							className="leading-7 text-sm text-black dark:text-white"
						>
							Telefono
						</label>
						<input
							type="number"
							id="phone"
							name="phone"
							className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						></input>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="email"
							className="leading-7 text-sm text-black dark:text-white"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						></input>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-black dark:text-white"
						>
							Escriba su consulta
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						></textarea>
					</div>
					<button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
						Enviar
					</button>
					<p className="text-xs text-black dark:text-white mt-3">
						Aca tambien se puede poner algo o nada
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
