import Image from "next/image";

const HeroSection = () => {
	return (
		<section id="image-banner" className="">
			<div className="relative">
				<img
					src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
					className="absolute inset-0 object-cover w-full h-full"
					alt=""
				/>
				<div className="relative bg-wards-bg-900 bg-opacity-75">
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20">
						<div className="flex flex-col items-center justify-between xl:flex-row">
							<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
								<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-porcelain-txt sm:text-5xl sm:leading-none">
									Estudio Previsional{" "}
									<br className="md:block" />
									<span className="text-porcelain-txt text-2xl sm:text-3xl">
										Jubilaciones y pensiones
									</span>
								</h2>
								<p className="max-w-xl mb-4 text-base text-alabaster-bg md:text-lg">
									Estudio juridico especializado en derecho
									previsional de la seguridad social.
								</p>
								<a
									href="/"
									aria-label=""
									className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-boctonic-acc hover:text-gray-400"
								>
									whatsapp
									<svg
										className="inline-block w-3 ml-2"
										fill="currentColor"
										viewBox="0 0 12 12"
									>
										<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
									</svg>
								</a>
							</div>
							<div className="w-full max-w-xl xl:w-5/12">
								<div className="bg-alabaster-bg rounded shadow-2xl p-7 sm:p-10">
									<h3 className="mb-4 text-woodsmoke-txt text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
										Realice su consulta
									</h3>
									<form>
										<div className=" flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
											<div className="relative mb-4">
												<label
													htmlFor="name"
													className="leading-7 text-sm text-woodsmoke-txt "
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
													className="leading-7 text-sm text-woodsmoke-txt "
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
													className="leading-7 text-sm text-woodsmoke-txt "
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
													className="leading-7 text-sm text-woodsmoke-txt "
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
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="absolute justify-around z-10 px-4 flex flex-col min-h-96 md:h-[36rem] md:justify-center md:gap-20 md:px-32">
				<div>
					<h1 className="text-4xl font-bold md:text-6xl text-white">
						Estudio Previsional
					</h1>
					<p className=" text-xl pt-8 md:pt-4 md:text-2xl text-white">
						Jubilaciones y pensiones
					</p>
				</div>
				<div>
					<p className="text-xl md:text-2xl text-white">
						No dudes en contactarnos:
					</p>
					<button className="mt-4 bg-green-500 h-10 w-28 rounded-md font-bold text-white">
						Whatsapp
					</button>
				</div>
			</div>
			<div className="min-h-96 relative md:h-[36rem] bg-black">
				<Image
					src="/images/banner.jpg"
					alt="banner"
					fill={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover absolute opacity-50"
                    priority={true}
				/>
			</div> */}
		</section>
	);
};

export default HeroSection;
