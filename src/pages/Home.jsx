import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Project />
			<Contact />
		</>
	);
}
