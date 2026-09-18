import { Link } from "react-router-dom";

const Logo = ({ size = "md" }) => {
	const sizes = {
		sm: {
			icon: "text-[18px]",
			main: "text-[12px]",
			sub: "text-[10px]",
			leading: "leading-[10px]",
		},
		md: {
			icon: "text-[22px]",
			main: "text-[16px]",
			sub: "text-[12px]",
			leading: "leading-[12px]",
		},
		lg: {
			icon: "text-[26px]",
			main: "text-[20px]",
			sub: "text-[14px]",
			leading: "leading-[14px]",
		},
	};

	const s = sizes[size];

	return (
		<Link
			to="/"
			className="relative z-10 flex items-center gap-2">
			<span
				className={`${s.icon} text-yellow-600 dark:text-yellow-300 font-mono font-bold tracking-tight`}>
				&lt;/&gt;
			</span>
			<div className={s.leading}>
				<p
					className={`${s.main} tracking-[0.2em] text-yellow-600 dark:text-yellow-300 font-bold capitalize`}>
					code
				</p>
				<p
					className={`${s.sub} tracking-[0.2em] text-black/60 dark:text-white/70`}>
					with ashu
				</p>
			</div>
		</Link>
	);
};

export default Logo;
