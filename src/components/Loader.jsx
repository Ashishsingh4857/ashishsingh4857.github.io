import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setProgress((p) => {
				if (p >= 100) {
					clearInterval(interval);
					setTimeout(() => onFinish(), 600);
					return 100;
				}
				return p + 2.5;
			});
		}, 30);
		return () => clearInterval(interval);
	}, [onFinish]);

	return (
		<div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden">
			{/* BG Liquid Gold Swirl */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-black"></div>
				<div className="absolute inset-0 opacity-40 bg-[url('/images/hero-bg.webp')] bg-cover mix-blend-lighten"></div>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,black_80%)]"></div>
				{/* gold swirls */}
				{/* ye wala code replace kar de us div se */}
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.15)_0%,transparent_60%)]"></div>
				<div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(234,179,8,0.10)_60deg,transparent_180deg,rgba(234,179,8,0.08)_260deg,transparent_360deg)] animate-[spin_12s_linear_infinite] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>
			</div>

			{/* CENTER */}
			<div className="relative z-10 flex flex-col items-center">
				{/* AC with spinning circles */}
				<div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] flex items-center justify-center">
					{/* Outer spinning wire circles */}
					<div className="absolute inset-0 rounded-full border border-yellow-400/30 border-t-yellow-200/60 border-b-transparent animate-[spin_2s_linear_infinite]"></div>
					<div className="absolute inset-[6px] rounded-full border border-yellow-500/20 border-l-yellow-300/50 border-r-transparent animate-[spin_3s_linear_infinite_reverse]"></div>
					<div className="absolute inset-[14px] rounded-full border border-yellow-300/10 border-dashed animate-[spin_6s_linear_infinite]"></div>

					{/* glow behind AC */}
					<div className="absolute w-[60%] h-[60%] bg-yellow-500/15 blur-[30px] rounded-full animate-pulse"></div>

					{/* AC Text - creation animation */}
					<h1 className="text-[90px] md:text-[110px] font-serif font-light leading-none bg-gradient-to-b from-yellow-100 via-yellow-300 to-yellow-600 bg-clip-text text-transparent animate-[acPop_1.2s_ease-out] drop-shadow-[0_0_30px_rgba(234,179,8,0.6)] tracking-tight">
						As
					</h1>
				</div>

				{/* Text below */}
				<div className="mt-12 flex flex-col items-center">
					<p className="text-[11px] md:text-[12px] tracking-[0.4em] text-yellow-100/60 uppercase">
						Developer Portfolio
					</p>

					{/* Progress bar */}
					<div className="mt-6 w-[240px] h-[2px] bg-white/10 rounded-full overflow-hidden relative">
						<div
							className="h-full bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-400 shadow-[0_0_10px_#facc15] transition-all duration-100 ease-linear"
							style={{
								width: `${progress}%`,
							}}></div>
						<div
							className="absolute top-0 h-full w-10 bg-white/50 blur-[6px]"
							style={{
								left: `${progress}%`,
							}}></div>
					</div>

					<p className="mt-4 text-sm text-white/50 tracking-wide">
						Loading...
					</p>
					<div className="mt-2 flex gap-2">
						<span className="w-1 h-1 rounded-full bg-yellow-400 animate-[bounce_1s_infinite]"></span>
						<span className="w-1 h-1 rounded-full bg-yellow-400 animate-[bounce_1s_infinite_0.2s]"></span>
						<span className="w-1 h-1 rounded-full bg-yellow-400 animate-[bounce_1s_infinite_0.4s]"></span>
					</div>
					<p className="mt-4 text-[11px] text-white/30 tracking-wide">
						Initializing assets • Preparing workspace
					</p>
				</div>
			</div>

			<style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes spin_reverse { to { transform: rotate(-360deg); } }
        @keyframes acPop {
          0% { transform: scale(0.3) rotate(-10deg); opacity: 0; filter: blur(10px); }
          60% { transform: scale(1.1) rotate(2deg); opacity: 1; filter: blur(0px); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes bounce { 0%,100%{transform:translateY(0);opacity:0.3} 50%{transform:translateY(-4px);opacity:1} }
      `}</style>
		</div>
	);
}
