import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			{/* Background - fixed alag rakha */}
			<div className="fixed inset-0 -z-10 bg-black">
				<div className="absolute inset-0 bg-gradient-to-b from-white/[0.06] to-transparent"></div>
				<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/20 blur-[120px] rounded-full"></div>
			</div>

			{/* Navbar - ab Layout ke bahar jaisa fixed rahega */}
			<Navbar />

			<div className="min-h-screen bg-transparent text-white relative">
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
}
