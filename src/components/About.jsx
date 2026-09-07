import { useState } from "react";

export default function About() {
	const [showMore, setShowMore] = useState(false);

	return (
		<div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center px-4 py-16">
			{/* BG liquid */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(234,179,8,0.15),transparent_60%)]"></div>
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(234,179,8,0.12),transparent_60%)]"></div>
			<div className="absolute bottom-0 w-full h-[60%] bg-gradient-to-t from-yellow-900/10 to-transparent"></div>

			<div className="relative z-10 w-full max-w-[520px] rounded-[28px] border border-yellow-500/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-[20px] p-8 shadow-[0_0_60px_rgba(234,179,8,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden">
				{/* glow */}
				<div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-500/20 blur-[60px] rounded-full pointer-events-none"></div>
				<div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-600/20 blur-[80px] rounded-full pointer-events-none"></div>

				{/* Avatar */}
				<div className="flex flex-col items-center">
					<div className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-b from-yellow-300 to-yellow-700">
						<img
							src="https://i.pravatar.cc/100?img=12"
							className="w-full h-full rounded-full object-cover bg-black"
							alt="Alex Chen"
						/>
					</div>
					<h2 className="mt-4 text-2xl font-bold text-white">
						Alex Chen
					</h2>
					<p className="mt-1 text-[13px] text-yellow-200/80 text-center">
						Full-Stack Developer • Based in San
						Francisco {showMore && "• 5+ Years"}
					</p>
				</div>

				{/* CONTENT */}
				{!showMore ? (
					<>
						<p className="mt-6 text-center text-sm text-gray-300 leading-relaxed px-4">
							I'm Alex Chen, a full-stack developer
							building performant web apps with a
							focus on clean design & user
							experience.
						</p>

						<button
							onClick={() => setShowMore(true)}
							className="mt-8 w-full py-3 rounded-xl border border-yellow-400/50 bg-black/40 backdrop-blur text-sm text-yellow-200 hover:bg-yellow-400/10 transition">
							Show More →
						</button>

						{/* bottom stats - only half info */}
						<div className="mt-8 flex justify-center gap-4 text-[11px] text-gray-500">
							<span>📅 5+ Years</span>
							<span>📍 SF, CA</span>
							<span>💼 Available</span>
						</div>
					</>
				) : (
					<>
						<p className="mt-5 text-[13px] text-gray-300 leading-relaxed">
							I'm Alex Chen, a full-stack developer
							with 5+ years building scalable web
							applications and open-source
							contributor. I specialize in crafting
							intuitive UI and reliable backend
							systems, focusing on modern React,
							Node.js, and cloud architecture. I
							enjoy turning complex problems into
							simple, performant, and accessible
							solutions.
						</p>

						<div className="mt-6">
							<p className="text-xs tracking-widest text-yellow-300 mb-3">
								SKILLS
							</p>
							<div className="flex flex-wrap gap-2">
								{[
									"React",
									"TypeScript",
									"Node.js",
									"Next.js",
									"Tailwind CSS",
									"PostgreSQL",
									"AWS",
									"Docker",
									"Python",
									"GraphQL",
								].map((s) => (
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
								REST/GraphQL • CI/CD • Agile •
								Testing (Jest, Playwright) •
								Figma
							</p>
						</div>

						<div className="mt-6 flex gap-3">
							<button className="flex-1 py-3 rounded-xl bg-[#E8C86A] text-black font-semibold text-sm">
								Download Resume
							</button>
							<button className="flex-1 py-3 rounded-xl border border-yellow-400/40 text-yellow-200 text-sm">
								Contact Me
							</button>
						</div>

						<button
							onClick={() => setShowMore(false)}
							className="mt-4 w-full py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-gray-400 hover:bg-white/10 transition">
							Show Less ↑
						</button>
					</>
				)}
			</div>
		</div>
	);
}
