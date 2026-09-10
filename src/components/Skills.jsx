import { usePortfolio } from "../hooks/usePortfolio";
import SkillsSkeleton from "../Skeletons/SkillsSkeleton";
export default function Skills() {
	const { data, loading } = usePortfolio();
	if (loading || !data) return <SkillsSkeleton />;

	const { frontend, backend, devtools, editing } = data.skills;

	return (
		<section
			id="skills"
			className="py-20 px-6 max-w-7xl mx-auto">
			<div className="flex items-center gap-4 mb-10">
				<div className="w-2 h-8 bg-yellow-400"></div>
				<h2 className="text-4xl font-bold">
					My Stack & Expertise
				</h2>
			</div>

			<div className="grid grid-cols-12 gap-4 auto-rows-[minmax(100px,auto)]">
				{/* Frontend */}
				<div className="col-span-12 lg:col-span-8 row-span-4 h-auto min-h-[380px] glass-card p-6 flex flex-col">
					<div className="flex justify-between items-start">
						<h3 className="text-2xl font-bold">
							Frontend Ecosystem
						</h3>
						<span className="text-yellow-400 text-xs border border-yellow-500/20 px-3 py-1 rounded-full">
							{frontend.length} Stacks
						</span>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
						{frontend.map((s) => (
							<div
								key={s.name}
								className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-yellow-400/50 transition">
								<img
									src={s.icon}
									alt={s.name}
									className="w-8 h-8 object-contain"
									onError={(e) =>
										(e.target.style.display =
											"none")
									}
								/>
								<span className="text-[11px] text-gray-400 text-center">
									{s.name}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Backend - SIRF MongoDB + Node etc */}
				<div className="col-span-12 lg:col-span-4 row-span-4 grid grid-rows-4 gap-4">
					{backend.map((s) => (
						<div
							key={s.name}
							className="glass-card p-4 flex items-center gap-4 hover:border-yellow-400/40 transition">
							<div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center">
								<img
									src={s.icon}
									alt={s.name}
									className="w-6 h-6 object-contain"
								/>
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

				{/* NEW - Dev Tools Row */}
				<div className="col-span-12 lg:col-span-7 glass-card p-6 flex flex-col justify-center">
					<h3 className="text-lg font-bold mb-1">
						Dev Tools & Workflow
					</h3>
					<p className="text-[11px] text-gray-500 mb-4">
						Tools I use daily for shipping and
						debugging.
					</p>
					<div className="flex flex-wrap gap-3">
						{devtools?.map((s) => (
							<div
								key={s.name}
								className="bg-white/5 border border-white/10 rounded-full px-4 py-2.5 flex items-center gap-3 hover:border-yellow-400/30 transition">
								<img
									src={s.icon}
									alt={s.name}
									className="w-5 h-5 object-contain"
								/>
								<div>
									<p className="text-xs font-medium">
										{s.name}
									</p>
									<p className="text-[10px] text-gray-500">
										{s.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* NEW - Editing Tools */}
				<div className="col-span-12 lg:col-span-5 glass-card p-6 bg-gradient-to-r from-yellow-500/10 to-transparent flex flex-col justify-center">
					<h3 className="text-lg font-bold mb-1">
						Editing & Content
					</h3>
					<p className="text-[11px] text-gray-400 mb-4">
						For reels & thumbnails — fast cuts in
						CapCut, color grading in Lightroom.
					</p>
					<div className="flex gap-3">
						{editing?.map((s) => (
							<div
								key={s.name}
								className="bg-white/5 border border-white/10 hover:border-yellow-400/30 transition rounded-xl px-5 py-3 flex items-center gap-3">
								<img
									src={s.icon}
									alt={s.name}
									className="w-6 h-6 object-contain"
								/>
								<span className="text-xs">
									{s.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
