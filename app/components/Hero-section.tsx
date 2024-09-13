import Image from "next/image";

const HeroSection = () => {
	return (
		<section id="image-banner" className="">
			<div className="absolute justify-around z-10 px-4 flex flex-col min-h-96 md:h-[36rem] md:justify-center md:pl-72 md:gap-20">
				<div>
					<h1 className="text-4xl font-bold md:text-6xl dark:text-white">
						Abogada Previsional
					</h1>
					<p className=" text-xl pt-8 md:pt-4 md:text-2xl dark:text-white">
						Estudio juridico especializado en derecho de la
						seguridad social
					</p>
				</div>
				<div>
					<p className="text-xl md:text-2xl dark:text-white">
						No dudes en contactarnos:
					</p>
					<button className="mt-4 bg-green-500 h-10 w-28 rounded-md font-bold dark:text-white">
						Whatsapp
					</button>
				</div>
			</div>
			<div className="min-h-96 relative md:h-[36rem] bg-neutral-700 dark:bg-black">
				<Image
					src="/images/banner.jpg"
					alt="banner"
					fill={true}
					className="object-cover absolute opacity-50"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
