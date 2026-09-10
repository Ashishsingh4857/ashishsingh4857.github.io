import ScrollReveal from "../components/ScrollReveal";
import Hero from "../components/Hero";
import About from "../components/About";
import Project from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<>
			<ScrollReveal>
				<Hero />
			</ScrollReveal>

			<ScrollReveal>
				<About />
			</ScrollReveal>

			<ScrollReveal delay={0.2}>
				<Skills />
			</ScrollReveal>

			<ScrollReveal y={80}>
				<Project />
			</ScrollReveal>

			<ScrollReveal>
				<Contact />
			</ScrollReveal>
		</>
	);
}
