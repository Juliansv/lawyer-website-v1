import HeroSection from "./components/Hero-section";
import Service from "./components/Service";
import News from "./components/News";
import Bullets from "./components/Bullets";
import Contact from "./components/Contact";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<Service />
			<News />
			<Bullets />
			<Contact />
		</main>
	);
}
