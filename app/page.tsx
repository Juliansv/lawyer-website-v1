import Header from "./components/Header";
import HeroSection from "./components/Hero-section";
import Service from "./components/Service";
import News from "./components/News";
import Bullets from "./components/Bullets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

export default function Home() {
	return (
		<>
            <Preloader />
            <Header />
			<main>
				<HeroSection />
				<Service />
				<News />
				<Bullets />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
