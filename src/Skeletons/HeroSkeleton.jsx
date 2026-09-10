const shimmer = "animate-pulse bg-white/[0.06]";

export default function HeroSkeleton() {
	return (
		<section className="relative min-h-screen flex items-center overflow-hidden bg-black">
			{/* BG placeholder */}
			<div className={`absolute inset-0 ${shimmer}`}></div>

			<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
			<div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
				<div className="max-w-3xl">
					{/* Stats pills */}
					<div className="flex gap-3 mb-6">
						<div
							className={`h-8 w-24 rounded-full ${shimmer}`}></div>
						<div
							className={`h-8 w-32 rounded-full ${shimmer}`}></div>
					</div>

					{/* Main Heading - 3 lines */}
					<div className="space-y-4">
						<div
							className={`h-14 md:h-20 w-64 rounded-lg ${shimmer}`}></div>
						<div
							className={`h-14 md:h-20 w-80 rounded-lg bg-yellow-500/10 ${shimmer}`}></div>
						<div
							className={`h-14 md:h-20 w-[420px] rounded-lg ${shimmer}`}></div>
					</div>

					{/* Subtitle */}
					<div className="mt-6 space-y-3">
						<div
							className={`h-5 w-full max-w-lg rounded ${shimmer}`}></div>
						<div
							className={`h-5 w-3/4 max-w-lg rounded ${shimmer}`}></div>
					</div>

					{/* Buttons */}
					<div className="mt-10 flex gap-4">
						<div
							className={`h-12 w-36 rounded-full ${shimmer}`}></div>
						<div
							className={`h-12 w-36 rounded-full bg-white/5 ${shimmer}`}></div>
					</div>
				</div>
			</div>
		</section>
	);
}
