import { usePortfolio } from "../Context/PortfolioContext";
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
				<div className="w-2 h-8 bg-yellow-500 dark:bg-yellow-400 rounded-full"></div>
				<h2 className="text-4xl font-bold text-black dark:text-white">
					My Stack & Expertise
				</h2>
			</div>

			<div className="grid grid-cols-12 gap-4 auto-rows-[minmax(100px,auto)]">
				{/* Frontend */}
				<div className="col-span-12 lg:col-span-8 row-span-4 h-auto min-h-[380px] rounded-2xl p-6 flex flex-col bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-black/10 dark:border-yellow-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-none transition-colors">
					<div className="flex justify-between items-start">
						<h3 className="text-2xl font-bold text-black dark:text-white">
							Frontend Ecosystem
						</h3>
						<span className="text-yellow-700 dark:text-yellow-400 text-xs border border-yellow-600/20 dark:border-yellow-500/20 bg-yellow-500/10 px-3 py-1 rounded-full">
							{frontend.length} Stacks
						</span>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
						{frontend.map((s) => (
							<div
								key={s.name}
								className="bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 hover:border-yellow-500/50 dark:hover:border-yellow-400/50 transition">
								<img
									src={s.icon}
									alt={s.name}
									className="w-8 h-8 object-contain"
									onError={(e) =>
										(e.target.style.display =
											"none")
									}
								/>
								<span className="text-[11px] text-black/60 dark:text-gray-400 text-center">
									{s.name}
								</span>
							</div>
						))}
					</div>
				</div>

				{/* Backend */}
				<div className="col-span-12 lg:col-span-4 row-span-4 grid grid-rows-4 gap-4">
					{backend.map((s) => (
						<div
							key={s.name}
							className="rounded-2xl p-4 flex items-center gap-4 bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-black/10 dark:border-yellow-500/20 hover:border-yellow-500/40 transition">
							<div className="w-12 h-12 rounded-full bg-yellow-500/15 dark:bg-yellow-500/10 flex items-center justify-center shrink-0">
								<img
									src={s.icon}
									alt={s.name}
									className="w-6 h-6 object-contain"
								/>
							</div>
							<div>
								<h4 className="font-bold text-sm text-black dark:text-white">
									{s.name}
								</h4>
								<p className="text-[11px] text-black/50 dark:text-gray-500">
									{s.desc}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Dev Tools */}
				<div className="col-span-12 lg:col-span-7 rounded-2xl p-6 flex flex-col justify-center bg-white/70 dark:bg-white/[0.05] backdrop-blur-xl border border-black/10 dark:border-yellow-500/20 transition-colors">
					<h3 className="text-lg font-bold mb-1 text-black dark:text-white">
						Dev Tools & Workflow
					</h3>
					<p className="text-[11px] text-black/50 dark:text-gray-500 mb-4">
						Tools I use daily for shipping and
						debugging.
					</p>
					<div className="flex flex-wrap gap-3">
						{devtools?.map((s) => (
							<div
								key={s.name}
								className="bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-2.5 flex items-center gap-3 hover:border-yellow-500/30 transition">
								<img
									src={s.icon}
									alt={s.name}
									className="w-5 h-5 object-contain"
								/>
								<div>
									<p className="text-xs font-medium text-black dark:text-white">
										{s.name}
									</p>
									<p className="text-[10px] text-black/50 dark:text-gray-500">
										{s.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Editing */}
				<div className="col-span-12 lg:col-span-5 rounded-2xl p-6 bg-gradient-to-r from-yellow-500/15 to-white/40 dark:from-yellow-500/10 dark:to-transparent backdrop-blur-xl border border-black/10 dark:border-yellow-500/20 flex flex-col justify-center transition-colors">
					<h3 className="text-lg font-bold mb-1 text-black dark:text-white">
						Editing & Content
					</h3>
					<p className="text-[11px] text-black/60 dark:text-gray-400 mb-4">
						For reels & thumbnails — fast cuts in
						CapCut, color grading in Lightroom.
					</p>
					<div className="flex gap-3">
						{editing?.map((s) => (
							<div
								key={s.name}
								className="bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-yellow-500/30 transition rounded-xl px-5 py-3 flex items-center gap-3">
								<img
									src={s.icon}
									alt={s.name}
									className="w-6 h-6 object-contain"
								/>
								<span className="text-xs text-black dark:text-white">
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
