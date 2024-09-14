import Image from "next/image";

const HeroSection = () => {
	return (
		<section id="image-banner" className="">
			<div className="absolute justify-around z-10 px-4 flex flex-col min-h-96 md:h-[36rem] md:justify-center md:gap-20 md:px-32">
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
					className="object-cover absolute opacity-50"
                    priority
				/>
			</div>
		</section>
	);
};

export default HeroSection;
