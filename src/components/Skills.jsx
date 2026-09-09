import { usePortfolio } from "../hooks/usePortfolio";

export default function Skills() {
	const { data } = usePortfolio();
	if (!data) return null;
	const { frontend, backend } = data.skills;

	return (
		<section
			id="skills"
			className=" py-20 px-6 max-w-7xl mx-auto">
			<div className="flex items-center gap-4 mb-10">
				<div className="w-2 h-8 bg-yellow-400"></div>
				<h2 className="text-4xl font-bold">
					My Stack & Expertise
				</h2>
			</div>

			{/* BENTO GRID - 12 cols */}
			<div className="grid grid-cols-12 gap-4 auto-rows-[100px]">
				{/* Frontend - Bada card - 8 cols */}
				<div className="col-span-12 lg:col-span-8 row-span-3 glass-card p-6 flex flex-col">
					<div className="flex justify-between items-start">
						<h3 className="text-2xl font-bold">
							Frontend Ecosystem
						</h3>
						<span className="text-yellow-400 text-xs border border-yellow-500/20 px-3 py-1 rounded-full">
							10 Stacks
						</span>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
						{frontend.map((s) => (
							<div
								key={s.name}
								className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-yellow-400/50 transition">
								<span className="text-xl">
									{s.short}
								</span>
								<span className="text-[11px] text-gray-400 text-center">
									{s.name}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Backend - 4 cols, stacked vertically */}
				<div className="col-span-12 lg:col-span-4 row-span-3 grid grid-rows-4 gap-4">
					{backend.map((s) => (
						<div
							key={s.name}
							className="glass-card p-4 flex items-center gap-4 hover:border-yellow-400/40 transition">
							<div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-lg">
								{s.icon}
							</div>
							<div>
								<h4 className="font-bold text-sm">
									{s.name}
								</h4>
								<p className="text-[11px] text-gray-500">
									{s.desc}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Extra highlight card */}
				<div className="col-span-12 glass-card p-6 bg-gradient-to-r from-yellow-500/10 to-transparent flex justify-between items-center">
					<p className="text-sm text-gray-300">
						Frontend heavy but backend strong — balanced
						for full-stack products.
					</p>
					<div className="w-32 h-1 bg-yellow-400/50 rounded-full"></div>
				</div>
			</div>
		</section>
	);
}
