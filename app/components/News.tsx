import Image from "next/image";

const News = () => {
	return (
		<section id="news" className=" body-font bg-alabaster-drk dark:bg-wards-bg-900">
			<div className="container md:px-32 md:py-24 mx-auto p-4 py-10">
				<div className="flex flex-col">
					<div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
						<h2 className="sm:w-2/5 text-woodsmoke-txt dark:text-porcelain-txt md:text-4xl font-medium title-font text-2xl mb-2 sm:mb-0">
							NOTICIAS
						</h2>
					</div>
				</div>
				<div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
					<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
						<div className="rounded-lg h-64 overflow-hidden relative">
							<Image
								alt="content"
								fill={true}
								className="object-cover object-center h-full w-full absolute"
								src="/images/banner.jpg"
							/>
						</div>
						<h2 className="text-xl font-medium title-font text-woodsmoke-txt dark:text-porcelain-txt mt-5">
							Noticia 1
						</h2>
						<p className="text-base leading-relaxed mt-2 text-woodsmoke-txt dark:text-porcelain-txt">
							Swag shoivdigoitch literally meditation subway tile
							tumblr cold-pressed. Gastropub street art beard
							dreamcatcher neutra, ethical XOXO lumbersexual.
						</p>
						<a className="text-boctonic-acc dark:text-azure-acc inline-flex items-center mt-3">
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
						</a>
					</div>
					<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
						<div className="rounded-lg h-64 overflow-hidden relative">
							<Image
								alt="content"
								fill={true}
								className="object-cover object-center h-full w-full absolute"
								src="/images/banner.jpg"
							/>
						</div>
						<h2 className="text-xl font-medium title-font text-woodsmoke-txt dark:text-porcelain-txt mt-5">
							Noticia 2
						</h2>
						<p className="text-base leading-relaxed mt-2 text-woodsmoke-txt dark:text-porcelain-txt">
							Swag shoivdigoitch literally meditation subway tile
							tumblr cold-pressed. Gastropub street art beard
							dreamcatcher neutra, ethical XOXO lumbersexual.
						</p>
						<a className="text-boctonic-acc dark:text-azure-acc inline-flex items-center mt-3">
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
						</a>
					</div>
					<div className="p-4 md:w-1/3 sm:mb-0 mb-6">
						<div className="rounded-lg h-64 overflow-hidden relative">
							<Image
								alt="content"
								fill={true}
								className="object-cover object-center h-full w-full absolute"
								src="/images/banner.jpg"
							/>
						</div>
						<h2 className="text-xl font-medium title-font text-woodsmoke-txt dark:text-porcelain-txt mt-5">
							Noticia 3
						</h2>
						<p className="text-base leading-relaxed mt-2 text-woodsmoke-txt dark:text-porcelain-txt">
							Swag shoivdigoitch literally meditation subway tile
							tumblr cold-pressed. Gastropub street art beard
							dreamcatcher neutra, ethical XOXO lumbersexual.
						</p>
						<a className="text-boctonic-acc dark:text-azure-acc inline-flex items-center mt-3">
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
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default News;
