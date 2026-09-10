const shimmer = "animate-pulse bg-white/[0.06]";

export default function SkillsSkeleton() {
	return (
		<section className="py-20 px-6 max-w-7xl mx-auto">
			{/* Title Row Skeleton */}
			<div className="flex items-center gap-4 mb-10">
				<div className={`w-2 h-8 rounded ${shimmer}`}></div>
				<div className={`h-9 w-72 rounded-lg ${shimmer}`}></div>
			</div>

			<div className="grid grid-cols-12 gap-4 auto-rows-[minmax(100px,auto)]">
				{/* Frontend Ecosystem - 8 col */}
				<div className="col-span-12 lg:col-span-8 row-span-4 h-auto min-h-[380px] glass-card p-6 flex flex-col">
					<div className="flex justify-between items-start">
						<div
							className={`h-7 w-48 rounded ${shimmer}`}></div>
						<div
							className={`h-6 w-20 rounded-full ${shimmer}`}></div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
							(i) => (
								<div
									key={i}
									className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-2">
									<div
										className={`w-8 h-8 rounded-full ${shimmer}`}></div>
									<div
										className={`h-3 w-12 rounded ${shimmer}`}></div>
								</div>
							),
						)}
					</div>
				</div>

				{/* Backend - 4 col */}
				<div className="col-span-12 lg:col-span-4 row-span-4 grid grid-rows-4 gap-4">
					{[1, 2, 3, 4].map((i) => (
						<div
							key={i}
							className="glass-card p-4 flex items-center gap-4">
							<div
								className={`w-12 h-12 rounded-full ${shimmer}`}></div>
							<div className="flex-1 space-y-2">
								<div
									className={`h-4 w-24 rounded ${shimmer}`}></div>
								<div
									className={`h-3 w-32 rounded ${shimmer}`}></div>
							</div>
						</div>
					))}
				</div>

				{/* Dev Tools Row - 7 col */}
				<div className="col-span-12 lg:col-span-7 glass-card p-6 flex flex-col justify-center">
					<div
						className={`h-5 w-40 rounded mb-2 ${shimmer}`}></div>
					<div
						className={`h-3 w-64 rounded mb-4 ${shimmer}`}></div>
					<div className="flex flex-wrap gap-3">
						{[1, 2, 3, 4, 5].map((i) => (
							<div
								key={i}
								className={`h-10 w-28 rounded-full ${shimmer}`}></div>
						))}
					</div>
				</div>

				{/* Editing Tools - 5 col */}
				<div className="col-span-12 lg:col-span-5 glass-card p-6 bg-gradient-to-r from-yellow-500/10 to-transparent flex flex-col justify-center">
					<div
						className={`h-5 w-36 rounded mb-2 ${shimmer}`}></div>
					<div
						className={`h-3 w-full rounded mb-4 ${shimmer}`}></div>
					<div className="flex gap-3">
						<div
							className={`h-12 w-28 rounded-xl ${shimmer}`}></div>
						<div
							className={`h-12 w-28 rounded-xl ${shimmer}`}></div>
					</div>
				</div>
			</div>
		</section>
	);
}
