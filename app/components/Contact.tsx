const Contact = () => {
	return (
		<section
			id="contact"
			className="text-gray-600 body-font relative bg-alabaster-drk dark:bg-wards-bg-900"
		>
			{/* desktop */}
			<div className="container hidden md:px-32 p-4 py-24 mx-auto md:flex sm:flex-nowrap flex-wrap">
				<div className="lg:w-2/3 md:w-1/2 bg-gray-500 rounded-lg overflow-hidden sm:mr-10 p-10 items-end justify-start relative md:flex">
					<iframe
						width="100%"
						height="100%"
						className="absolute inset-0"
						frameBorder="0"
						title="map"
						marginHeight={0}
						marginWidth={0}
						scrolling="no"
						src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=-34.9045934,-57.9700218&ie=UTF8&t=&z=14&iwloc=B&output=embed"
						style={{
							filter: "grayscale(0) contrast(1.2) opacity(0.7)",
						}}
					></iframe>
					<div className=" relative flex flex-wrap py-6 rounded shadow-md bg-alabaster-bg">
						<div className="px-6">
							<h2 className="title-font font-semibold text-woodsmoke-txt tracking-widest text-xs">
								DIRECCION
							</h2>
							<p className="mt-1">Calle 10 N° 82 CP (1900)</p>
						</div>
						<div className="lg:w-1/2 px-4 mt-4 lg:mt-0">
							<h2 className="title-font font-semibold text-woodsmoke-txt tracking-widest text-xs">
								EMAIL
							</h2>
							<a className="text-boctonic-acc leading-relaxed">
								previsional.estudiointegral@gmail.com
							</a>
							<h2 className="title-font font-semibold text-woodsmoke-txt tracking-widest text-xs mt-4">
								TELEFONO
							</h2>
							<p className="leading-relaxed">0221 15-542-2323</p>
						</div>
					</div>
				</div>
				<div className="lg:w-1/3 md:w-1/2 hidden md:flex md:flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
					<h2 className=" text-2xl mb-1 font-medium title-font text-black dark:text-white">
						Reserve su turno o realice su consulta
					</h2>
					<p className="leading-relaxed mb-5 text-black dark:text-white">
						Aca puede ir algun texto o puede no ir nada
					</p>
					<div className="relative mb-4">
						<label
							htmlFor="name"
							className="leading-7 text-sm text-woodsmoke-txt dark:text-porcelain-txt "
						>
							Nombre y Apellido
						</label>
						<input
							type="text"
							id="name"
							name="name"
							className="w-full bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						></input>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="name"
							className="leading-7 text-sm text-woodsmoke-txt dark:text-porcelain-txt "
						>
							Telefono
						</label>
						<input
							type="number"
							id="phone"
							name="phone"
							className="w-full bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						></input>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="email"
							className="leading-7 text-sm text-woodsmoke-txt dark:text-porcelain-txt "
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							className="w-full bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
						></input>
					</div>
					<div className="relative mb-4">
						<label
							htmlFor="message"
							className="leading-7 text-sm text-woodsmoke-txt dark:text-porcelain-txt "
						>
							Escriba su consulta
						</label>
						<textarea
							id="message"
							name="message"
							className="w-full bg-alabaster-bg rounded border border-endeavour-sec focus:border-azure-acc focus:ring-2 focus:ring-endeavour-sec h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
						></textarea>
					</div>
					<button className="text-porcelain-txt bg-boctonic-acc border-0 py-2 px-6 focus:outline-none hover:bg-persian-blue-prim rounded text-lg">
						Enviar
					</button>
				</div>
			</div>
			{/* mobile */}
			<div className="container md:hidden p-4 py-24 flex flex-col gap-8">
				<div className=" bg-gray-500 rounded-lg overflow-hidden p-10 relative min-h-96">
					<iframe
						width="100%"
						height="100%"
						className="absolute inset-0"
						frameBorder="0"
						title="map"
						marginHeight={0}
						marginWidth={0}
						scrolling="no"
						src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=-34.9045934,-57.9700218&ie=UTF8&t=&z=14&iwloc=B&output=embed"
						style={{
							filter: "grayscale(0) contrast(1.2) opacity(0.7)",
						}}
					></iframe>
				</div>
                <div className="relative flex flex-wrap py-6 rounded shadow-md bg-alabaster-bg">
                    <div className="px-4">
                        <h2 className="title-font font-semibold text-woodsmoke-txt tracking-widest text-xs">
                            DIRECCION
                        </h2>
                        <p className="mt-1">Calle 10 N° 82 CP (1900)</p>
                    </div>
                    <div className="px-4 mt-4">
                        <h2 className="title-font font-semibold text-woodsmoke-txt tracking-widest text-xs">
                            EMAIL
                        </h2>
                        <a className="text-boctonic-acc leading-relaxed">
                            previsional.estudiointegral@gmail.com
                        </a>
                        <h2 className="title-font font-semibold text-woodsmoke-txt tracking-widest text-xs mt-4">
                            TELEFONO
                        </h2>
                        <p className="leading-relaxed">0221 15-542-2323</p>
                    </div>
                </div>
			</div>
		</section>
	);
};

export default Contact;
