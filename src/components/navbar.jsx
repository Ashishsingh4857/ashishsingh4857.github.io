export default function Navbar() {
	return (
		<nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-yellow-500/10">
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				<span className="font-bold tracking-widest text-yellow-400">
					DEV.P
				</span>
				<div className="flex gap-8 text-xs tracking-widest text-gray-300">
					<a
						href="#"
						className="hover:text-yellow-400">
						HOME
					</a>
					<a
						href="#skills"
						className="hover:text-yellow-400">
						SKILLS
					</a>
					<a
						href="#"
						className="hover:text-yellow-400">
						PROJECTS
					</a>
					<a
						href="#"
						className="hover:text-yellow-400">
						CONTACT
					</a>
				</div>
			</div>
		</nav>
	);
}
