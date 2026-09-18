import { useNavigate, useLocation } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
	const navigate = useNavigate();
	const location = useLocation();

	const go = (id) => {
		const scroll = (target) => {
			const el =
				document.getElementById(target) ||
				document.getElementById(target + "s");
			if (el)
				el.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			else if (target === "home")
				window.scrollTo({ top: 0, behavior: "smooth" });
			else
				window.scrollTo({
					top: document.body.scrollHeight,
					behavior: "smooth",
				});
		};

		if (location.pathname !== "/") {
			navigate("/");
			setTimeout(() => scroll(id), 350);
		} else {
			scroll(id);
		}
	};

	return (
		<footer className="relative border-t border-black/10 dark:border-yellow-500/10 bg-[#F5F5F7] dark:bg-black overflow-hidden transition-colors duration-300">
			{/* BG - Golden Glow */}
			<div className="absolute inset-0">
				<div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/20 dark:bg-yellow-500/10 blur-[120px] rounded-full"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-yellow-500/[0.08] dark:from-yellow-500/[0.03] to-transparent"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row justify-between gap-10">
					<div>
						{/* LEFT - Logo */}
						<Logo size="sm" />
						<p className="mt-3 text-sm text-black/60 dark:text-gray-400 max-w-xs">
							Building scalable, performant &
							beautiful web experiences.
						</p>
					</div>

					<div className="flex gap-16 text-sm">
						<div>
							<p className="text-black/40 dark:text-gray-500 text-xs tracking-widest mb-4">
								NAVIGATE
							</p>
							<ul className="space-y-2 text-black/70 dark:text-gray-300">
								<li>
									<button
										onClick={() =>
											go("home")
										}
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										Home
									</button>
								</li>
								<li>
									<button
										onClick={() =>
											go("project")
										}
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										Projects
									</button>
								</li>
								<li>
									<button
										onClick={() =>
											go("skills")
										}
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										Skills
									</button>
								</li>
								<li>
									<button
										onClick={() =>
											go("about")
										}
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										About
									</button>
								</li>
								<li>
									<button
										onClick={() =>
											go("contact")
										}
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										Contact
									</button>
								</li>
							</ul>
						</div>
						<div>
							<p className="text-black/40 dark:text-gray-500 text-xs tracking-widest mb-4">
								CONNECT
							</p>
							<ul className="space-y-2 text-black/70 dark:text-gray-300">
								<li>
									<a
										href="https://github.com"
										target="_blank"
										rel="noreferrer"
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										GitHub ↗
									</a>
								</li>
								<li>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noreferrer"
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										LinkedIn ↗
									</a>
								</li>
								<li>
									<a
										href="mailto:you@email.com"
										className="hover:text-yellow-600 dark:hover:text-yellow-400 transition">
										Email ↗
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-6 border-t border-black/10 dark:border-white/5 flex justify-between text-[11px] text-black/40 dark:text-gray-500 tracking-widest">
					<span>© 2026 CODE WITH ASHU</span>
					<span>BUILT WITH REACT • TAILWIND</span>
				</div>
			</div>
		</footer>
	);
}
