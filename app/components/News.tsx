import Image from "next/image";
import Link from "next/link";

const News = () => {
	const newsImage =
		"https://utfs.io/f/vkK1Ch6wtg4lLtdxEB7r5yDd94PglxCvQMSunBOqf23RU6bh";

	return (
		<section
			id="news"
			className=" body-font bg-alabaster-drk dark:bg-wards-bg-900"
		>
			<div className="container md:px-32 md:py-24 mx-auto p-4 py-10">
				<div className="flex flex-col">
					<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
						<h2 className="sm:w-2/5 text-woodsmoke-txt dark:text-porcelain-txt md:text-4xl font-medium title-font text-2xl mb-2 sm:mb-0">
							NOTICIAS
						</h2>
					</div>
				</div>
				<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
					{news.map((article, index) => (
						<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
							<Link href={article.url} className="">
								<div className="rounded-lg h-64 overflow-hidden relative">
									<Image
										alt="content"
										fill={true}
										className="object-cover object-center h-full w-full absolute hover:scale-105 transition-all duration-300"
										src={article.imageUrl}
									/>
								</div>
								<h2 className="text-xl font-medium title-font text-woodsmoke-txt dark:text-porcelain-txt dark:hover:text-azure-acc hover:text-persian-blue-prim mt-5">
									{article.title}
								</h2>
							</Link>
							<p className="text-base leading-relaxed mt-2 text-woodsmoke-txt dark:text-porcelain-txt">
								{article.subtitle}
							</p>
							<Link
								href={article.url}
								className="text-boctonic-acc dark:text-azure-acc inline-flex items-center mt-3 hover:gap-1"
							>
								Leer mas
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="w-4 h-4 ml-2"
									viewBox="0 0 24 24"
								>
									<path d="M5 12h14M12 5l7 7-7 7"></path>
								</svg>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default News;

const news = [
	{
		title: "Jubilaciones en 2025: cuál es el plan del gobierno de Javier Milei",
		subtitle:
			"El pago extra para el haber mínimo quedará fijo en $70.000. Se extiende la negociación con las provincias por las cajas no transferidas a la Nación. El debate por los regímenes de excepción",
		imageUrl:
			"https://utfs.io/f/vkK1Ch6wtg4lBKCwBRPSTmr5wUfOtxXnADb8SceGdhCLs3a0",
		url: "https://www.infobae.com/economia/2024/11/02/jubilaciones-en-2025-cual-es-el-plan-del-gobierno-de-javier-milei/",
	},
	{
		title: "Cuánto cobra un jubilado en noviembre 2024",
		subtitle:
			"El haber mínimo y la jubilación máxima del penúltimo mes del año se pueden calcular a partir de la inflación de septiembre, cuáles son las cifras exactas según el caso",
		imageUrl:
			"https://utfs.io/f/vkK1Ch6wtg4lOqvfLlLuZSFyvHXcgltbRekjozBWIAMPGUiD",
		url: "https://www.lanacion.com.ar/economia/cuanto-cobra-un-jubilado-en-noviembre-2024-nid11102024/",
	},
	{
		title: "ANSES: Cómo cambiar el lugar de cobro de jubilaciones tras el nuevo anuncio del Gobierno",
		subtitle:
			"ANSES publicó en su página web la lista de agentes pagadores habilitados para este servicio, y aclaró que la elección del nuevo medio de cobro comenzará a regir 60 días después de realizar la solicitud.",
		imageUrl:
			"https://utfs.io/f/vkK1Ch6wtg4lD0dnE5hR8YxWlJXuTIZKNLwsi0CQD7moB9S2",
		url: "https://www.eltrecetv.com.ar/noticias/2024/11/09/anses-como-cambiar-el-lugar-de-cobro-de-jubilaciones-tras-el-nuevo-anuncio-del-gobierno/",
	},
];
