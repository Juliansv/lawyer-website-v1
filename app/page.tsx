import Image from "next/image";

export default function Home() {
	return (
		<>
			<header className="h-24 w-full flex justify-between p-4">
				<div id="logo" className="content-center">DM</div>
				<div>
					<div id="nav-bar-menu" className="">MENU</div>
					<button className="mt-1 bg-green-500 h-10 w-28 rounded-md font-bold">
						Whatsapp
					</button>
				</div>
			</header>
			<main>
				<section id="image-banner" className="">
					<div className="absolute justify-center z-10 px-4 flex flex-col min-h-[34rem]">
						<h1 className=" text-4xl font-bold">
							Abogada Previsional
						</h1>
						<p className=" text-xl pt-8">
							Estudio juridico especializado en derecho de la
							seguridad social
						</p>
						<p className=" text-xl pt-10">
							No dudes en contactarnos:
						</p>
						<button className="mt-4 bg-green-500 h-10 w-28 rounded-md font-bold">
							Whatsapp
						</button>
					</div>
					<div className="min-h-[34rem] relative">
						<Image
							src="/images/banner.jpg"
							alt="banner"
							fill={true}
							className="object-cover absolute opacity-25"
						/>
					</div>
				</section>
				<section id="vision" className="bg-slate-200">
					<div className="px-4 py-10 text-black">
						<h2 className="text-3xl font-bold text-center">
							El objetivo es acompañarlo durante todo el
							desarrollo de la gestión
						</h2>
						<p className="pt-4">
							Nos enfocamos en brindarle atención personalizada y
							mantenerlo informado permanentemente sobre el estado
							de su trámite. Los cambios legislativos, la
							multiplicidad de jurisdicciones y la excesiva
							burocracia, lo convierten en una rama poco accesible
							para el ciudadano común.
						</p>
					</div>
				</section>
				<section
					id="service"
					className="bg-slate-100 px-4 py-10 flex flex-col gap-10 items-center"
				>
					<div
						id="service-card"
						className="h-60 border-[1px] w-full content-center px-4 border-solid border-slate-300 rounded-sm bg-white"
					><p className="text-black font-bold text-xl text-center">1- Brindar asesoramiento profesional en la temática previsional, evacuando sus dudas e inquietudes. </p></div>
					<div
						id="service-card"
						className="h-60 border-[1px] w-full content-center px-4 border-solid border-slate-300 rounded-sm bg-white"
					><p className="text-black font-bold text-xl text-center">2- Tramitar su beneficio previsional, para que obtenga el mejor haber en el menor tiempo posible. </p></div>
					<div
						id="service-card"
						className="h-60 border-[1px] w-full content-center px-4 border-solid border-slate-300 rounded-sm bg-white"
					><p className="text-black font-bold text-xl text-center">3-Calcular su futura jubilación o si la misma ha sido correctamente liquidada.</p></div>
                    <div
						id="service-card"
						className="h-60 border-[1px] w-full content-center px-4 border-solid border-slate-300 rounded-sm bg-white"
					><p className="text-black font-bold text-xl text-center">4- asesorar para planificar mejor su futuro retiro.</p></div>
                    <div
						id="service-card"
						className="h-60 border-[1px] w-full content-center px-4 border-solid border-slate-300 rounded-sm bg-white"
					><p className="text-black font-bold text-xl text-center">5- Patrocinar a  clientes en sus reclamos ante autoridades administrativas y judiciales.</p></div>
                    <div
						id="service-card"
						className="h-60 border-[1px] w-full content-center px-4 border-solid border-slate-300 rounded-sm bg-white"
					><p className="text-black font-bold text-xl text-center">6- (PUAM) Pension universal para el adulto mayor , Pensión por fallecimiento, pensión por discapacidad. Pension madre de 7 hijos. </p></div>
				</section>
			</main>
			<footer className="p-4 h-10">footer</footer>
		</>
	);
}
