import { useParams, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";

export default function ProjectDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const project = projectsData.find((p) => p.id === id);

	if (!project)
		return (
			<div className="text-white p-20 text-center">
				Project not found - ID: {id}
			</div>
		);

	return (
		<div className="pt-28 pb-20 max-w-5xl mx-auto px-6">
			<button
				onClick={() => navigate(-1)}
				className="mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.06] text-white/70">
				← Go Back
			</button>
			<img
				src={project.img}
				className="w-full h-[360px] object-cover rounded-2xl border border-white/10"
			/>
			<h1 className="text-[36px] font-black text-white mt-8">
				{project.title}
			</h1>
			<p className="text-white/60 mt-3 leading-relaxed">
				{project.longDesc}
			</p>
			<div className="mt-6 flex gap-2">
				{project.tech.map((t) => (
					<span
						key={t}
						className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70 text-xs">
						{t}
					</span>
				))}
			</div>
		</div>
	);
}
