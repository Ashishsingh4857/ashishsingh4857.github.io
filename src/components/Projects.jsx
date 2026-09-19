import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePortfolio } from "../Context/PortfolioContext";
import ProjectCardSkeleton from "../Skeletons/ProjectCardSkeleton";

export default function Project() {
	const [index, setIndex] = useState(0);
	const navigate = useNavigate();
	const { data, loading } = usePortfolio();

	if (loading || !data) {
		return (
			<div
				id="project"
				className="py-28">
				<div className="max-w-7xl mx-auto px-6">
					<div className="h-10 w-64 bg-black/10 dark:bg-white/10 rounded-full mx-auto animate-pulse mb-14"></div>
					<div className="grid md:grid-cols-3 gap-6 mx-8">
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
						<ProjectCardSkeleton />
					</div>
				</div>
			</div>
		);
	}

	const projects = data.projects;
	console.log(projects);

	const next = () => setIndex((p) => (p + 1) % projects.length);
	const prev = () =>
		setIndex((p) => (p - 1 + projects.length) % projects.length);

	const getCards = () => {
		let c = [];
		for (let i = 0; i < 3; i++)
			c.push(projects[(index + i) % projects.length]);
		return c;
	};

	return (
		<div
			id="project"
			className="relative py-28">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-center text-[40px] font-black text-black dark:text-white">
					My{" "}
					<span className="bg-gradient-to-b from-yellow-600 dark:from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
						Projects
					</span>
				</h2>
				<div className="relative mt-14 flex items-center">
					<button
						onClick={prev}
						className="absolute -left-2 md:-left-6 z-20 w-11 h-11 rounded-full bg-white/80 dark:bg-white/[0.08] border border-black/10 dark:border-white/10 text-black dark:text-white backdrop-blur-xl shadow-sm hover:bg-white dark:hover:bg-white/15 transition">
						‹
					</button>

					<div className="grid md:grid-cols-3 gap-6 w-full mx-8">
						{getCards().map((p) => (
							<div
								key={p.id}
								className="group relative rounded-[20px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.06] backdrop-blur-xl p-3 pb-5 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-none transition-colors flex flex-col h-full">
								<div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#FDE68A] text-black text-[11px] font-bold shadow-sm">
									{p.tag}
								</div>
								<div className="h-[180px] rounded-[14px] overflow-hidden bg-black/5 dark:bg-black">
									<img
										src={p.img}
										alt={p.title}
										loading="lazy"
										width="400"
										height="180"
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="mt-5 px-2">
									<h3 className="text-[20px] font-bold text-black dark:text-white">
										{p.title}
									</h3>
									<p className="mt-1 text-[13px] text-black/60 dark:text-white/60">
										{p.desc}
									</p>
								</div>
								<div className="mt-4 px-2 flex flex-wrap gap-2">
									{p.tech.map((t) => (
										<span
											key={t}
											className="px-3 py-1 rounded-full text-xs border bg-black/[0.04] dark:bg-white/[0.06] border-black/10 dark:border-white/10 text-black/70 dark:text-white/70">
											{t}
										</span>
									))}
								</div>

								<div className="mt-auto pt-5 px-2 flex gap-3">
									<button
										onClick={() =>
											navigate(
												`/project/${p.id}`,
											)
										}
										className="flex-1 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.06] text-black dark:text-white text-sm font-semibold hover:bg-black/[0.08] dark:hover:bg-white/[0.12] transition">
										More Details →
									</button>
									{p.liveDemoLink && (
										<a
											href={
												p.liveDemoLink
											}
											target="_blank"
											rel="noopener noreferrer"
											onClick={(
												e,
											) =>
												e.stopPropagation()
											}
											className="flex-1 py-2.5 rounded-xl bg-gradient-to-b from-[#FDE68A] to-[#D4A017] text-black text-sm font-bold hover:brightness-105 transition shadow-[0_4px_16px_rgba(212,160,23,0.3)] flex items-center justify-center">
											Live ↗
										</a>
									)}
								</div>
							</div>
						))}
					</div>

					<button
						onClick={next}
						className="absolute -right-2 md:-right-6 z-20 w-11 h-11 rounded-full bg-white/80 dark:bg-white/[0.08] border border-black/10 dark:border-white/10 text-black dark:text-white backdrop-blur-xl shadow-sm hover:bg-white dark:hover:bg-white/15 transition">
						›
					</button>
				</div>
			</div>
		</div>
	);
}
