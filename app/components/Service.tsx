import { BriefcaseIcon, CalculatorIcon, LawyerIcon, PlanningIcon, SupportIcon, UpdateIcon } from "@/app/components/Icons";

const Service = () => {
	return (
		<section
			id="service"
			className="bg-alabaster-bg body-font dark:bg-wards-bg-800"
		>
			<div className="container px-5 py-24 mx-auto">
				<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
					<h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 md:text-4xl text-woodsmoke-txt dark:text-porcelain-txt">
						El objetivo es acompañarlo durante todo el desarrollo de
						la gestión
					</h2>
					<p className="lg:w-1/2 w-full leading-relaxed text-woodsmoke-txt dark:text-porcelain-txt">
						Nos enfocamos en brindarle atención personalizada y
						mantenerlo informado permanentemente sobre el estado de
						su trámite. Los cambios legislativos, la multiplicidad
						de jurisdicciones y la excesiva burocracia, lo
						convierten en una rama poco accesible para el ciudadano
						común.
					</p>
				</div>
				<div className="flex flex-wrap -m-4 md:px-32">
					<div className="xl:w-1/3 md:w-1/2 p-4">
						<div className="border border-persian-blue-prim dark:border-jordi-blue-prim p-6 rounded-lg md:min-h-[19rem]">
							<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<LawyerIcon />
							</div>
							<h2 className="text-lg  font-medium title-font mb-2 text-woodsmoke-txt dark:text-porcelain-txt">
								Asesoramiento Previsional
							</h2>
							<p className="leading-relaxed text-base text-woodsmoke-txt dark:text-porcelain-txt">
								Brindar asesoramiento profesional en la temática
								previsional, evacuando sus dudas e inquietudes.
							</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4">
						<div className="border border-persian-blue-prim dark:border-jordi-blue-prim p-6 rounded-lg md:min-h-[19rem]">
							<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<BriefcaseIcon />
							</div>
							<h2 className="text-lg  font-medium title-font mb-2 text-woodsmoke-txt dark:text-porcelain-txt">
								Gestión Eficiente
							</h2>
							<p className="leading-relaxed text-base text-woodsmoke-txt dark:text-porcelain-txt">
								Tramitar su beneficio previsional, para que
								obtenga el mejor haber en el menor tiempo
								posible
							</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4">
						<div className="border border-persian-blue-prim dark:border-jordi-blue-prim p-6 rounded-lg md:min-h-[19rem]">
							<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<CalculatorIcon />
							</div>
							<h2 className="text-lg  font-medium title-font mb-2 text-woodsmoke-txt dark:text-porcelain-txt">
								Cálculo Jubilatorio
							</h2>
							<p className="leading-relaxed text-base text-woodsmoke-txt dark:text-porcelain-txt">
								Calcular su futura jubilación o si la misma ha
								sido correctamente liquidada.
							</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4 w-full">
						<div className="border border-persian-blue-prim dark:border-jordi-blue-prim p-6 rounded-lg md:min-h-[19rem]">
							<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <PlanningIcon />
							</div>
							<h2 className="text-lg  font-medium title-font mb-2 text-woodsmoke-txt dark:text-porcelain-txt">
								Planificación Estratégica
							</h2>
							<p className="leading-relaxed text-base text-woodsmoke-txt dark:text-porcelain-txt">
								Asesorar para planificar mejor su futuro retiro.
							</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4">
						<div className="border border-persian-blue-prim dark:border-jordi-blue-prim p-6 rounded-lg md:min-h-[19rem]">
							<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<UpdateIcon />
							</div>
							<h2 className="text-lg  font-medium title-font mb-2 text-woodsmoke-txt dark:text-porcelain-txt">
								Actualización y Reajuste de Haberes
							</h2>
							<p className="leading-relaxed text-base text-woodsmoke-txt dark:text-porcelain-txt">
								Patrocinar a clientes en sus reclamos ante
								autoridades administrativas y judiciales.
								Brindamos el respaldo necesario durante todo el
								proceso, buscando resolver los conflictos de la
								manera más eficaz, beneficiosa y en el menor
								tiempo posible.
							</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4">
						<div className="border border-persian-blue-prim dark:border-jordi-blue-prim p-6 rounded-lg md:min-h-[19rem]">
							<div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
								<SupportIcon />
							</div>
							<h2 className="text-lg  font-medium title-font mb-2 text-woodsmoke-txt dark:text-porcelain-txt">
								Apoyo Integral
							</h2>
							<p className="leading-relaxed text-base text-woodsmoke-txt dark:text-porcelain-txt">
								(PUAM) Pension universal para el adulto mayor,
								pension por fallecimiento, pension por
								discapacidad, pension madre de 7 hijos.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Service;
