import { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import AboutSkeleton from "../Skeletons/AboutSkeleton";

export default function About() {
	const [showMore, setShowMore] = useState(false);
	const { data, loading } = usePortfolio();

	if (loading || !data?.about) return <AboutSkeleton />;

	const about = data.about;

	return (
		<div
			id="about"
			className="relative bg-black py-20 flex justify-center px-4">
			<div className="w-full max-w-[520px] relative rounded-[28px] border border-yellow-500/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-[20px] p-8 shadow-[0_0_60px_rgba(234,179,8,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
				<div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-500/20 blur-[60px] rounded-full pointer-events-none"></div>
				<div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-600/20 blur-[80px] rounded-full pointer-events-none"></div>

				<div className="flex flex-col items-center relative z-10">
					<div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-b from-yellow-300 to-yellow-700 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
						<img
							src={about.avatar}
							className="w-full h-full rounded-full object-cover bg-black"
							alt={about.name}
						/>
					</div>
					<h2 className="mt-4 text-2xl font-bold text-white">
						{about.name}
					</h2>
					<p className="mt-1 text-[13px] text-yellow-200/80 text-center">
						{showMore
							? about.fullRole
							: about.shortRole}
					</p>
				</div>

				<div className="relative z-10">
					{!showMore ? (
						<>
							<p className="mt-6 text-center text-sm text-gray-300 leading-relaxed px-4">
								{about.shortBio}
							</p>
							<button
								onClick={() =>
									setShowMore(true)
								}
								className="mt-8 w-full py-3 rounded-xl border border-yellow-400/50 bg-black/40 backdrop-blur text-sm text-yellow-200 hover:bg-yellow-400/10 transition">
								Show More →
							</button>
							<div className="mt-8 flex justify-center gap-4 text-[11px] text-gray-500">
								{about.meta.map((m) => (
									<span key={m}>{m}</span>
								))}
							</div>
						</>
					) : (
						<>
							<p className="mt-5 text-[13px] text-gray-300 leading-relaxed">
								{about.longBio}
							</p>
							<div className="mt-6">
								<p className="text-xs tracking-widest text-yellow-300 mb-3">
									SKILLS
								</p>
								<div className="flex flex-wrap gap-2">
									{about.skills.map((s) => (
										<span
											key={s}
											className="px-3 py-1.5 rounded-lg text-[12px] bg-gradient-to-b from-yellow-500/30 to-yellow-700/30 border border-yellow-500/20 text-yellow-100">
											{s}
										</span>
									))}
								</div>
							</div>
							<div className="mt-6 pt-4 border-t border-white/10">
								<p className="text-xs tracking-widest text-yellow-300 text-center mb-2">
									TOOLING & PRACTICES
								</p>
								<p className="text-[12px] text-center text-gray-400">
									{about.tooling}
								</p>
							</div>
							<div className="mt-6 flex gap-3">
								<a
									href={about.resumeUrl}
									target="_blank"
									className="flex-1 py-3 rounded-xl bg-[#E8C86A] text-black font-semibold text-sm hover:bg-yellow-300 transition text-center">
									Download Resume
								</a>
								<a
									href="#contact"
									className="flex-1 py-3 rounded-xl border border-yellow-400/40 text-yellow-200 text-sm hover:bg-yellow-400/10 transition text-center">
									Contact Me
								</a>
							</div>
							<button
								onClick={() =>
									setShowMore(false)
								}
								className="mt-4 w-full py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-400 hover:bg-white/10 transition">
								Show Less ↑
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
