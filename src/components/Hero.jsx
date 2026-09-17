import { useEffect, useRef } from "react";
import HeroSkeleton from "../Skeletons/HeroSkeleton";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { usePortfolio } from "../Context/PortfolioContext";
import { useTheme } from "../Context/ThemeContext";

export default function Hero() {
	const { data, loading } = usePortfolio();
	const { isDark } = useTheme();
	const typedRef = useRef(null);

	useEffect(() => {
		if (loading || !data) return;
		const typed = new Typed(typedRef.current, {
			strings: ["SCALABLE", "FAST", "MODERN", "PERFORMANT"],
			typeSpeed: 80,
			backSpeed: 50,
			backDelay: 1500,
			loop: true,
		});
		return () => typed.destroy();
	}, [loading, data]);

	if (loading || !data) return <HeroSkeleton />;

	return (
		<section className="relative min-h-screen flex items-center overflow-hidden">
			<img
				src={
					isDark
						? data?.hero.img
						: data?.hero.img_light || data?.hero.img
				}
				className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-70"
			/>
			{/* Gradient Overlay - light me cream, dark me black */}
			<div className="absolute inset-0 bg-gradient-to-r  to-[#FFFBF0]/20 dark:from-black dark:via-black/80 dark:to-transparent"></div>
			<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#FFFBF0] dark:from-black to-transparent"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
				<div className="max-w-3xl">
					<motion.div
						initial={{ x: -80, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{
							duration: 0.7,
							ease: "easeOut",
						}}
						className="flex gap-3 mb-6">
						<span className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-700 dark:text-yellow-400 text-xs font-medium">
							{data.hero.stats.exp} Exp
						</span>
						<span className="px-4 py-2 rounded-full bg-black/[0.04] dark:bg-white/5 border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 text-xs">
							{data.hero.stats.projects}
						</span>
					</motion.div>

					<motion.h1
						initial={{ x: -120, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter text-black dark:text-white">
						I BUILD <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-700 dark:from-yellow-300 dark:to-yellow-600">
							<span ref={typedRef}></span>
						</span>
						<br />
						WEB EXPERIENCES
					</motion.h1>

					<motion.p
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mt-6 text-black/60 dark:text-gray-400 max-w-lg text-lg">
						{data.hero.subtitle}
					</motion.p>

					<motion.div
						initial={{ x: -80, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mt-10 flex gap-4">
						<button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
							View Projects
						</button>
						<button className="border border-black/20 dark:border-white/20 text-black dark:text-white px-8 py-3 rounded-full hover:bg-black/[0.05] dark:hover:bg-white/10 transition-all">
							Contact Me
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
