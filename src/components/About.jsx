import { useState } from "react";
import { usePortfolio } from "../hooks/usePortfolio";
import AboutSkeleton from "../Skeletons/AboutSkeleton";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
	const [showMore, setShowMore] = useState(false);
	const { data, loading } = usePortfolio();

	if (loading || !data?.about) return <AboutSkeleton />;

	const about = data.about;
	const shortWords = about.shortBio.split(" ");

	return (
		<div
			id="about"
			className="relative bg-black py-20 flex justify-center px-4 overflow-hidden isolate">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				style={{ transform: "translateZ(0)" }}
				className="w-full max-w-[520px] relative rounded-[28px] border border-yellow-500/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-[20px] p-8 shadow-[0_0_60px_rgba(234,179,8,0.15),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden isolate transform-gpu">
				<div className="absolute -top-20 -left-20 w-60 h-60 bg-yellow-500/20 blur-[40px] rounded-full pointer-events-none"></div>
				<div className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-600/20 blur-[40px] rounded-full pointer-events-none"></div>

				<div className="flex flex-col items-center relative z-10">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.4,
							delay: 0.1,
							ease: "easeOut",
						}}
						className="w-20 h-20 rounded-full p-[2px] bg-gradient-to-b from-yellow-300 to-yellow-700 shadow-[0_0_20px_rgba(234,179,8,0.4)]">
						<img
							src={about.avatar}
							className="w-full h-full rounded-full object-cover bg-black"
							alt={about.name}
						/>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.15 }}
						className="mt-4 text-2xl font-bold text-white">
						{about.name}
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.2 }}
						className="mt-1 text-[13px] text-yellow-200/80 text-center">
						{showMore
							? about.fullRole
							: about.shortRole}
					</motion.p>
				</div>

				<div className="relative z-10">
					<AnimatePresence mode="wait">
						{!showMore ? (
							<motion.div
								key="short"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.2 }}>
								<p className="mt-6 text-center text-sm text-gray-300 leading-relaxed px-4 flex flex-wrap justify-center gap-x-[4px]">
									{shortWords.map(
										(word, i) => (
											<motion.span
												key={i}
												initial={{
													opacity: 0,
													y: 6,
												}}
												whileInView={{
													opacity: 1,
													y: 0,
												}}
												viewport={{
													once: true,
												}}
												transition={{
													duration: 0.2,
													delay:
														i *
														0.012,
													ease: "easeOut",
												}}>
												{word}
											</motion.span>
										),
									)}
								</p>

								<motion.button
									whileHover={{
										scale: 1.02,
									}}
									whileTap={{ scale: 0.98 }}
									onClick={() =>
										setShowMore(true)
									}
									className="mt-8 w-full py-3 rounded-xl border border-yellow-400/50 bg-black/40 backdrop-blur text-sm text-yellow-200 hover:bg-yellow-400/10 transition">
									Show More →
								</motion.button>

								<div className="mt-8 flex justify-center gap-4 text-[11px] text-gray-500">
									{about.meta.map((m) => (
										<span key={m}>
											{m}
										</span>
									))}
								</div>
							</motion.div>
						) : (
							<motion.div
								key="long"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0 }}
								transition={{
									duration: 0.3,
									ease: "easeOut",
								}}>
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{
										duration: 0.3,
									}}
									className="mt-5 text-[13px] text-gray-300 leading-relaxed">
									{about.longBio}
								</motion.p>

								<div className="mt-6">
									<p className="text-xs tracking-widest text-yellow-300 mb-3">
										SKILLS
									</p>
									<div className="flex flex-wrap gap-2">
										{about.skills.map(
											(s, i) => (
												<motion.span
													key={
														s
													}
													initial={{
														scale: 0.8,
														opacity: 0,
													}}
													animate={{
														scale: 1,
														opacity: 1,
													}}
													transition={{
														duration: 0.25,
														delay:
															i *
															0.03,
														ease: "easeOut",
													}}
													className="px-3 py-1.5 rounded-lg text-[12px] bg-gradient-to-b from-yellow-500/30 to-yellow-700/30 border border-yellow-500/20 text-yellow-100">
													{
														s
													}
												</motion.span>
											),
										)}
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
										href={
											about.resumeUrl
										}
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
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</motion.div>
		</div>
	);
}
