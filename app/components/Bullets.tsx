const Bullets = () => {
	return (
		<section id="bullets" className="text-porcelain-txt body-font bg-alabaster-bg dark:bg-wards-bg-800">
			<div className="container px-5 py-24 mx-auto">
				<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-boctonic-acc sm:flex-row flex-col">
					<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-alabaster-drk text-boctonic-acc flex-shrink-0">
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
						<p className="leading-relaxed text-2xl text-woodsmoke-txt dark:text-porcelain-txt">
							Los trámites previsionales son largos, tediosos y
							por los intereses comprometidos, generan ansiedad en
							nuestros clientes.
						</p>
					</div>
				</div>
				<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-boctonic-acc sm:flex-row flex-col">
					<div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
						<p className="leading-relaxed text-2xl text-woodsmoke-txt dark:text-porcelain-txt">
							Por tal motivo, mi compromiso es realizar todo
							cuanto esté a nuestro alcance para que el trámite
							demore lo menos posible.
						</p>
					</div>
					<div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-alabaster-drk text-boctonic-acc flex-shrink-0">
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
					<div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-alabaster-drk text-boctonic-acc flex-shrink-0">
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
						<p className="leading-relaxed text-2xl text-woodsmoke-txt dark:text-porcelain-txt">
							Soy abogada Especialistas en Jubilaciones, mantener
							a mis clientes permanentemente informados acerca del
							estado de su gestión es una de las prioridades
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Bullets;
