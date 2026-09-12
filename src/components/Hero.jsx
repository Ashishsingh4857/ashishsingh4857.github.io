import { usePortfolio } from "../hooks/usePortfolio";
import HeroSkeleton from "../Skeletons/HeroSkeleton";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Hero() {
	const { data, loading } = usePortfolio();
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
			{/* Background Image */}
			<img
				src={data?.hero.img}
				alt=""
				aria-hidden="true"
				className="absolute inset-0 w-full h-full object-cover opacity-70"
			/>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
			<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

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
						<span className="px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">
							{data.hero.stats.exp} Exp
						</span>
						<span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs">
							{data.hero.stats.projects}
						</span>
					</motion.div>

					<motion.h1
						initial={{ x: -120, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-7xl font-extrabold leading-[0.9] tracking-tighter">
						I BUILD <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">
							<span ref={typedRef}></span>
						</span>
						<br />
						WEB EXPERIENCES
					</motion.h1>

					<motion.p
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mt-6 text-gray-400 max-w-lg text-lg">
						{data.hero.subtitle}
					</motion.p>

					<motion.div
						initial={{ x: -80, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="mt-10 flex gap-4">
						<button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all hover:scale-105">
							View Projects
						</button>
						<button className="border border-white/20 px-8 py-3 rounded-full hover:bg-white/10 transition-all">
							Contact Me
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
