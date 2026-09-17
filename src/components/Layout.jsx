import Navbar from "./navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<div className="fixed inset-0 -z-10 bg-[#FFFBF0] dark:bg-black transition-colors duration-300">
				<div className="absolute inset-0 bg-gradient-to-b from-black/[0.04] dark:from-white/[0.06] to-transparent"></div>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/20 blur-[120px] rounded-full"></div>
			</div>
			<Navbar />
			<div className="min-h-screen bg-transparent text-black dark:text-white relative transition-colors duration-300">
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
}
