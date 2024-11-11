import Link from "next/link";
import React from "react";
import WhatsappButton from "../components/Whatsapp-button";

const SuccessPage = () => {
	return (
		<section className="text-gray-600 body-font grow md:flex">
			<div className="container px-5 py-24 mx-auto flex flex-wrap md:w-4/5 md:flex md:flex-col md:m-auto md:gap-4">
				<h2 className="sm:text-3xl text-2xl md:text-4xl text-woodsmoke-txt dark:text-porcelain-txt font-medium title-font mb-2">
					Recibimos su mensaje y lo estamos procesando
				</h2>
				<div className="md:w-3/5">
					<p className="leading-relaxed text-base text-woodsmoke-txt dark:text-porcelain-txt md:text-xl">
						Si quiere una atencion mas rapida, puede mandar un
						mensaje al +221 542 2323 o hacer click en el boton de
						abajo.
					</p>
					<div className="flex md:mt-4 mt-6">
						<Link
							href="https://wa.me/+540221155422323"
							className="w-fit block"
						>
							<WhatsappButton />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SuccessPage;
