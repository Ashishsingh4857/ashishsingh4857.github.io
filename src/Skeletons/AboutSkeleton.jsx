const shimmer = "animate-pulse bg-white/[0.06]";

export default function AboutSkeleton() {
	return (
		<div
			id="about"
			className="relative bg-black py-20 flex justify-center px-4">
			<div className="w-full max-w-[520px] relative rounded-[28px] border border-yellow-500/20 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-[20px] p-8 overflow-hidden">
				<div className="flex flex-col items-center">
					<div
						className={`w-20 h-20 rounded-full ${shimmer}`}></div>
					<div
						className={`mt-4 h-6 w-32 rounded ${shimmer}`}></div>
					<div
						className={`mt-2 h-3 w-56 rounded ${shimmer}`}></div>
				</div>
				<div
					className={`mt-6 h-12 w-full rounded ${shimmer}`}></div>
				<div
					className={`mt-8 h-11 w-full rounded-xl ${shimmer}`}></div>
				<div className="mt-8 flex justify-center gap-4">
					<div
						className={`h-4 w-16 rounded ${shimmer}`}></div>
					<div
						className={`h-4 w-16 rounded ${shimmer}`}></div>
					<div
						className={`h-4 w-16 rounded ${shimmer}`}></div>
				</div>
			</div>
		</div>
	);
}
