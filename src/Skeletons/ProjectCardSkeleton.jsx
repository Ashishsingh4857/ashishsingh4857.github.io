const shimmer = "animate-pulse bg-white/[0.06]";

function CardSkeleton() {
	return (
		<div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-3 pb-5">
			<div className={`h-[180px] rounded-[14px] ${shimmer}`}></div>
			<div className={`mt-5 h-6 w-3/4 rounded ${shimmer}`}></div>
			<div className={`mt-2 h-4 w-full rounded ${shimmer}`}></div>
			<div className="mt-4 flex gap-2">
				<div
					className={`h-6 w-16 rounded-full ${shimmer}`}></div>
				<div
					className={`h-6 w-16 rounded-full ${shimmer}`}></div>
			</div>
			<div
				className={`mt-5 h-10 w-full rounded-xl ${shimmer}`}></div>
		</div>
	);
}

export default function ProjectsSkeleton() {
	return (
		<div
			id="project"
			className="relative py-28">
			<div className="max-w-7xl mx-auto px-6">
				<div
					className={`mx-auto h-10 w-48 rounded ${shimmer}`}></div>
				<div className="mt-14 grid md:grid-cols-3 gap-6 mx-8">
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
				</div>
			</div>
		</div>
	);
}
