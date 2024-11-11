import Image from "next/image";
import Link from "next/link";
import WhatsappButton from "./Whatsapp-button";
import ContactForm from "./Form/ContactForm";

const HeroSection = () => {
    const heroImage = "https://utfs.io/f/vkK1Ch6wtg4laNbINkAQFHYTxfAVvbNJm73D0KIgdn6hGW98"
	return (
		<section id="image-banner" className="">
			<div className="relative">
				<Image
					src={heroImage}
					className="absolute inset-0 object-cover w-full h-full"
					alt=""
                    fill
                    priority={true}
				/>
				<div className="relative bg-wards-bg-900 bg-opacity-75">
					<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 lg:py-20">
						<div className="slide-up fade-in opacity-0 flex flex-col items-center justify-between xl:flex-row">
							<div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
								<h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-porcelain-txt sm:text-5xl sm:leading-none md:text-8xl">
									Estudio Previsional{" "}
									<br className="md:block" />
									<span className="text-porcelain-txt text-2xl sm:text-3xl md:text-4xl">
										Jubilaciones y Pensiones
									</span>
								</h2>
								<p className="max-w-xl mb-4 text-base text-alabaster-bg md:text-2xl md:mb-10">
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
