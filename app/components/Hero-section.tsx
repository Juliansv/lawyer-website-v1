import Image from "next/image";
import Link from "next/link";
import WhatsappButton from "./Whatsapp-button";
import ContactForm from "./Form/ContactForm";

const HeroSection = () => {
	return (
		<section id="image-banner" className="">
			<div className="relative">
				<Image
					src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
					className="absolute inset-0 object-cover w-full h-full"
					alt=""
                    fill
				/>
				<div className="relative bg-wards-bg-900 bg-opacity-75">
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20">
						<div className="flex flex-col items-center justify-between xl:flex-row">
							<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
								<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-porcelain-txt sm:text-5xl sm:leading-none">
									Estudio Previsional{" "}
									<br className="md:block" />
									<span className="text-porcelain-txt text-2xl sm:text-3xl">
										Jubilaciones y Pensiones
									</span>
								</h2>
								<p className="max-w-xl mb-4 text-base text-alabaster-bg md:text-lg">
									Estudio juridico especializado en derecho
									previsional de la seguridad social.
								</p>
								<Link href="https://wa.me/+540221155422323" className="w-fit block">
                                    <WhatsappButton />
                                </Link>
							</div>
							<ContactForm />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
