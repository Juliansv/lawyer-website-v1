import ContactForm from "./Form/ContactForm";

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
						src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=-34.9045934,-57.9700218&ie=UTF8&t=&z=14&iwloc=B&output=embed"
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
                <ContactForm />
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
						src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=-34.9045934,-57.9700218&ie=UTF8&t=&z=14&iwloc=B&output=embed"
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
