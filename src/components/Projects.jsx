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
					<div className="h-10 w-64 bg-white/10 rounded-full mx-auto animate-pulse mb-14"></div>
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
				<h2 className="text-center text-[40px] font-black text-white">
					My
					<span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-transparent">
						Projects
					</span>
				</h2>
				<div className="relative mt-14 flex items-center">
					<button
						onClick={prev}
						className="absolute -left-2 md:-left-6 z-20 w-11 h-11 rounded-full bg-white/[0.08] border border-white/10 text-white">
						‹
					</button>

					<div className="grid md:grid-cols-3 gap-6 w-full mx-8">
						{getCards().map((p) => (
							<div
								key={p.id}
								className="group relative rounded-[20px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-3 pb-5">
								<div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#FDE68A] text-black text-[11px] font-bold">
									{p.tag}
								</div>
								<div className="h-[180px] rounded-[14px] overflow-hidden bg-black">
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
									<h3 className="text-[20px] font-bold text-white">
										{p.title}
									</h3>
									<p className="mt-1 text-[13px] text-white/60">
										{p.desc}
									</p>
								</div>
								<div className="mt-4 px-2 flex flex-wrap gap-2">
									{p.tech.map((t) => (
										<span
											key={t}
											className="px-3 py-1 rounded-full text-xs border bg-white/[0.06] border-white/10 text-white/70">
											{t}
										</span>
									))}
								</div>
								<button
									onClick={() =>
										navigate(
											`/project/${p.id}`,
										)
									}
									className="mt-5 mx-2 w-[calc(100%-16px)] py-2.5 rounded-xl bg-gradient-to-b from-[#FDE68A] to-[#D4A017] text-black text-sm font-bold">
									More Details →
								</button>
							</div>
						))}
					</div>

					<button
						onClick={next}
						className="absolute -right-2 md:-right-6 z-20 w-11 h-11 rounded-full bg-white/[0.08] border border-white/10 text-white">
						›
					</button>
				</div>
			</div>
		</div>
	);
}
