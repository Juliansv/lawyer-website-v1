const Preloader = () => {
	return (
		<div className="flex h-screen absolute top-0 w-full">
			<div
				id="preloader-r"
				className="h-screen w-1/2 bg-alabaster-bg absolute top-0 right-0 z-50 flex"
			></div>
			<div
				id="preloader-l"
				className="h-screen bg-alabaster-bg w-1/2 absolute top-0 left-0-0 z-50 flex"
			></div>
            <span id="preloader-text" className="m-auto text-woodsmoke-txt z-[60]">
                daniela
            </span>
		</div>
	);
};

export default Preloader;
