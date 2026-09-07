export default function Footer() {
	return (
		<footer className="relative border-t border-yellow-500/10 bg-black overflow-hidden">
			{/* BG - Golden Glow */}
			<div className="absolute inset-0">
				<div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-yellow-500/10 blur-[120px] rounded-full"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-yellow-500/[0.03] to-transparent"></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row justify-between gap-10">
					<div>
						<h3 className="text-2xl font-black tracking-widest text-yellow-400">
							DEV.P
						</h3>
						<p className="mt-3 text-sm text-gray-400 max-w-xs">
							Building scalable, performant &
							beautiful web experiences.
						</p>
					</div>

					<div className="flex gap-16 text-sm">
						<div>
							<p className="text-gray-500 text-xs tracking-widest mb-4">
								NAVIGATE
							</p>
							<ul className="space-y-2 text-gray-300">
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Home
									</a>
								</li>
								<li>
									<a
										href="#skills"
										className="hover:text-yellow-400">
										Skills
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Projects
									</a>
								</li>
							</ul>
						</div>
						<div>
							<p className="text-gray-500 text-xs tracking-widest mb-4">
								CONNECT
							</p>
							<ul className="space-y-2 text-gray-300">
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										GitHub ↗
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										LinkedIn ↗
									</a>
								</li>
								<li>
									<a
										href="mailto:you@email.com"
										className="hover:text-yellow-400">
										Email ↗
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-6 border-t border-white/5 flex justify-between text-[11px] text-gray-500">
					<span>© 2025 DEV.P</span>
					<span>BUILT WITH REACT • TAILWIND</span>
				</div>
			</div>
		</footer>
	);
}
