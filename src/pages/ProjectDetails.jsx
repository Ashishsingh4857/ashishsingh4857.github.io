import { useParams, useNavigate } from "react-router-dom";
import { usePortfolio } from "../Context/PortfolioContext";

export default function ProjectDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { data, loading } = usePortfolio();

	if (loading || !data) {
		return (
			<div className="text-black dark:text-white p-20 text-center">
				Loading...
			</div>
		);
	}

	const project = data.projects.find((p) => String(p.id) === String(id));

	if (!project)
		return (
			<div className="text-black dark:text-white p-20 text-center">
				Project not found - ID: {id}
			</div>
		);

	return (
		<div className="pt-28 pb-20 max-w-5xl mx-auto px-6">
			<button
				onClick={() => navigate(-1)}
				className="mb-8 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.04] dark:bg-white/[0.06] text-black/70 dark:text-white/70 hover:bg-black/[0.08] dark:hover:bg-white/[0.1] transition">
				← Go Back
			</button>
			<img
				src={project.img}
				alt={project.title}
				width="800"
				height="360"
				className="w-full h-[360px] object-cover rounded-2xl border border-black/10 dark:border-white/10"
			/>
			<h1 className="text-[36px] font-black text-black dark:text-white mt-8">
				{project.title}
			</h1>
			<p className="text-black/60 dark:text-white/60 mt-3 leading-relaxed">
				{project.longDesc || project.desc}
			</p>
			<div className="mt-6 flex gap-2 flex-wrap">
				{project.tech.map((t) => (
					<span
						key={t}
						className="px-3 py-1 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70 text-xs">
						{t}
					</span>
				))}
			</div>
		</div>
	);
}
