export default function Projects() {
	const projects = [
		{
			name: "E-Commerce Platform",
			tech: "Next.js • Stripe",
			color: "from-yellow-400 to-orange-500",
		},
		{
			name: "AI Dashboard",
			tech: "React • Python",
			color: "from-purple-400 to-pink-500",
		},
		{
			name: "Portfolio API",
			tech: "Node.js • Postgres",
			color: "from-green-400 to-cyan-500",
		},
	];
	return (
		<section className="max-w-7xl mx-auto px-6 py-20">
			<h2 className="text-4xl font-bold mb-10">
				Selected Projects
			</h2>
			<div className="grid md:grid-cols-3 gap-6">
				{projects.map((p) => (
					<div
						key={p.name}
						className="glass-card rounded-2xl p-1">
						<div
							className={`h-48 rounded-xl bg-gradient-to-br ${p.color} opacity-80`}></div>
						<div className="p-5">
							<h3 className="font-bold">
								{p.name}
							</h3>
							<p className="text-xs text-gray-500 mt-1">
								{p.tech}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
